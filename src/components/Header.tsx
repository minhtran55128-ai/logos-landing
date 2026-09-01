import { Menu, X } from "lucide-react"
import { useState } from "react"
import { scrollToId } from "../lib/scroll"
import { Logo } from "./Logo"

const NAV_LINKS = [
  { label: "Why Logos", id: "why" },
  { label: "In practice", id: "picture" },
  { label: "Questions", id: "faq" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(id: string) {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header className="absolute left-0 right-0 top-0 z-20">
      <div className="logos-reveal logos-section flex h-[76px] items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavClick("top")}
          aria-label="Logos, back to top"
        >
          <Logo />
        </button>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-xs font-semibold text-[#b6c0c4] md:flex"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => handleNavClick("join")}
          className="hidden rounded-full border border-white/20 px-4 py-2.5 text-[11px] font-semibold text-[#f7f4ee] transition-colors hover:bg-white hover:text-[#272d36] sm:block"
        >
          Join the waitlist
        </button>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-white/20 p-2.5 text-[#f7f4ee] md:hidden"
        >
          {menuOpen ? (
            <X size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="logos-crossfade mx-3 mt-2 flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#1d232a]/98 p-4 text-sm font-semibold text-[#e7e5df] shadow-2xl backdrop-blur sm:mx-5 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("join")}
            className="mt-2 rounded-full bg-[#b9e7df] px-4 py-3 text-center text-[13px] font-bold text-[#282b37]"
          >
            Join the waitlist
          </button>
        </div>
      )}
    </header>
  )
}
