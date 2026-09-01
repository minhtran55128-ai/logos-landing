import { MessageCircle } from "lucide-react"

const CONTEXT_ITEMS = [
  { number: 1, label: "Course materials", tone: "default" },
  { number: 2, label: "A conversation", tone: "peach" },
  { number: 3, label: "Study Plan", tone: "default" },
  { number: 4, label: "Useful outputs", tone: "default" },
] as const

export function ContinuitySection() {
  return (
    <section id="continuity" className="bg-[#e4f0ed] py-24 md:py-32">
      <div className="logos-section">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
              Context that carries forward
            </p>
            <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.2vw,4.35rem)] leading-[.98]">
              Your studying shouldn&rsquo;t restart every time you need
              something different.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#687d7a]">
            Courses, materials, conversations, Study Plans and useful study
            outputs can remain connected inside Logos. Instead of repeatedly
            rebuilding the situation around what you are studying, relevant
            context can continue to support what you do next.
          </p>
        </div>

        <div className="mt-14">
          <div className="overflow-hidden rounded-[28px] border border-[#3b4b50] bg-[#1f292f] text-[#f7f4ee] shadow-[0_20px_45px_rgba(31,41,47,.15)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#25c1c8]" />
                <span className="text-xs font-semibold">
                  Causal inference / Folder
                </span>
              </div>
              <span className="logos-mono text-[9px] text-[#9ba8aa]">
                4 connected objects
              </span>
            </div>

            <div className="grid gap-0 md:grid-cols-[.68fr_1.32fr]">
              <div className="border-b border-white/10 bg-[#26343a] p-5 md:border-b-0 md:border-r md:p-7">
                <p className="logos-mono text-[9px] text-[#91b5b1]">
                  The context stays with the work
                </p>
                <div className="mt-7 space-y-4">
                  {CONTEXT_ITEMS.map((item) => (
                    <div
                      key={item.number}
                      className="flex items-center gap-3 text-xs text-[#c2cccb]"
                    >
                      <span
                        className={
                          item.tone === "peach"
                            ? "flex h-6 w-6 items-center justify-center rounded-lg bg-[#f0d4c3] text-[#765548]"
                            : "flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-[#a8d9d0]"
                        }
                      >
                        {item.number}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-7">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-[#a8d9d0]">
                  <MessageCircle size={14} strokeWidth={2} aria-hidden="true" />
                  Conversation · Week 05
                </div>
                <p className="mt-5 max-w-lg text-[clamp(1.45rem,3vw,2.2rem)] font-semibold leading-[1.05] tracking-[-.04em]">
                  &ldquo;Which identification strategy should I use for the
                  problem set?&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px flex-1 bg-[#75aaa5]" />
                  <span className="logos-mono text-[9px] text-[#8fa5a7]">
                    same objective · same materials · next useful step
                  </span>
                </div>
                <div className="mt-5 rounded-2xl bg-[#2f4145] p-4">
                  <p className="text-[10px] font-semibold text-[#a8d9d0]">
                    Logos brings forward
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#bac5c2]">
                    Lecture 05 notes, your Study Plan for Exam 01 and the
                    distinction you flagged in your last conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm font-semibold text-[#3b5e59]">
          Less repeated setup. More continuity across the way you study.
        </p>
      </div>
    </section>
  )
}
