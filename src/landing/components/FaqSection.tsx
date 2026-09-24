import { useState } from "react"

import { faq, SECTION_IDS } from "../data/content"
import { FaqItem } from "./FaqItem"

export function FaqSection() {
  // Only one answer is open at a time; opening another closes the previous one.
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id={SECTION_IDS.faq} className="landing-shell landing-section landing-section-faq">
      <div className="flex flex-col items-center gap-[var(--landing-block-gap)]">
        <h2 className="landing-section-title text-center">{faq.title}</h2>

        <div className="landing-faq-list">
          {faq.items.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isExpanded={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
