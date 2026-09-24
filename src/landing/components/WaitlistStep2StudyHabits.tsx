import { waitlist } from "../data/content"
import { WaitlistCombobox } from "./WaitlistCombobox"
import { WaitlistContinueButton } from "./WaitlistContinueButton"
import { WaitlistField } from "./WaitlistField"
import { WaitlistHeader } from "./WaitlistHeader"
import { WaitlistSkipButton } from "./WaitlistSkipButton"

const copy = waitlist.step2

export function WaitlistStep2StudyHabits({
  program,
  hours,
  frustration,
  ready,
  onProgramChange,
  onHoursChange,
  onFrustrationChange,
  onContinue,
  onBack,
}: {
  program: string
  hours: string
  frustration: string
  ready: boolean
  onProgramChange: (value: string) => void
  onHoursChange: (value: string) => void
  onFrustrationChange: (value: string) => void
  onContinue: () => void
  onBack: () => void
}) {
  return (
    <>
      <WaitlistHeader step={2} />
      <div className="waitlist-body waitlist-step-enter">
        <div className="waitlist-column">
          <div className="waitlist-intro">
            <p className="waitlist-intro-title">{copy.title}</p>
            <p className="waitlist-intro-subtitle">{copy.subtitle}</p>
          </div>

          <WaitlistCombobox
            id="waitlist-program"
            label={copy.programLabel}
            value={program}
            onChange={onProgramChange}
            placeholder={copy.programPlaceholder}
            options={copy.programOptions}
          />

          <WaitlistCombobox
            id="waitlist-hours"
            label={copy.hoursLabel}
            value={hours}
            onChange={onHoursChange}
            placeholder={copy.hoursPlaceholder}
            options={copy.hoursOptions}
            searchable={false}
          />

          <WaitlistField
            id="waitlist-frustration"
            label={copy.frustrationLabel}
            type="textarea"
            value={frustration}
            onChange={onFrustrationChange}
            placeholder={copy.frustrationPlaceholder}
          />

          <div className="waitlist-actions">
            <WaitlistContinueButton label={copy.continueLabel} ready={ready} onClick={onContinue} />
            <WaitlistSkipButton label={copy.backLabel} onClick={onBack} />
          </div>
        </div>
      </div>
    </>
  )
}
