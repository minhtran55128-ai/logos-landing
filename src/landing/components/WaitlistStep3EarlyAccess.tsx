import { waitlist } from "../data/content"
import { WaitlistChoice } from "./WaitlistChoice"
import { WaitlistContinueButton } from "./WaitlistContinueButton"
import { WaitlistHeader } from "./WaitlistHeader"
import { WaitlistSkipButton } from "./WaitlistSkipButton"

const copy = waitlist.step3

export function WaitlistStep3EarlyAccess({
  choice,
  ready,
  onChoose,
  onContinue,
  onSkip,
}: {
  choice: string | null
  ready: boolean
  onChoose: (choice: string) => void
  onContinue: () => void
  onSkip: () => void
}) {
  return (
    <>
      <WaitlistHeader step={3} />
      <div className="waitlist-body waitlist-step-enter">
        <div className="waitlist-column">
          <div className="waitlist-intro" data-align="center">
            <p className="waitlist-intro-title">{copy.title}</p>
            <p className="waitlist-intro-subtitle">{copy.subtitle}</p>
          </div>

          <div className="waitlist-choice-group">
            {copy.choices.map((label, index) => (
              <WaitlistChoice
                key={label}
                label={`${index + 1}. ${label}`}
                selected={choice === label}
                onSelect={() => onChoose(label)}
              />
            ))}
          </div>

          <div className="waitlist-actions">
            <WaitlistContinueButton label={copy.continueLabel} ready={ready} onClick={onContinue} />
            <WaitlistSkipButton label={copy.skipLabel} onClick={onSkip} />
          </div>
        </div>
      </div>
    </>
  )
}
