import { ChevronDown } from "lucide-react"
import { useState } from "react"

const FAQS = [
  {
    question: "Is Logos another AI tutor?",
    answer:
      "Not exactly. General AI is already very capable at explaining and answering questions. Logos is less about being a smarter tutor and more about organizing that intelligence around your actual courses, materials and goals — so the help you get already has the right context behind it.",
  },
  {
    question: "What does early access mean?",
    answer:
      "Early access means trying the first working versions of Logos as they're built, not a finished product. You'll use it directly, tell us what's missing or wrong, and help shape what gets built next. Expect rough edges.",
  },
  {
    question: "What is Logos useful for today?",
    answer:
      "The first MVP focuses on bringing your academic context together — courses, materials, deadlines and goals — and using it to make explanations, summaries, flashcards and study plans more relevant. More of the system comes online as early access continues.",
  },
  {
    question: "Will Logos automatically know everything about me?",
    answer:
      "No. Logos only works from the context you choose to give it — the courses, materials and goals you connect. Nothing is inferred or imported automatically, and you can see and remove what it's using at any time.",
  },
  {
    question: "Can Logos guarantee better grades?",
    answer:
      "No, and we wouldn't trust anything that claimed to. Logos is built to make studying more relevant and less repetitive, not to replace the work of actually learning. Grades depend on far more than any tool can control.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="logos-section py-24 md:py-36">
      <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            Before we begin
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5vw,4.2rem)] leading-[.98]">
            Good questions
            <br />
            <span className="text-[#4d9fa1]">belong here.</span>
          </h2>
        </div>

        <div className="border-t logos-rule">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question} className="border-b logos-rule">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-[15px] font-semibold"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                    className={`shrink-0 text-[#9a8eb8] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-sm leading-6 text-[#69737d]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
