import { useRef, type CSSProperties } from "react"

import { features, SECTION_IDS, showcaseCards } from "../data/content"
import { useScrollScene } from "../lib/useScrollScene"
import { FeatureCard } from "./FeatureCard"
import { ProductVideoFrame } from "./ProductVideoFrame"
import { PlanningCardStack } from "./PlanningCardStack"
import { ShowcaseCard } from "./ShowcaseCard"
import { ShowcaseCardStack } from "./ShowcaseCardStack"

// Features, product video and showcase share one section so the headline can stay
// pinned to the top while the cards feed into the video box and come back out.
export function ScrollScene() {
  const sceneRef = useRef<HTMLElement>(null)
  useScrollScene(sceneRef)

  return (
    <section
      id={SECTION_IDS.features}
      ref={sceneRef}
      className="landing-shell landing-scene"
      aria-labelledby="landing-scene-title"
    >
      <div className="landing-scene-header" data-scene-header>
        <h2 id="landing-scene-title" className="landing-section-title" data-sr>
          {features.title}
        </h2>
        <p
          className="landing-body max-w-[460px]"
          data-sr
          style={{ "--sr-delay": "100ms" } as CSSProperties}
        >
          {features.intro}
        </p>
      </div>

      <div className="landing-feature-grid">
        {features.cards.map((card, index) => (
          <FeatureCard
            key={card.tone}
            tone={card.tone}
            title={card.title}
            description={card.description}
            image={card.image}
            index={index}
          />
        ))}
      </div>

      <ProductVideoFrame />

      {/* Mobile-only stand-in for the box above — see the comment on
          features.mobileHighlight for why. */}
      <div className="landing-scene-mobile-highlight">
        <h3 className="landing-h1">{features.mobileHighlight.title}</h3>
        <p className="landing-body">{features.mobileHighlight.body}</p>
      </div>

      <div className="landing-showcase-list">
        {showcaseCards.map((card, index) => (
          <ShowcaseCard
            key={card.titleLines.join("")}
            {...card}
            // The first and second cards use an interactive card stack instead
            // of a single screenshot.
            media={index === 0 ? <PlanningCardStack /> : index === 1 ? <ShowcaseCardStack /> : undefined}
          />
        ))}
      </div>
    </section>
  )
}
