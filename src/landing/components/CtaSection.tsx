import { closingCta } from "../data/content"
import { CtaButton } from "./CtaButton"

export function CtaSection() {
  const { image } = closingCta

  return (
    <section className="landing-shell landing-section landing-section-cta">
      <div className="landing-cta-card">
        <picture className="landing-photo">
          <source srcSet={image.webp} type="image/webp" />
          <img
            src={image.fallback}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        </picture>

        <div className="landing-cta-content">
          <h2 className="landing-cta-title">{closingCta.title}</h2>
          <p className="landing-h4 w-full max-w-[447px] text-center">{closingCta.body}</p>
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
