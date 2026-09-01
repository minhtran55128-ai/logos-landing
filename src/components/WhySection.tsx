const FRAGMENTS: {
  label: string
  position: string
  dot?: "orange" | "lilac" | "tan"
}[] = [
  { label: "LMS + PDFs", position: "left-0 top-2 md:left-[4%] md:top-[9%]" },
  {
    label: "AI conversations",
    position: "right-0 top-12 md:right-[3%] md:top-[18%]",
    dot: "orange",
  },
  {
    label: "Calendar · Friday",
    position: "left-2 top-28 md:left-[8%] md:top-[64%]",
    dot: "lilac",
  },
  {
    label: "Study Plan",
    position: "right-3 top-64 md:right-[8%] md:top-[69%]",
    dot: "tan",
  },
  {
    label: "Course notes",
    position:
      "left-1/2 top-[82%] -translate-x-1/2 md:left-[39%] md:top-[2%] md:translate-x-0",
    dot: "orange",
  },
  {
    label: "Flashcards",
    position:
      "left-1/2 top-[55%] -translate-x-1/2 md:left-[72%] md:top-[47%] md:translate-x-0",
    dot: "lilac",
  },
]

export function WhySection() {
  return (
    <section id="why" className="logos-section py-24 md:py-36">
      <div className="grid gap-10 md:grid-cols-[.82fr_1.18fr] md:gap-20">
        <div>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            The familiar problem
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.4vw,4.5rem)] leading-[.98]">
            What you need changes.
            <br />
            <span className="text-[#4d9fa1]">
              Your tools rarely see the whole situation.
            </span>
          </h2>
        </div>
        <div className="md:pt-8">
          <p className="max-w-xl text-lg leading-8 text-[#66727c]">
            One week you need to understand a difficult concept. The next you
            need to prepare for an exam, create useful revision material,
            reorganize your plan or decide where your limited study time
            should go.
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#818b93]">
            The relevant information is often spread across courses,
            materials, deadlines, tools and conversations. The software can be
            capable; the student is still doing much of the work of
            connecting the academic picture.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
        <div className="logos-dash relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#d5ddd9] bg-[#eef3ed] p-5 md:min-h-[420px] md:p-8">
          <div className="absolute left-1/2 top-1/2 hidden h-px w-[54%] -translate-x-1/2 bg-[#a9c9c1] md:block" />
          <div className="absolute left-1/2 top-1/2 hidden h-[54%] w-px -translate-y-1/2 bg-[#a9c9c1] md:block" />
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#74b7ae] bg-[#d7ebe5] text-center shadow-[0_12px_24px_rgba(50,88,84,.1)]">
            <span className="logos-mono text-[9px] text-[#4d7b75]">
              the student
            </span>
            <span className="mt-1 text-[13px] font-semibold tracking-[-.03em] text-[#35524f]">
              connecting it all
            </span>
          </div>

          <div className="relative h-full min-h-[320px]">
            {FRAGMENTS.map((fragment) => (
              <span
                key={fragment.label}
                data-dot={fragment.dot}
                className={`logos-fragment ${fragment.position}`}
              >
                {fragment.label}
              </span>
            ))}
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-[#c9d8d3] pt-4 text-[10px] text-[#70827f] md:bottom-7 md:left-8 md:right-8 md:pt-5">
            <span>Several capable tools</span>
            <span className="logos-mono">one person holding the picture</span>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#ded8ce] bg-[#f2eee7] p-6 md:p-8">
          <p className="logos-mono text-[10px] font-semibold text-[#9a8eb8]">
            The cost of fragmentation
          </p>
          <p className="mt-5 text-[clamp(1.45rem,3vw,2.2rem)] font-semibold leading-[1.06] tracking-[-.04em] text-[#303941]">
            Before any tool can help, you often have to reconstruct the
            situation yourself.
          </p>
          <div className="mt-7 space-y-4 border-t border-[#d9d3c9] pt-5 text-sm leading-6 text-[#737d82]">
            <p>
              <span className="font-semibold text-[#43545a]">
                Several courses.
              </span>{" "}
              Different objectives, materials and deadlines.
            </p>
            <p>
              <span className="font-semibold text-[#43545a]">
                Several tools.
              </span>{" "}
              Notes, AI chats, flashcards, calendars and LMS tabs.
            </p>
            <p>
              <span className="font-semibold text-[#43545a]">
                One memory.
              </span>{" "}
              Holding the connections together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
