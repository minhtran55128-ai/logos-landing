import { ArrowDown, ArrowRight } from "lucide-react"
import { scrollToId } from "../lib/scroll"
import { DashboardMockup } from "./DashboardMockup"

export function Hero() {
  return (
    <section
      id="top"
      className="mx-3 rounded-b-[34px] bg-[#23282d] px-4 pb-16 pt-[142px] text-[#f7f4ee] sm:mx-5 sm:rounded-b-[46px] md:pb-24 md:pt-[178px]"
    >
      <div className="mx-auto max-w-[1050px] text-center">
        <div className="logos-reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-3.5 py-2 text-[10px] text-[#c6c5cb]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b9ded5]" />
          A personal study system for the whole semester
        </div>

        <h1 className="logos-display logos-reveal logos-delay-1 mx-auto mt-7 max-w-[900px] text-[clamp(3.15rem,7.4vw,7rem)] leading-[.92]">
          Studying should <em className="not-italic text-[#9fe2dc]">adapt</em> to
          you.
        </h1>

        <p className="logos-reveal logos-delay-2 mx-auto mt-8 max-w-[620px] text-base leading-7 text-[#b0b5bb] md:text-lg">
          Logos is a personal study system that uses the context around your
          courses, materials, goals and ongoing work to make the support you
          receive more relevant to what you&rsquo;re actually trying to
          accomplish.
        </p>

        <div className="logos-reveal logos-delay-3 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToId("join")}
            className="logos-button inline-flex items-center gap-2 rounded-full bg-[#b9e7df] px-5 py-3.5 text-[13px] font-bold text-[#282b37]"
          >
            Join early access
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollToId("why")}
            className="logos-quiet-link inline-flex items-center gap-2 text-[12px] font-semibold text-[#c9ced0]"
          >
            See how it works
            <ArrowDown size={14} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="logos-reveal logos-delay-4 relative mx-auto mt-16 max-w-[1100px] md:mt-24">
        <div className="logos-float absolute -left-1 top-7 z-[1] hidden -rotate-2 rounded-2xl bg-[#efc9b6] px-4 py-3 text-[10px] font-semibold text-[#604c46] shadow-xl sm:block">
          Not another tab.
          <br />
          <span className="font-normal opacity-70">
            A little more of the picture.
          </span>
        </div>
        <DashboardMockup />
      </div>
    </section>
  )
}
