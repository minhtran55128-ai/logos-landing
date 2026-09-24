import { hero } from "../data/content"
import { CtaButton } from "./CtaButton"
import { LoginButton } from "./LoginButton"

export function Hero() {
  return (
    <section className="landing-shell landing-section landing-section-hero">
      <div className="landing-hero-stack">
        <div className="landing-hero-text">
          <h1 className="landing-display w-full max-w-[560px] text-center">{hero.headline}</h1>
          <p className="landing-hero-sub w-full max-w-[560px] text-center">{hero.subheadline}</p>
          <div className="landing-hero-actions">
            <CtaButton />
            {/* Below 600px the nav bar hides its own Login button behind the
                hamburger menu, so it isn't reachable without opening it — this
                gives phones a visible way in without that extra tap. */}
            <LoginButton className="landing-hero-login" />
          </div>
        </div>

        <div className="landing-hero-media">
          <picture>
            <source srcSet={hero.image.webp} type="image/webp" />
            <img
              src={hero.image.fallback}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              className="landing-hero-image"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
