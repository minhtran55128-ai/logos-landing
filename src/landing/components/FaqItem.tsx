import { useId } from "react"

import iconPlus from "../assets/icon-plus.svg"

type FaqItemProps = {
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
}

export function FaqItem({ question, answer, isExpanded, onToggle }: FaqItemProps) {
  const answerId = useId()

  return (
    <div className="landing-faq-item">
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

      {isExpanded ? (
        <div id={answerId} className="landing-faq-answer">
          {answer.split("\n\n").map((paragraph) => (
            <p key={paragraph} className="landing-body">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
