import { useState } from "react"

export type StackCard = {
  id: string
  webp: string
  fallback: string
  width: number
  height: number
  ariaLabel: string
}

const POSITIONS = ["front", "middle", "back"] as const

// A stack of three cards, offset along the top-left -> bottom-right diagonal
// with no tilt. Clicking any card brings it to the front; all three lift
// slightly on hover as a hint that they're clickable. Shared by every
// showcase card that uses this treatment instead of a single screenshot.
export function CardStack({ cards, groupLabel }: { cards: [StackCard, StackCard, StackCard]; groupLabel: string }) {
  const [order, setOrder] = useState<string[]>(cards.map((c) => c.id))

  const bringToFront = (id: string) => {
    setOrder((prev) => (prev[0] === id ? prev : [id, ...prev.filter((cardId) => cardId !== id)]))
  }

  return (
    <div className="landing-card-stack" role="group" aria-label={groupLabel}>
      {order.map((id, index) => {
        const card = cards.find((c) => c.id === id)!
        const position = POSITIONS[index]
        return (
          <button
            key={id}
            type="button"
            className="landing-stack-card"
            data-position={position}
            onClick={() => bringToFront(id)}
            aria-label={position === "front" ? card.ariaLabel : `Visa kortet ${card.ariaLabel} längst fram`}
          >
            <picture>
              <source srcSet={card.webp} type="image/webp" />
              <img
                src={card.fallback}
                alt=""
                width={card.width}
                height={card.height}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </button>
        )
      })}
    </div>
  )
}
