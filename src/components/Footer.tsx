import { ArrowDown } from "lucide-react"
import { scrollToId } from "../lib/scroll"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="logos-section flex flex-col gap-5 py-9 text-[11px] text-[#8a9298] sm:flex-row sm:items-center sm:justify-between">
      <Logo tone="dark" />
      <div className="flex items-center gap-5">
        <span>Logos — early access</span>
        <button
          type="button"
          onClick={() => scrollToId("top")}
          className="flex items-center gap-1.5 transition-colors hover:text-[#19212b]"
        >
          Back to top
          <ArrowDown
            size={12}
            strokeWidth={2}
            className="rotate-180"
            aria-hidden="true"
          />
        </button>
      </div>
    </footer>
  )
}
