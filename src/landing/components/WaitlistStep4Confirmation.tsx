import { waitlist } from "../data/content"
import { WaitlistContinueButton } from "./WaitlistContinueButton"
import { WaitlistHeader } from "./WaitlistHeader"

const copy = waitlist.step4

export function WaitlistStep4Confirmation({ onDone }: { onDone: () => void }) {
  return (
    <>
      <WaitlistHeader />
      <div className="waitlist-body waitlist-step-enter">
        <div className="waitlist-column">
          <p className="waitlist-confirm-title">{copy.title}</p>
          <p className="waitlist-confirm-subtitle">{copy.subtitle}</p>
          <p className="waitlist-confirm-body">{copy.body}</p>
          <WaitlistContinueButton label={copy.doneLabel} ready onClick={onDone} />
        </div>
      </div>
    </>
  )
}
