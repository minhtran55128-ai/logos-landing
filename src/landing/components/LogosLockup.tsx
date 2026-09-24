import logoMark from "../assets/logo-mark.svg"
import { LogosMark } from "./LogosMark"

// Mark and wordmark share one vertical centre line. Links home from any page
// (index.html, terms.html, ...), not just within the landing page itself.
export function LogosLockup() {
  return (
    <a href="/" className="landing-lockup" aria-label="Logos, till startsidan">
      <LogosMark src={logoMark} size={30.7607} />
      <span className="landing-lockup-word">Logos</span>
    </a>
  )
}
