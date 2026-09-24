import logoMark from "../assets/logo-mark.svg"
import logoMarkMuted from "../assets/logo-mark-muted.svg"
import { LogosMark } from "./LogosMark"

// Placeholder frame, not a video player: the product video does not exist yet.
// In the scroll scene it is also the box the feature cards are drawn into, and it
// fills up as they go in: the CSS variable --f runs 0 to 1 and turns the dashed
// grey outline into a solid orange one on a peach fill.
export function ProductVideoFrame() {
  return (
    <div className="landing-video-frame" data-scene-box data-reveal>
      <svg className="landing-video-border" aria-hidden="true" focusable="false">
        <rect width="100%" height="100%" rx="10" ry="10" fill="none" />
      </svg>
      <div className="relative h-[110px] w-[371px] scale-[0.55] md:scale-100">
        <span className="absolute left-0 top-0">
          <LogosMark src={logoMark} fadeSrc={logoMarkMuted} size={110} />
        </span>
        <span
          className="landing-video-wordmark absolute left-[144px] top-0 text-[80px] font-medium leading-none"
          style={{ fontFamily: "var(--landing-font-display)" }}
        >
          Logos
        </span>
      </div>
    </div>
  )
}
