import type { CSSProperties } from "react"

import logoMarkWhite from "../assets/logo-mark-white.svg"
import { mission, SECTION_IDS } from "../data/content"

export function MissionSection() {
  return (
    <section id={SECTION_IDS.mission} className="landing-shell landing-section landing-section-mission">
      <div className="landing-mission">
        <div className="landing-mission-image" data-sr="image">
          <picture className="landing-photo landing-photo-mission">
            <source srcSet={mission.image.webp} type="image/webp" />
            <img
              src={mission.image.fallback}
              alt={mission.image.alt}
              width={mission.image.width}
              height={mission.image.height}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="landing-mission-lockup" aria-hidden="true">
            <img src={logoMarkWhite} alt="" width={68} height={68} />
            <span>Logos</span>
          </div>
        </div>

        <div className="landing-mission-text">
          <h2
            data-sr
            className="landing-section-title-semibold"
            style={
              {
                color: "var(--landing-brand-primary)",
                "--sr-delay": "100ms",
              } as CSSProperties
            }
          >
            {mission.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="flex max-w-[360px] flex-col gap-[22px]">
            {mission.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                data-sr
                style={{ "--sr-delay": `${200 + index * 80}ms` } as CSSProperties}
                className="landing-body"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
