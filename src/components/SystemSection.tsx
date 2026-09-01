import {
  BookOpen,
  CalendarDays,
  FileText,
  Layers,
  MessageCircle,
  Target,
} from "lucide-react"

const FEATURES = [
  {
    icon: Layers,
    title: "Home",
    body: "See the broader academic picture.",
    className: "bg-[#a8d9d0] text-[#263a3b] sm:translate-x-3",
    iconClassName: "text-[#3a6863]",
    bodyClassName: "text-[#55736f]",
  },
  {
    icon: FileText,
    title: "Folders",
    body: "Keep meaningful course or objective context together.",
    className: "bg-white/[.06] text-[#f7f4ee]",
    iconClassName: "text-[#a8d9d0]",
    bodyClassName: "text-[#aeb7ba]",
  },
  {
    icon: MessageCircle,
    title: "Chat",
    body: "Ask, explore, create and collaborate.",
    className: "bg-white/[.06] text-[#f7f4ee]",
    iconClassName: "text-[#a8d9d0]",
    bodyClassName: "text-[#aeb7ba]",
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    body: "Save summaries, flashcards, tests and other outputs.",
    className: "bg-[#f0d4c3] text-[#4d3b36] sm:-translate-x-3",
    iconClassName: "text-[#8a5f4e]",
    bodyClassName: "text-[#765548]",
  },
  {
    icon: Target,
    title: "Study Plans",
    body: "Turn larger objectives into usable roadmaps.",
    className: "bg-white/[.06] text-[#f7f4ee]",
    iconClassName: "text-[#a8d9d0]",
    bodyClassName: "text-[#aeb7ba]",
  },
  {
    icon: CalendarDays,
    title: "Schedule",
    body: "Connect academic intentions with actual time.",
    className: "bg-white/[.06] text-[#f7f4ee]",
    iconClassName: "text-[#a8d9d0]",
    bodyClassName: "text-[#aeb7ba]",
  },
]

export function SystemSection() {
  return (
    <section id="system" className="logos-section pb-24 md:pb-36">
      <div className="relative overflow-hidden rounded-[28px] bg-[#27323a] p-5 text-[#f7f4ee] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="logos-mono text-[10px] font-semibold text-[#aaa6b8]">
              One connected system
            </p>
            <p className="logos-display mt-4 max-w-sm text-[clamp(2rem,4vw,3.3rem)] leading-[.98]">
              Different needs.
              <br />
              <span className="text-[#a8d9d0]">
                One place to work through them.
              </span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#aeb7ba]">
              Studying rarely follows one workflow. The individual tools
              matter less than the fact that they can work from the same
              study context.
            </p>
          </div>

          <div className="relative grid gap-2 sm:grid-cols-2">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[78%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6c9c99]/50 sm:block" />
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`logos-lift relative rounded-2xl border border-white/10 p-4 ${feature.className}`}
              >
                <feature.icon
                  size={16}
                  strokeWidth={2}
                  className={feature.iconClassName}
                  aria-hidden="true"
                />
                <p className="mt-6 text-sm font-semibold">{feature.title}</p>
                <p className={`mt-2 text-[11px] leading-5 ${feature.bodyClassName}`}>
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
