import showcaseStackCalendarPng from "../assets/showcase-stack-calendar.png"
import showcaseStackCalendarWebp from "../assets/showcase-stack-calendar.webp"
import showcaseStackHomePng from "../assets/showcase-stack-home.png"
import showcaseStackHomeWebp from "../assets/showcase-stack-home.webp"
import showcaseStackStudyplanPng from "../assets/showcase-stack-studyplan.png"
import showcaseStackStudyplanWebp from "../assets/showcase-stack-studyplan.webp"
import { CardStack, type StackCard } from "./CardStack"

// Real exported cards from Figma — header label, border and screenshot are all
// baked into each image. Unlike the other card stack, these labels are already
// in Swedish, so `ariaLabel` just repeats them for screen readers.
// Order here is front, middle, back — calendar goes last (back).
// These are rasterized from the original Figma SVGs — each SVG layers a
// colored header bar + label on top of a screenshot, non-uniformly stretched
// to a 661-wide frame (preserveAspectRatio="none"), so the width/height ratio
// here is that frame's, not the embedded screenshot's own. Exported at 1056px
// wide: comfortably covers 3x pixel density at this card's largest real
// on-screen size (352px, at the widest desktop breakpoint) without shipping
// far more pixels than any layout ever displays.
const CARDS: [StackCard, StackCard, StackCard] = [
  {
    id: "home",
    webp: showcaseStackHomeWebp,
    fallback: showcaseStackHomePng,
    width: 1056,
    height: 647,
    ariaLabel: "Hemsida.",
  },
  {
    id: "studyplan",
    webp: showcaseStackStudyplanWebp,
    fallback: showcaseStackStudyplanPng,
    width: 1056,
    height: 647,
    ariaLabel: "Studieplan.",
  },
  {
    id: "calendar",
    webp: showcaseStackCalendarWebp,
    fallback: showcaseStackCalendarPng,
    width: 1056,
    height: 647,
    ariaLabel: "Personlig kalender.",
  },
]

export function PlanningCardStack() {
  return <CardStack cards={CARDS} groupLabel="Exempel på Logos studieplanering" />
}
