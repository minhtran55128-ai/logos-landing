import type { ReactNode } from "react"

import iconArrowRightCircle from "../assets/icon-arrow-right-circle.svg"
import type { ShowcaseBackground, ShowcaseCardContent } from "../data/content"

const backgroundVars: Record<ShowcaseBackground, string> = {
  peach: "var(--landing-showcase-peach)",
  cream: "var(--landing-showcase-cream)",
  ivory: "var(--landing-showcase-ivory)",
}

type ShowcaseCardProps = ShowcaseCardContent & {
  // Composed in by ScrollScene.tsx for the one card with no real screenshot;
  // takes over the media slot instead of `image`. Not part of content.ts
  // because it's a React node, not data.
  media?: ReactNode
}

export function ShowcaseCard({
  titleLines,
  body,
  benefit,
  imagePosition,
  background,
  image,
  media,
}: ShowcaseCardProps) {
  return (
    <article
      className="landing-showcase-card"
      data-image-position={imagePosition}
      style={{ background: backgroundVars[background] }}
      data-scene-output
      data-reveal
    >
      <div className="landing-showcase-text">
        <div className="flex flex-col gap-[var(--landing-space-lg)]">
          <h3 className="landing-h1">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="landing-body">{body}</p>
        </div>

        <div className="landing-benefit">
          <span className="landing-icon-20">
            <img src={iconArrowRightCircle} alt="" width={16.8333} height={17.6667} />
          </span>
          <p className="landing-h4 landing-showcase-benefit flex-1">{benefit}</p>
        </div>
      </div>

      <div className={`landing-showcase-media${image || media ? "" : " landing-showcase-media-empty"}`}>
        {media ? (
          media
        ) : image ? (
          <picture>
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
        ) : null}
      </div>
    </article>
  )
}
