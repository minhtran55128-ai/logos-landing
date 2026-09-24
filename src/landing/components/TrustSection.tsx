import { trust } from "../data/content"

// A continuously scrolling band of university logos. The track is the logo
// list rendered twice back to back; animating it left by exactly one copy's
// width loops seamlessly, with no jump or gap at the wrap point. Reduced
// motion shows the un-duplicated list instead.
export function TrustSection() {
  return (
    <section className="landing-shell landing-trust" aria-label={trust.heading}>
      <p className="landing-trust-heading">{trust.heading}</p>
      <div className="landing-trust-track-wrap">
        <div className="landing-trust-track">
          {trust.logos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="landing-trust-logo"
              data-logo={logo.id}
              data-invert={logo.invert ? "" : undefined}
              loading="lazy"
              decoding="async"
            />
          ))}
          {/* A second, decorative copy for the seamless loop — hidden from
              screen readers so the logo list isn't announced twice. */}
          {trust.logos.map((logo) => (
            <img
              key={`${logo.id}-repeat`}
              src={logo.src}
              alt=""
              aria-hidden="true"
              className="landing-trust-logo"
              data-logo={logo.id}
              data-invert={logo.invert ? "" : undefined}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
