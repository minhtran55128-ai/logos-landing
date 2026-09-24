import showcaseStackExplainingPng from "../assets/showcase-stack-explaining.png"
import showcaseStackExplainingWebp from "../assets/showcase-stack-explaining.webp"
import showcaseStackFlashcardsPng from "../assets/showcase-stack-flashcards.png"
import showcaseStackFlashcardsWebp from "../assets/showcase-stack-flashcards.webp"
import showcaseStackQuizPng from "../assets/showcase-stack-quiz.png"
import showcaseStackQuizWebp from "../assets/showcase-stack-quiz.webp"
import { CardStack, type StackCard } from "./CardStack"

// Real exported cards from Figma — header label, border and screenshot are all
// baked into each image, so the label text stays in the original English (like
// the other real product screenshots elsewhere on the page); `ariaLabel` gives
// the Swedish equivalent for screen readers.
// These are rasterized from the original Figma SVGs — each SVG layers a
// colored header bar + label on top of a screenshot, non-uniformly stretched
// to a 661-wide frame (preserveAspectRatio="none"), so the width/height ratio
// here is that frame's, not the embedded screenshot's own. Exported at 1056px
// wide: comfortably covers 3x pixel density at this card's largest real
// on-screen size (352px, at the widest desktop breakpoint) without shipping
// far more pixels than any layout ever displays.
const CARDS: [StackCard, StackCard, StackCard] = [
  {
    id: "flashcards",
    webp: showcaseStackFlashcardsWebp,
    fallback: showcaseStackFlashcardsPng,
    width: 1056,
    height: 743,
    ariaLabel: "Minneskort.",
  },
  {
    id: "quiz",
    webp: showcaseStackQuizWebp,
    fallback: showcaseStackQuizPng,
    width: 1056,
    height: 717,
    ariaLabel: "Quiz.",
  },
  {
    id: "explaining",
    webp: showcaseStackExplainingWebp,
    fallback: showcaseStackExplainingPng,
    width: 1056,
    height: 644,
    ariaLabel: "Förklaring.",
  },
]

export function ShowcaseCardStack() {
  return <CardStack cards={CARDS} groupLabel="Exempel på Logos studieverktyg" />
}
