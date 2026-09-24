import { footer } from "../data/content"
import { LogosLockup } from "./LogosLockup"

export function LandingFooter() {
  return (
    <footer className="landing-shell landing-footer">
      <div className="landing-footer-grid">
        <LogosLockup />
        <p className="landing-h4 landing-footer-muted">{footer.tagline}</p>

        <hr className="landing-footer-divider" />

        <div className="landing-footer-left">
          <ul className="landing-footer-socials" aria-label={footer.socialsLabel}>
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="landing-footer-social"
                  style={{ width: social.width, height: social.height }}
                >
                  <img src={social.icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
          <p className="landing-h4 landing-footer-muted">{footer.copyright}</p>
        </div>

        <ul className="landing-footer-links">
          {footer.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="landing-h4 landing-footer-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
