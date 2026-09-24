import { ctaLabel, WAITLIST_URL } from "../data/content"

export function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a href={WAITLIST_URL} className={`landing-cta ${className}`.trim()}>
      {ctaLabel}
    </a>
  )
}
