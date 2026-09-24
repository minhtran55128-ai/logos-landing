import { useId, type CSSProperties } from "react"

import iconPlus from "../assets/icon-plus.svg"

type FaqItemProps = {
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
  revealDelay?: number
}

export function FaqItem({ question, answer, isExpanded, onToggle, revealDelay = 0 }: FaqItemProps) {
  const answerId = useId()

  return (
    <div
      className="landing-faq-item"
      data-sr
      style={{ "--sr-delay": `${revealDelay}ms` } as CSSProperties}
    >
      <button
        type="button"
        className="landing-faq-trigger"
        aria-expanded={isExpanded}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="landing-h3 min-w-0 flex-1">{question}</span>
        <span className="landing-faq-toggle">
          <img src={iconPlus} alt="" width={12.6667} height={12.6667} />
        </span>
      </button>

      <div className="landing-faq-panel" data-open={isExpanded} inert={!isExpanded}>
        <div className="landing-faq-panel-inner">
          <div id={answerId} className="landing-faq-answer">
            {answer.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="landing-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
