import { ArrowRight, Timer } from "lucide-react"
import { type FormEvent, useState } from "react"
import { FORMSPREE_ENDPOINT } from "../lib/config"

const TIMELINE = [
  { label: "STARTED", title: "Student research", dot: "bg-[#a8d9d0]" },
  {
    label: "NOW",
    title: "First MVP live with early testers",
    dot: "bg-[#a8d9d0]",
  },
  { label: "NEXT", title: "Invite the next group", dot: "bg-[#f0a071]" },
  {
    label: "BUILD",
    title: "Improve Logos with students",
    dot: "bg-[#f0a071]",
  },
]

type Status = "idle" | "submitting" | "success" | "error"

export function JoinSection() {
  const [status, setStatus] = useState<Status>("idle")
  const [email, setEmail] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="join"
      className="mx-3 mb-3 rounded-[30px] bg-[#27323a] px-5 py-16 text-[#f7f4ee] sm:mx-5 sm:rounded-[42px] md:py-24"
    >
      <div className="logos-section grid gap-12 lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#78bcb4]/30 bg-[#31454a] px-3.5 py-2 text-[10px] font-semibold text-[#b9ded5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0a071]" />
            First MVP live · early student testers
          </div>

          <p className="logos-mono mt-8 text-[10px] font-semibold text-[#a8d9d0]">
            A note from the team
          </p>
          <h2 className="logos-display mt-4 max-w-[680px] text-[clamp(2.7rem,5.8vw,4.8rem)] leading-[.98]">
            We&rsquo;re building Logos with students,{" "}
            <span className="text-[#a8d9d0]">not just for them.</span>
          </h2>

          <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#b7c1c2]">
            Our first MVP is live and already in the hands of our first
            group of student testers. Join the waitlist to be among the
            next to try Logos, share what works and help shape what we
            build next.
          </p>

          <p className="mt-7 text-[12px] font-semibold text-[#9fe2dc]">
            Try it early. Help shape what comes next.
          </p>

          <div className="mt-7 max-w-[600px]">
            {status === "success" ? (
              <div
                role="status"
                className="rounded-2xl border border-white/15 bg-white/[.06] p-5 text-sm text-[#d4eee8]"
              >
                You&rsquo;re on the list. We&rsquo;ll email you as early
                access opens up.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/[.06] p-2 sm:flex-row sm:rounded-full"
              >
                <label htmlFor="waitlist-email" className="sr-only">
                  Your university email
                </label>
                <input
                  id="waitlist-email"
                  required
                  placeholder="Your university email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#f7f4ee] outline-none placeholder:text-[#858c96]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="logos-button flex items-center justify-center gap-2 rounded-full bg-[#27323a] px-5 py-3 text-[12px] font-bold text-[#f7f4ee] disabled:opacity-60"
                >
                  {status === "submitting" ? "Joining…" : "Join the waitlist"}
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </button>
              </form>
            )}

            {status === "error" && (
              <p role="alert" className="mt-3 text-[11px] text-[#f0a071]">
                {FORMSPREE_ENDPOINT
                  ? "Something went wrong sending that. Please try again in a moment."
                  : "The waitlist form isn't connected yet. Set VITE_FORMSPREE_ENDPOINT to enable it."}
              </p>
            )}
          </div>

          <p className="mt-4 text-[10px] text-[#849295]">
            Early access updates only. Parts of the product will change.
          </p>
        </div>

        <div className="rounded-[26px] border border-white/10 bg-[#202b31] p-5 sm:p-7">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <Timer size={15} strokeWidth={2} className="text-[#f0a071]" aria-hidden="true" />
            <span className="logos-mono text-[10px] font-semibold text-[#b9ded5]">
              Where we are now
            </span>
          </div>

          <div className="relative mt-7 space-y-6">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#58726f]" />
            {TIMELINE.map((step) => (
              <div key={step.label} className="relative flex gap-4">
                <span
                  className={`relative z-[1] mt-1 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#202b31] ${step.dot}`}
                />
                <div>
                  <p className="logos-mono text-[9px] font-semibold text-[#9fe2dc]">
                    {step.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-[#e4e6df]">
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 text-[12px] leading-6 text-[#96a3a4]">
            We&rsquo;re building fast, testing early and letting real
            student feedback shape what comes next.
          </p>
        </div>
      </div>
    </section>
  )
}
