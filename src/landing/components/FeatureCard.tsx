import { BookOpen, Brain, Target, TrendingUp } from "lucide-react"

import type { FeatureTone, LandingImage } from "../data/content"

const toneVars: Record<FeatureTone, { background: string; panel: string }> = {
  orange: { background: "var(--landing-feature-orange-bg)", panel: "var(--landing-feature-orange-panel)" },
  yellow: { background: "var(--landing-feature-yellow-bg)", panel: "var(--landing-feature-yellow-panel)" },
  green: { background: "var(--landing-feature-green-bg)", panel: "var(--landing-feature-green-panel)" },
  teal: { background: "var(--landing-feature-teal-bg)", panel: "var(--landing-feature-teal-panel)" },
}

// Mobile-only: the screenshot panel is hidden there (too small to read), and
// this icon stands in for it next to the title instead.
const toneIcons: Record<FeatureTone, typeof BookOpen> = {
  orange: BookOpen,
  yellow: Target,
  green: TrendingUp,
  teal: Brain,
}

type FeatureCardProps = {
  tone: FeatureTone
  title: string
  description: string
  image?: LandingImage
}

export function FeatureCard({ tone, title, description, image }: FeatureCardProps) {
  const colors = toneVars[tone]
  const Icon = toneIcons[tone]
  // The x descriptor makes the browser size the image at (pixel size / density).
  const density = image?.density ?? 1

  return (
    <article
      className="landing-feature-card"
      style={{ background: colors.background }}
      data-scene-intake
      data-reveal
    >
      <div className="landing-feature-card-content">
        <div className="landing-feature-card-header">
          <span className="landing-feature-card-icon" style={{ background: colors.panel }} aria-hidden="true">
            <Icon size={20} />
          </span>
          <h3 className="landing-h2">{title}</h3>
        </div>
        <p className="landing-body">{description}</p>
      </div>
      <div className="landing-feature-card-visual" style={{ background: colors.panel }}>
        {image ? (
          <picture>
            <source srcSet={`${image.webp} ${density}x`} type="image/webp" />
            <img
              src={image.fallback}
              srcSet={`${image.fallback} ${density}x`}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : null}
      </div>
    </article>
  )
}
