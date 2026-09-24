import { useLayoutEffect, type RefObject } from "react"

const WIDE_QUERY = "(min-width: 768px)"
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)"

// How much of the viewport height each stage of the scroll takes. The intake
// stretches to whatever room there is between where the box first appears and
// the pinned headline (within these bounds); the output stage is a fixed length.
const INTAKE_MIN_VH = 0.55
const INTAKE_MAX_VH = 0.8
const OUTPUT_START_VH = 0.98
const OUTPUT_RANGE_VH = 0.62

// Later cards in a group start a little after the earlier ones.
const INTAKE_STAGGER = 0.09

const INTAKE_END_SCALE = 0.3
const INTAKE_TILT_DEG = [-7, 5, -5, 7]
const OUTPUT_START_SCALE = 0.42
// A starting card sits this far inside the bottom edge of whatever hides it.
const OUTPUT_HIDE_INSET = 16
const OUTPUT_SIDE_MARGIN = 48
// Breathing room kept between the sticky headline and the first cards.
const HEADER_CLEARANCE = 24
// Where the box should be when the last card has gone in: this far below the headline.
const INTAKE_END_CLEARANCE = 24

// The animation eases toward the scroll position instead of tracking it exactly,
// so a hard flick or a stepped mouse wheel reads as one smooth movement.
const SMOOTH_MS = 120

const SCENE_PROPS = ["--p", "--q", "--f", "--tx", "--ty", "--rot", "--s1", "--s0", "--y0"]

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))
// Gentler than a cubic: the fastest point is about 1.6x the average speed, not 3x.
const easeInOutSine = (t: number) => (1 - Math.cos(Math.PI * t)) / 2

type Rect = { x: number; y: number; w: number; h: number }

// Layout position relative to the scene. offset* ignores transforms, so this is
// the card's resting place even while it is mid-animation.
function measure(el: HTMLElement, scene: HTMLElement): Rect {
  let x = 0
  let y = 0
  let node: HTMLElement | null = el
  while (node && node !== scene) {
    x += node.offsetLeft
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight }
}

function writeProgress(el: HTMLElement, prop: string, value: number, last: number[], index: number) {
  if (Math.abs(value - last[index]) < 0.0005) return
  last[index] = value
  el.style.setProperty(prop, value.toFixed(4))
}

