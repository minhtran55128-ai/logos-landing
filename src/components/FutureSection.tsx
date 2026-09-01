const STEPS = [
  {
    number: "01",
    title: "Academic context",
    body: "Courses, materials, plans, goals and relevant activity.",
    dot: "bg-[#4d9fa1]",
  },
  {
    number: "02",
    title: "Ongoing study activity",
    body: "What you ask, create, practice and return to.",
    dot: "bg-[#4d9fa1]",
  },
  {
    number: "03",
    title: "Richer understanding",
    body: "A clearer picture of what the student is working toward.",
    dot: "bg-[#4d9fa1]",
  },
  {
    number: "04",
    title: "More relevant support",
    body: "Explanations, practice, summaries and plans that can fit the situation better.",
    dot: "bg-[#f17a34]",
  },
]

export function FutureSection() {
  return (
    <section id="future" className="logos-section py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            A direction, not a promise
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
            And it should become more personal over time.
          </h2>
          <p className="mt-7 max-w-sm text-base leading-7 text-[#69747e]">
            The longer-term ambition goes beyond connecting courses and
            remembering preferences. As Logos gains more useful understanding
            of a student&rsquo;s studies and learning context, that
            understanding can increasingly shape how the system helps.
          </p>
        </div>

        <div className="relative pt-2">
          <div className="absolute left-4 top-7 bottom-8 w-px bg-[#cdd6d2] md:left-5" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex gap-6 pb-9 last:pb-0">
              <span
                className={`relative z-[1] mt-1 flex h-3 w-3 shrink-0 rounded-full border-4 border-[#fbf7ef] ${step.dot}`}
              />
              <div>
                <p className="logos-mono text-[10px] text-[#9a8eb8]">
                  {step.number}
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-.035em] text-[#34424a]">
                  {step.title}
                </p>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#778188]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}

          <p className="mt-10 border-t border-[#d9d3c9] pt-5 text-sm font-semibold leading-6 text-[#4d6c6b]">
            The better the system understands the relevant learning context,
            the more useful its support can become.
          </p>
        </div>
      </div>
    </section>
  )
}
