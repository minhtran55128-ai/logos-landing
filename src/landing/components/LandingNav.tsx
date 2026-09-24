import { useEffect, useId, useRef, useState } from "react"

import { navLinks } from "../data/content"
import { scrollToSection } from "../lib/scrollToSection"
import { CtaButton } from "./CtaButton"
import { LoginButton } from "./LoginButton"
import { LogosLockup } from "./LogosLockup"

const DESKTOP_QUERY = "(min-width: 1024px)"

// Desktop shows the links inline. Below 1024px they move into a menu that drops
// down from the bar; on phones the two buttons move into it as well.
export function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onBreakpoint = () => {
      if (desktop.matches) setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    desktop.addEventListener("change", onBreakpoint)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
      desktop.removeEventListener("change", onBreakpoint)
    }
  }, [menuOpen])

  const goTo = (targetId: string) => {
    setMenuOpen(false)
    scrollToSection(targetId)
  }

  return (
    <header ref={headerRef} className="landing-shell landing-header">
      <nav className="landing-nav" aria-label="Primary">
        <LogosLockup />

        <ul className="landing-nav-links">
          {navLinks.map((link) => (
            <li key={link.targetId}>
              <a
                href={`#${link.targetId}`}
                className="landing-nav-link"
                onClick={(event) => {
                  event.preventDefault()
                  goTo(link.targetId)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="landing-nav-actions">
          <CtaButton className="landing-nav-bar-button" />
          <LoginButton className="landing-nav-bar-button" />
          <button
            ref={toggleRef}
            type="button"
            className="landing-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4L14 14M14 4L4 14" />
              ) : (
                <path d="M2.5 5H15.5M2.5 9H15.5M2.5 13H15.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div id={menuId} className="landing-nav-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.targetId}>
                <a
                  href={`#${link.targetId}`}
                  className="landing-nav-menu-link"
                  onClick={(event) => {
                    event.preventDefault()
                    goTo(link.targetId)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="landing-nav-menu-actions">
            <CtaButton />
            <LoginButton />
          </div>
        </div>
      ) : null}
    </header>
  )
}