// Desktop and tablet: the four feature cards tilt and shrink into the Logos box,
// then the showcase cards slide out from behind it, all driven by scroll position.
function startScroll(scene: HTMLElement): (() => void) | null {
  const header = scene.querySelector<HTMLElement>("[data-scene-header]")
  const box = scene.querySelector<HTMLElement>("[data-scene-box]")
  const intake = Array.from(scene.querySelectorAll<HTMLElement>("[data-scene-intake]"))
  const outputs = Array.from(scene.querySelectorAll<HTMLElement>("[data-scene-output]"))
  if (!header || !box || intake.length === 0 || outputs.length === 0) return null

  scene.dataset.scene = "scroll"

  let headerHeight = 0
  let boxY = 0
  let intakeStart = 0
  let intakeRange = 1
  let outputTops: number[] = []
  const lastIntake = intake.map(() => -1)
  const lastOutput = outputs.map(() => -1)
  const lastFill = [-1]
  let disposed = false

  const measureAll = () => {
    const boxRect = measure(box, scene)
    const boxCx = boxRect.x + boxRect.w / 2
    const boxCy = boxRect.y + boxRect.h / 2
    boxY = boxRect.y
    headerHeight = header.offsetHeight

    let cardsTop = Infinity
    intake.forEach((el, i) => {
      const rect = measure(el, scene)
      cardsTop = Math.min(cardsTop, rect.y)
      el.style.setProperty("--tx", `${boxCx - (rect.x + rect.w / 2)}px`)
      el.style.setProperty("--ty", `${boxCy - (rect.y + rect.h / 2)}px`)
      el.style.setProperty("--rot", `${INTAKE_TILT_DEG[i % INTAKE_TILT_DEG.length]}deg`)
      el.style.setProperty("--s1", String(INTAKE_END_SCALE))
    })

    // Intake starts once the cards sit fully below the headline (but no later than
    // the box appearing near the bottom of the screen) and runs while the box
    // travels up towards the headline.
    const viewportHeight = window.innerHeight
    intakeStart = Math.min(0.95 * viewportHeight, headerHeight + HEADER_CLEARANCE + (boxRect.y - cardsTop))
    const intakeEnd = headerHeight + INTAKE_END_CLEARANCE
    intakeRange = Math.max(
      INTAKE_MIN_VH * viewportHeight,
      Math.min(intakeStart - intakeEnd, INTAKE_MAX_VH * viewportHeight),
    )

    // Each output card starts hidden behind the bottom edge of the element above
    // it: the box for the first card, the previous card for the rest.
    let anchor = { bottom: boxRect.y + boxRect.h, width: boxRect.w }
    outputTops = outputs.map((el) => {
      const rect = measure(el, scene)
      const startScale = Math.min(OUTPUT_START_SCALE, (anchor.width - OUTPUT_SIDE_MARGIN) / rect.w)
      el.style.setProperty("--s0", String(startScale))
      el.style.setProperty("--y0", `${anchor.bottom - rect.h * startScale - OUTPUT_HIDE_INSET - rect.y}px`)
      anchor = { bottom: rect.y + rect.h, width: rect.w }
      return rect.y
    })
  }

  let targetTop = scene.getBoundingClientRect().top
  let shownTop = targetTop
  let frame = 0
  let lastTime = 0

  const render = () => {
    const viewportHeight = window.innerHeight

    const intakeProgress = clamp01((intakeStart - (shownTop + boxY)) / intakeRange)
    const span = 1 - (intake.length - 1) * INTAKE_STAGGER
    let total = 0
    intake.forEach((el, i) => {
      const progress = easeInOutSine(clamp01((intakeProgress - i * INTAKE_STAGGER) / span))
      writeProgress(el, "--p", progress, lastIntake, i)
      total += progress
    })
    // The box fills up as cards go in: each card adds an equal share.
    writeProgress(box, "--f", total / intake.length, lastFill, 0)

    // Each output card slides out as its resting place rises into view.
    outputs.forEach((el, i) => {
      const progress = easeInOutSine(
        clamp01((OUTPUT_START_VH * viewportHeight - (shownTop + outputTops[i])) / (OUTPUT_RANGE_VH * viewportHeight)),
      )
      writeProgress(el, "--q", progress, lastOutput, i)
    })
  }

  const tick = (now: number) => {
    const elapsed = Math.min(now - lastTime, 64)
    lastTime = now
    shownTop += (targetTop - shownTop) * (1 - Math.exp(-elapsed / SMOOTH_MS))
    if (Math.abs(targetTop - shownTop) < 0.4) {
      shownTop = targetTop
      frame = 0
    } else {
      frame = requestAnimationFrame(tick)
    }
    render()
  }

  const update = () => {
    targetTop = scene.getBoundingClientRect().top
    if (frame === 0) {
      lastTime = performance.now()
      frame = requestAnimationFrame(tick)
    }
  }

  // Layout changed (resize, fonts): jump straight to the right state, no easing.
  const snap = () => {
    cancelAnimationFrame(frame)
    frame = 0
    targetTop = scene.getBoundingClientRect().top
    shownTop = targetTop
    render()
  }

  const remeasure = () => {
    if (disposed) return
    measureAll()
    snap()
  }

  measureAll()
  snap()
  window.addEventListener("scroll", update, { passive: true })
  window.addEventListener("resize", remeasure)
  const observer = new ResizeObserver(remeasure)
  observer.observe(scene)
  void document.fonts?.ready.then(remeasure)

  return () => {
    disposed = true
    cancelAnimationFrame(frame)
    window.removeEventListener("scroll", update)
    window.removeEventListener("resize", remeasure)
    observer.disconnect()
    delete scene.dataset.scene
    for (const el of [...intake, ...outputs, box]) {
      for (const prop of SCENE_PROPS) el.style.removeProperty(prop)
    }
  }
}

// Mobile: a lighter effect where each card fades and slides in as it scrolls into view.
function startReveal(scene: HTMLElement): () => void {
  scene.dataset.scene = "reveal"
  const items = Array.from(scene.querySelectorAll<HTMLElement>("[data-reveal]"))

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        ;(entry.target as HTMLElement).dataset.revealed = "true"
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  )
  items.forEach((item) => observer.observe(item))

  return () => {
    observer.disconnect()
    delete scene.dataset.scene
    items.forEach((item) => delete item.dataset.revealed)
  }
}

// Reduced-motion users, and anyone without JavaScript, get the plain static layout.
export function useScrollScene(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scene = ref.current
    if (!scene) return

    const wide = window.matchMedia(WIDE_QUERY)
    const reduced = window.matchMedia(REDUCED_QUERY)
    let stop: (() => void) | null = null

    const apply = () => {
      stop?.()
      stop = null
      if (reduced.matches) return
      stop = wide.matches ? startScroll(scene) : startReveal(scene)
    }

    apply()
    wide.addEventListener("change", apply)
    reduced.addEventListener("change", apply)

    return () => {
      wide.removeEventListener("change", apply)
      reduced.removeEventListener("change", apply)
      stop?.()
    }
  }, [ref])
}
