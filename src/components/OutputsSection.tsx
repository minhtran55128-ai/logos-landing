import { MessageCircle } from "lucide-react"
import { useState } from "react"

const TABS = [
  {
    label: "Summary",
    heading: "A focused reading of the material",
    body: "This summary foregrounds identification strategies because they are central to your upcoming exam — not because they happened to be the longest section of the PDF.",
    meta: "Econometrics · Exam 01 · 3 connected sources",
  },
  {
    label: "Flashcards",
    heading: "Cards built around your exam, not the PDF outline",
    body: "Each card targets a distinction your notes flagged as confusing, rather than restating whatever sentence happened to be nearby.",
    meta: "Econometrics · Exam 01 · 12 cards drafted",
  },
  {
    label: "Questions",
    heading: "Practice that mirrors what Exam 01 will actually ask",
    body: "Questions are weighted toward the identification strategies you're still working through, not spread evenly across the whole chapter.",
    meta: "Econometrics · Exam 01 · 8 questions drafted",
  },
  {
    label: "Insights",
    heading: "What's still unresolved before the exam",
    body: "A short read on where your notes and the textbook diverge, so you know what's worth double-checking before Friday.",
    meta: "Econometrics · Exam 01 · 2 open questions flagged",
  },
]

export function OutputsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = TABS[activeTab]

  return (
    <section id="outputs" className="logos-section py-24 md:py-36">
      <div className="mb-14 grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-end">
        <div>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            From generation to usefulness
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
            Not more study material.
            <br />
            <span className="text-[#4d9fa1]">More useful study material.</span>
          </h2>
        </div>
        <p className="max-w-lg text-base leading-7 text-[#707a7e]">
          AI can already generate almost unlimited summaries, questions,
          flashcards and notes. The more important question is whether those
          outputs are useful for the student receiving them.
        </p>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-[#d7d2cc] bg-[#f2eee7]">
        <div className="grid md:grid-cols-[.62fr_1.38fr]">
          <div className="border-b border-[#d7d2cc] bg-[#e5eee9] p-5 md:border-b-0 md:border-r md:p-8">
            <p className="logos-mono text-[9px] font-semibold text-[#55736f]">
              One course · one objective · many useful forms
            </p>
            <p className="mt-6 max-w-xs text-[clamp(1.65rem,3vw,2.35rem)] font-semibold leading-[1.04] tracking-[-.045em] text-[#273a3a]">
              The prompt is only the beginning.
            </p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#66807c]">
              The same academic context can shape what Logos helps you
              understand, create and practice next.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {TABS.map((t, i) => {
                const isActive = i === activeTab
                return (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    aria-pressed={isActive}
                    className={
                      isActive
                        ? "logos-output-tab rounded-full border px-3 py-2 text-[10px] font-semibold border-[#273a3a] bg-[#273a3a] text-[#f7f4ee]"
                        : "logos-output-tab rounded-full border px-3 py-2 text-[10px] font-semibold border-[#b8cec8] text-[#55736f] hover:border-[#55736f]"
                    }
                  >
                    {t.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="p-5 md:p-8">
            <div className="flex items-center justify-between border-b border-[#d7d2cc] pb-4">
              <div>
                <p className="text-[10px] font-semibold text-[#65727a]">
                  Econometrics / Exam 01
                </p>
                <p className="mt-1 text-[10px] text-[#9a9c9c]">
                  Working from your academic picture
                </p>
              </div>
              <span className="rounded-full bg-[#f0d4c3] px-2.5 py-1 text-[9px] font-semibold text-[#765548]">
                Draft
              </span>
            </div>

            <div className="mt-7 rounded-2xl bg-[#fffaf2] p-5 md:p-7">
              <span className="rounded-full bg-[#a8d9d0] px-2.5 py-1 text-[9px] font-semibold text-[#3d615d]">
                {tab.label}
              </span>
              <p className="mt-5 text-[clamp(1.3rem,2.5vw,2rem)] font-semibold leading-tight tracking-[-.04em] text-[#27323a]">
                {tab.heading}
              </p>
              <p className="logos-output-paper mt-4 min-h-[108px] border-y border-[#ded8ce] py-4 text-sm leading-7 text-[#68737a]">
                {tab.body}
              </p>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#9a8eb8]">
                {tab.meta}
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#ded8ce] bg-[#ede9e2] p-4">
              <MessageCircle
                size={15}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-[#4d9fa1]"
                aria-hidden="true"
              />
              <p className="text-xs leading-5 text-[#71787c]">
                <span className="font-semibold text-[#3d4b50]">
                  Not simply:
                </span>{" "}
                &ldquo;Help me understand what matters for what I&rsquo;m
                preparing for.&rdquo;
                <br />
                <span className="text-[#9a9d9d]">
                  The difference is the context around the request.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-sm font-semibold leading-6 text-[#4d6c6b]">
        The aim is to make generation serve learning — not generation for its
        own sake.
      </p>
    </section>
  )
}
