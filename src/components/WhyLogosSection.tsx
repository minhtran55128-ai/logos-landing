const LOGOS_INPUTS = [
  "Courses",
  "Materials",
  "Plans",
  "Goals",
  "Previous work",
  "Preferences",
  "Relevant activity",
]

const LOGOS_OUTPUTS = ["Understand", "Create", "Practice", "Plan", "Prepare"]

export function WhyLogosSection() {
  return (
    <section
      id="why-logos"
      className="bg-[#27323a] py-24 text-[#f7f4ee] md:py-32"
    >
      <div className="logos-section">
        <div className="mb-14 max-w-[760px]">
          <p className="logos-mono text-[10px] font-semibold text-[#aaa6b8]">
            Why Logos
          </p>
          <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
            Powerful AI is already everywhere.
            <br />
            <span className="text-[#a8d9d0]">
              Personal study systems aren&rsquo;t.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#aeb7ba]">
            General AI can explain, summarize, reason, create and tutor
            extremely well. Logos is not built on the assumption that
            students need another smarter chatbot. The opportunity is to
            organize that intelligence around the student&rsquo;s actual
            academic life.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[.04] p-6 md:p-8">
            <p className="logos-mono text-[10px] text-[#9fa9ad]">GENERAL AI</p>
            <div className="mt-10 space-y-3 text-sm text-[#c1c8c9]">
              <p className="rounded-xl bg-white/[.06] p-3">Your request</p>
              <p className="text-center text-[#849295]">+</p>
              <p className="rounded-xl bg-white/[.06] p-3">
                The context currently available
              </p>
              <p className="py-2 text-center text-[#a8d9d0]">↓</p>
              <p className="rounded-xl bg-[#35484c] p-3 font-semibold text-[#f7f4ee]">
                Powerful response
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#6d9c96] bg-[#304348] p-6 md:p-8">
            <p className="logos-mono text-[10px] text-[#a8d9d0]">LOGOS</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {LOGOS_INPUTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#709d98]/50 px-3 py-2 text-[10px] text-[#c8dcda]"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="py-5 text-center text-[#a8d9d0]">↓</p>
            <p className="rounded-xl bg-[#a8d9d0] p-3 text-center font-semibold text-[#263a3b]">
              Relevant academic context
            </p>
            <p className="py-5 text-center text-[#a8d9d0]">↓</p>
            <div className="flex flex-wrap justify-center gap-2 text-[10px] text-[#c8dcda]">
              {LOGOS_OUTPUTS.map((item) => (
                <span key={item} className="rounded-full bg-white/[.08] px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-lg font-semibold text-[#a8d9d0]">
          The intelligence can be general. The study experience can still be
          personal.
        </p>
      </div>
    </section>
  )
}
