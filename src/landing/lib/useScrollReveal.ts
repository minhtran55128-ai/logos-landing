import { useLayoutEffect, type RefObject } from "react"

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)"

// Fades elements marked data-sr up into place as they scroll into view. This is
// separate from the ScrollScene's own data-reveal handling and only touches
// [data-sr] elements. Inside the scene it only ever targets the inner content of
// the intro and of each card, never the cards themselves, whose transform and
// opacity belong to the scene. Once an element has
// finished, its data-sr becomes "done" so no leftover transition or transform
// can interfere with its own hover or open/close styles.
export function useScrollReveal(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia(REDUCED_QUERY).matches) return

    // data-sr-wide items belong to the desktop scroll scene; on phones the
    // scene's own per-card reveal already covers them, so they are left alone.
    const wide = window.matchMedia("(min-width: 768px)").matches
    const items = Array.from(
      root.querySelectorAll<HTMLElement>(wide ? "[data-sr], [data-sr-wide]" : "[data-sr]"),
    )
    items.forEach((item) => {
      item.dataset.sr = "hidden"
    })

    const finish = (event: TransitionEvent) => {
      const el = event.currentTarget as HTMLElement
      if (event.target !== el || event.propertyName !== "opacity") return
      el.dataset.sr = "done"
      el.removeEventListener("transitionend", finish)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          // Already scrolled past (anchor jump, restored scroll): show it plainly.
          if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
            el.dataset.sr = "done"
            observer.unobserve(el)
            continue
          }
          if (!entry.isIntersecting) continue
          el.dataset.sr = "in"
          el.addEventListener("transitionend", finish)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )
    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
      items.forEach((item) => {
        item.removeEventListener("transitionend", finish)
        item.dataset.sr = "done"
      })
    }
  }, [ref])
}
