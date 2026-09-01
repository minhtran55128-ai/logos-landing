import { Reveal } from "./Reveal"

const OUTCOMES = [
  {
    number: "01",
    body: "Spend less effort reconstructing your study situation.",
    className: "bg-[#e4f0ed]",
  },
  {
    number: "02",
    body: "Find useful direction faster when you need it.",
    className: "bg-[#f0d4c3]",
  },
  {
    number: "03",
    body: "Create study material that better fits its purpose.",
    className: "bg-[#e8e2f0]",
  },
  {
    number: "04",
    body: "Move between study activities with less friction.",
    className: "border border-[#dcd4c8] bg-[#f7f4ee]",
  },
]

export function OutcomeSection() {
  return (
    <section id="outcome" className="logos-section py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            What this is for
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
            Spend more of your study time on what actually helps you learn.
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[#69747e]">
            The purpose of personalization isn&rsquo;t personalization
            itself. It is to reduce unnecessary friction around studying and
            make support more relevant to what you are trying to learn and
            accomplish.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {OUTCOMES.map((outcome, i) => (
            <Reveal
              key={outcome.number}
              delay={100 + i * 80}
              className={`logos-lift rounded-2xl p-5 ${outcome.className}`}
            >
              <span className="logos-mono text-[10px] text-[#4d9fa1]">
                {outcome.number}
              </span>
              <p className="mt-8 text-base font-semibold leading-5 tracking-[-.02em] text-[#34424a]">
                {outcome.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-20 grid gap-8 border-t border-[#d9d3c9] pt-12 md:grid-cols-2">
        <div>
          <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
            Student control
          </p>
          <h3 className="logos-display mt-4 text-3xl leading-[1]">
            Built around you.
            <br />
            <span className="text-[#4d9fa1]">Still controlled by you.</span>
          </h3>
        </div>
        <div className="max-w-lg text-sm leading-7 text-[#737d82]">
          <p>
            Logos can help interpret, suggest, create and plan, but
            meaningful decisions about your studies remain yours.
          </p>
          <p className="mt-4">
            You choose what context to provide and what recommendations or
            changes become part of your academic system. Logos assists. You
            decide.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
