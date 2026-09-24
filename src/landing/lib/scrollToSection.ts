export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) {
    // Not on the landing page itself (e.g. the terms page): go there and land
    // on the section once it has mounted.
    window.location.assign(`/#${id}`)
    return
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
}
