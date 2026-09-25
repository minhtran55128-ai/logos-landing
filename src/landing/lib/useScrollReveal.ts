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
    // A [data-sr-group] reveals all of its [data-sr-item]s together, in order,
    // once the group as a whole scrolls into view, rather than each item
    // popping in on its own as it crosses the edge of the screen.
    const groups = Array.from(root.querySelectorAll<HTMLElement>("[data-sr-group]"))
    const groupItems = new Map(
      groups.map((group) => [group, Array.from(group.querySelectorAll<HTMLElement>("[data-sr-item]"))]),
    )
    const all = [...items, ...Array.from(groupItems.values()).flat()]
    all.forEach((item) => {
      item.dataset.sr = "hidden"
    })

    const finish = (event: TransitionEvent) => {
      const el = event.currentTarget as HTMLElement
      if (event.target !== el || event.propertyName !== "opacity") return
      el.dataset.sr = "done"
      el.removeEventListener("transitionend", finish)
    }

    const show = (list: HTMLElement[], plain: boolean) => {
      for (const el of list) {
        if (plain) {
          el.dataset.sr = "done"
          continue
        }
        el.dataset.sr = "in"
        el.addEventListener("transitionend", finish)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          const list = [...(el.hasAttribute("data-sr") ? [el] : []), ...(groupItems.get(el) ?? [])]
          // Already scrolled past (anchor jump, restored scroll): show it plainly.
          if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
            show(list, true)
            observer.unobserve(el)
            continue
          }
          if (!entry.isIntersecting) continue
          show(list, false)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    )
    items.forEach((item) => observer.observe(item))
    groups.forEach((group) => observer.observe(group))

    return () => {
      observer.disconnect()
      all.forEach((item) => {
        item.removeEventListener("transitionend", finish)
        item.dataset.sr = "done"
      })
    }
  }, [ref])
}
