import { Sparkles } from "lucide-react"
import { Reveal } from "./Reveal"

const SUPPORT_ROWS = [
  {
    number: "01",
    title: "Explanations",
    body: "The course, material, objective and depth you need shape the useful explanation.",
  },
  {
    number: "02",
    title: "Summaries",
    body: "The emphasis changes depending on what you are preparing for.",
  },
  {
    number: "03",
    title: "Flashcards",
    body: "Useful cards reflect more than the sentences that happen to appear in a PDF.",
  },
  {
    number: "04",
    title: "Questions",
    body: "Practice reflects the topic and purpose of the study session.",
  },
  {
    number: "05",
    title: "Study Plans",
    body: "A usable plan reflects the actual objective, material and circumstances.",
  },
]

export function PersonalizeSection() {
  return (
    <section id="personalize" className="bg-[#f1ece3] py-24 md:py-32">
      <div className="logos-section">
        <Reveal className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
              Why context changes the help
            </p>
            <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
              The right support depends on the student receiving it.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#707a7e]">
            Two students can study the same course and still need very
            different help. What matters can depend on what they already
            understand, what they are preparing for, the material they are
            using, how they prefer to study and where they currently are.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <Reveal delay={100} className="rounded-[26px] bg-[#27323a] p-6 text-[#f7f4ee] md:p-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a8d9d0] text-[#263a3b]">
              <Sparkles size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="logos-display mt-16 text-[clamp(2rem,4vw,3.2rem)] leading-[.98]">
              Personalization is not just remembering your preferences.
            </p>
            <p className="mt-6 text-sm leading-6 text-[#aeb7ba]">
              It is making the help itself more relevant to the course,
              material, objective and moment.
            </p>
          </Reveal>

          <div className="overflow-hidden rounded-[26px] border border-[#dcd4c8] bg-[#fbf8f2]">
            {SUPPORT_ROWS.map((row, i) => (
              <Reveal
                key={row.number}
                delay={120 + i * 70}
                className={`logos-support-row flex gap-5 border-b border-[#e2dbd0] p-5 last:border-b-0 md:p-6 ${
                  i === 0 ? "bg-[#e4f0ed]/50" : ""
                }`}
              >
                <span className="logos-mono pt-1 text-[10px] text-[#4d9fa1]">
                  {row.number}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#34424a]">
                    {row.title}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#758087]">
                    {row.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
