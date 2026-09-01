import { BookOpen, FileText, Layers, Plus, Target } from "lucide-react"
import { Logo } from "./Logo"

const WORKSPACE_ITEMS = [
  { icon: Layers, label: "Overview", active: true },
  { icon: BookOpen, label: "Courses", count: 3 },
  { icon: FileText, label: "Materials", count: 18 },
  { icon: Target, label: "Goals" },
]

export function DashboardMockup() {
  return (
    <div className="logos-app-shadow relative mx-auto w-full max-w-[1010px] overflow-hidden rounded-[22px] border border-[#d5d0d9] bg-[#f3f1f5] text-left transition-transform duration-500 ease-out hover:-translate-y-1.5 md:rounded-[28px]">
      <div className="flex h-12 items-center justify-between border-b border-[#dedbe2] bg-[#fbfafc] px-4 md:h-14 md:px-6">
        <div className="flex items-center gap-3">
          <Logo tone="dark" />
          <span className="hidden h-5 w-px bg-[#dedbe2] sm:block" />
          <span className="hidden text-xs text-[#78808b] sm:block">
            Your academic picture
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-[#dedbe2] px-3 py-1.5 text-[10px] text-[#78808b] sm:block">
            Spring 2025
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c7e2dc] text-[10px] font-bold text-[#35524f]">
            AM
          </span>
        </div>
      </div>

      <div className="grid min-h-[380px] grid-cols-1 md:grid-cols-[210px_1fr]">
        <aside className="hidden border-r border-[#dedbe2] bg-[#eeebf1] p-4 md:block">
          <p className="mb-4 px-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#8a8e98]">
            Workspace
          </p>
          <div className="space-y-1 text-xs">
            {WORKSPACE_ITEMS.map((item) => (
              <div
                key={item.label}
                className={
                  item.active
                    ? "flex items-center gap-2 rounded-lg bg-[#c7e2dc] px-2.5 py-2 font-semibold text-[#35524f]"
                    : "flex items-center gap-2 px-2.5 py-2 text-[#777c87]"
                }
              >
                <item.icon size={14} strokeWidth={2} aria-hidden="true" />
                {item.label}
                {item.count !== undefined && (
                  <span className="ml-auto text-[10px]">{item.count}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-[#d8dfdb] bg-[#f7f5f8] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#626574]">
                This week
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#dfdce2]">
              <div className="h-full w-[62%] rounded-full bg-[#4d9fa1]" />
            </div>
            <span className="mt-2 block text-[10px] text-[#8c8e99]">
              4 open loops
            </span>
          </div>
        </aside>

        <main className="bg-[#f6f4f7] p-4 md:p-7">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-1 text-[11px] text-[#8a8c95]">Good morning, Alex</p>
              <h3 className="text-xl font-semibold tracking-[-.04em] text-[#252a34] md:text-2xl">
                Your picture, in context.
              </h3>
            </div>
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-lg bg-[#252a34] px-3 py-2 text-[10px] font-semibold text-white sm:flex"
            >
              <Plus size={13} strokeWidth={2} aria-hidden="true" />
              Add to picture
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#c7e2dc] p-4 sm:col-span-2">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <span className="rounded-full bg-[#99cfc6] px-2 py-1 text-[9px] font-semibold text-[#35524f]">
                    Current focus
                  </span>
                  <h4 className="mt-3 text-[15px] font-semibold text-[#243b3a]">
                    Make sense of causal inference
                  </h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#587773]">
                    Econometrics · Week 5 · 3 materials connected
                  </p>
                </div>
                <span className="rounded-full bg-[#f5f2f8]/70 px-2 py-1 text-[9px] text-[#587773]">
                  In progress
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Lecture 05 notes", "Angrist & Pischke, ch. 3", "Problem set 2"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[#9bcfc7] bg-[#e5f2ef]/75 px-2.5 py-1.5 text-[10px] text-[#4d716d]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-[#dfead9] p-4">
              <div className="mb-8 flex justify-between">
                <span className="text-[11px] font-semibold text-[#435c49]">
                  Next useful step
                </span>
              </div>
              <p className="text-[12px] leading-relaxed text-[#5f7662]">
                Compare the two identification strategies in your notes.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f0d4c3] p-4">
              <div className="mb-8 flex justify-between">
                <span className="text-[11px] font-semibold text-[#614b43]">
                  Open loops
                </span>
                <span className="text-[11px] font-semibold text-[#775e54]">04</span>
              </div>
              <p className="text-[12px] leading-relaxed text-[#785e54]">
                Problem set due Friday · 2h estimated
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
