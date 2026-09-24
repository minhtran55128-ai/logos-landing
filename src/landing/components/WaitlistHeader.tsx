import { LogosLockup } from "./LogosLockup"
import { WaitlistProgressDots } from "./WaitlistProgressDots"

// Step is omitted on the confirmation screen (no dots to show).
export function WaitlistHeader({ step }: { step?: 1 | 2 | 3 }) {
  return (
    <header className="waitlist-header">
      <LogosLockup />
      {step ? <WaitlistProgressDots step={step} /> : null}
    </header>
  )
}
