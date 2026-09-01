import { DashboardMockup } from "./DashboardMockup"
import { Reveal } from "./Reveal"

const QUESTIONS = [
  {
    number: "01",
    title: "What deserves my attention?",
    body: "See important demands across different courses rather than evaluating each one separately.",
  },
  {
    number: "02",
    title: "What is coming next?",
    body: "Keep deadlines, objectives and near-future academic work visible.",
  },
  {
    number: "03",
    title: "How should I approach a larger goal?",
    body: "Turn an exam or academic objective into a structured Study Plan.",
  },
  {
    number: "04",
    title: "How are things looking overall?",
    body: "Get useful interpretation of the broader situation instead of manually reconstructing it.",
  },
]

export function PictureSection() {
  return (
    <section id="picture" className="bg-[#e4f0ed] py-24 md:py-32">
      <div className="logos-section">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
              First, the bigger academic picture
            </p>
            <h2 className="logos-display mt-4 max-w-xl text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
              Start with the
              <br />
              <span className="text-[#4d9fa1]">bigger academic picture.</span>
            </h2>
          </div>
          <p className="max-w-[300px] text-sm leading-6 text-[#627b7b]">
            Before support can become truly personal, it needs to understand
            the situation around the student.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <p className="max-w-md text-[15px] leading-7 text-[#5f7774]">
              Logos starts by bringing relevant context from courses,
              materials, deadlines, Study Plans and ongoing work into a more
              coherent academic picture.
            </p>
            <div className="mt-8 space-y-5">
              {QUESTIONS.map((q, i) => (
                <Reveal
                  key={q.number}
                  delay={i * 90}
                  className="flex gap-3 border-t border-[#bed8d2] pt-4"
                >
                  <span className="logos-mono pt-0.5 text-[10px] text-[#4d9fa1]">
                    {q.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#34504c]">
                      {q.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#69817d]">
                      {q.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150} className="relative">
            <div className="absolute -right-3 -top-5 z-[1] hidden rounded-xl bg-[#f0d4c3] px-3 py-2 text-[10px] font-semibold text-[#765548] shadow-lg sm:block">
              What matters today
            </div>
            <div className="absolute -bottom-5 -left-3 z-[1] hidden rounded-xl bg-[#27323a] px-3 py-2 text-[10px] font-semibold text-[#a8d9d0] shadow-lg sm:block">
              AI overview · on your radar · Study Plans
            </div>
            <DashboardMockup />
          </Reveal>
        </div>

        <p className="mt-12 border-t border-[#bed8d2] pt-5 text-sm font-semibold text-[#3b5e59]">
          This is the first value of shared academic context: helping the
          student see and manage the bigger picture.
        </p>
      </div>
    </section>
  )
}
