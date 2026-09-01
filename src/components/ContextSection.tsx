import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Compass,
  MessageCircle,
  PenLine,
  RotateCcw,
  Sparkles,
  Target,
} from "lucide-react"
import { useState } from "react"
import { Reveal } from "./Reveal"

const MODES = [
  {
    label: "Understand",
    icon: BookOpen,
    heading: "Start with the thread, not the tab.",
    body: "Get explanations, examples, comparisons and insights around what you are learning — with the relevant course context already in view.",
    cardHeadline:
      "A plain-language map of the argument in Week 5, linked to your seminar notes.",
  },
  {
    label: "Ask",
    icon: MessageCircle,
    heading: "Bring the half-formed thought.",
    body: "Work through questions from inside your course or Folder context. Logos helps you sharpen the question before it tries to answer it.",
    cardHeadline:
      "“How does this challenge the model we used last Tuesday?”",
  },
  {
    label: "Explore",
    icon: Compass,
    heading: "Follow the interesting edge.",
    body: "Discuss difficult ideas and investigate topics more deeply without losing sight of the material and objective you started from.",
    cardHeadline:
      "Three related ideas, with a note on how each one changes your original claim.",
  },
  {
    label: "Create",
    icon: PenLine,
    heading: "Make the blank page less blank.",
    body: "Turn scattered notes into a working shape — an outline, a brief, a set of claims — while keeping your thinking in the room.",
    cardHeadline: "An essay outline that uses your own reading notes as its spine.",
  },
  {
    label: "Practice",
    icon: Target,
    heading: "Practice the part that matters.",
    body: "Use questions and study material to reinforce what you are learning, with the language and purpose of your course in mind.",
    cardHeadline:
      "Five short prompts on causal inference, tuned to your lecture vocabulary.",
  },
  {
    label: "Plan",
    icon: CalendarDays,
    heading: "See the week as a whole.",
    body: "Turn larger objectives into a structured way forward, with deadlines, materials and the time you actually have in view.",
    cardHeadline:
      "A Tuesday plan that protects your lab prep and leaves a clean hour for reading.",
  },
  {
    label: "Revise",
    icon: RotateCcw,
    heading: "Let the plan change with you.",
    body: "Adjust existing plans, outputs and study material as your circumstances change — without rebuilding the whole situation from scratch.",
    cardHeadline:
      "A revised exam plan after your seminar moves from Wednesday to Friday.",
  },
]

export function ContextSection() {
  const [activeLabel, setActiveLabel] = useState(MODES[0].label)
  const active = MODES.find((mode) => mode.label === activeLabel) ?? MODES[0]

  return (
    <section id="context" className="logos-section py-24 md:py-36">
      <Reveal className="mb-14 max-w-[700px]">
        <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
          Then, the same context while studying
        </p>
        <h2 className="logos-display mt-4 text-[clamp(2.7rem,5.4vw,4.5rem)] leading-[.98]">
          The same context should help
          <br />
          <span className="text-[#4d9fa1]">when you actually study.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#69747e]">
          Knowing what you are working toward should not only organize your
          studies. It should also make the support you receive while learning
          more relevant.
        </p>
      </Reveal>

      <Reveal
        delay={100}
        className="grid gap-10 lg:grid-cols-[.76fr_1.24fr] lg:items-center"
      >
        <div>
          <div key={activeLabel} className="logos-crossfade">
            <p className="logos-mono text-[10px] font-semibold text-[#707b86]">
              {active.label}
            </p>
            <h3 className="logos-display mt-4 text-[clamp(2.35rem,5vw,3.5rem)] leading-[.98] text-[#2a3039]">
              {active.heading}
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#69747e] md:text-base">
              {active.body}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {MODES.map((mode) => {
              const isActive = mode.label === activeLabel
              return (
                <button
                  key={mode.label}
                  type="button"
                  onClick={() => setActiveLabel(mode.label)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? "logos-button flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold border-[#242b34] bg-[#242b34] text-[#f7f4ee]"
                      : "logos-button flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold border-[#d2ced6] bg-[#f7f4ee] text-[#69737d] hover:border-[#4d9fa1]"
                  }
                >
                  <mode.icon size={13} strokeWidth={1.8} aria-hidden="true" />
                  {mode.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative min-h-[356px] overflow-hidden rounded-[26px] bg-[#23282d] p-5 text-[#f7f4ee] md:p-8">
          <div className="logos-ambient absolute -right-16 -top-24 h-60 w-60 rounded-full bg-[#4d9fa1]/20 blur-3xl" />
          <div className="relative h-full">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#a8d9d0] text-[#242b34]">
                  <Sparkles size={14} strokeWidth={2} aria-hidden="true" />
                </span>
                <span key={activeLabel} className="logos-crossfade text-xs font-semibold">
                  Logos · {active.label}
                </span>
              </div>
              <span className="logos-mono text-[9px] text-[#9da4ac]">
                from your picture
              </span>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-[1fr_180px]">
              <div key={activeLabel} className="logos-crossfade">
                <p className="logos-mono text-[9px] text-[#a9a6b9]">
                  A useful starting point
                </p>
                <p className="logos-display mt-3 text-3xl leading-[1.05] md:text-[39px]">
                  {active.cardHeadline}
                </p>
                <button
                  type="button"
                  className="logos-button mt-8 flex items-center gap-2 rounded-full bg-[#a8d9d0] px-4 py-2.5 text-[11px] font-semibold text-[#2d3040]"
                >
                  Open this thread
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                <p className="text-[10px] font-semibold text-[#b9ded5]">
                  Connected here
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-[#c4c6cc]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a8d9d0]" />
                    Econometrics
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#c4c6cc]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f0c7af]" />
                    Week 05 notes
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#c4c6cc]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e6c66f]" />
                    Goal · first draft
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-3 text-[9px] leading-relaxed text-[#8d969f]">
                  Logos is showing a direction, not deciding for you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <p className="mt-12 text-center text-sm font-semibold text-[#4d9fa1]">
        Different study needs. The same academic context behind them.
      </p>
    </section>
  )
}
