import { waitlist } from "../data/content"
import { WaitlistContinueButton } from "./WaitlistContinueButton"
import { WaitlistField } from "./WaitlistField"
import { WaitlistHeader } from "./WaitlistHeader"

const copy = waitlist.step1

export function WaitlistStep1Join({
  name,
  email,
  nameTouched,
  emailTouched,
  nameValid,
  emailValid,
  ready,
  onNameChange,
  onEmailChange,
  onNameBlur,
  onEmailBlur,
  onContinue,
}: {
  name: string
  email: string
  nameTouched: boolean
  emailTouched: boolean
  nameValid: boolean
  emailValid: boolean
  ready: boolean
  onNameChange: (value: string) => void
  onEmailChange: (value: string) => void
  onNameBlur: () => void
  onEmailBlur: () => void
  onContinue: () => void
}) {
  return (
    <>
      <WaitlistHeader step={1} />
      <div className="waitlist-body waitlist-body-join waitlist-step-enter">
        <div className="waitlist-hero-card">
          <picture>
            <source srcSet={copy.heroImage.webp} type="image/webp" />
            <img
              src={copy.heroImage.fallback}
              alt={copy.heroImage.alt}
              className="waitlist-hero-image"
              decoding="async"
            />
          </picture>
          <p className="waitlist-hero-title">{copy.heroTitle}</p>
          <p className="waitlist-hero-subtitle">{copy.heroSubtitle}</p>
          <p className="waitlist-hero-count">{copy.heroCount}</p>
        </div>

        <div className="waitlist-form">
          <div className="waitlist-form-content">
            <p className="waitlist-form-title">{copy.formTitle}</p>

            <WaitlistField
              id="waitlist-name"
              label={copy.nameLabel}
              type="text"
              value={name}
              onChange={onNameChange}
              onBlur={onNameBlur}
              placeholder={copy.namePlaceholder}
              error={nameTouched && !nameValid ? copy.nameError : undefined}
            />

            <WaitlistField
              id="waitlist-email"
              label={copy.emailLabel}
              type="email"
              value={email}
              onChange={onEmailChange}
              onBlur={onEmailBlur}
              placeholder={copy.emailPlaceholder}
              error={emailTouched && !emailValid ? copy.emailError : undefined}
            />

            <WaitlistContinueButton label={copy.continueLabel} ready={ready} onClick={onContinue} />
          </div>
        </div>
      </div>
    </>
  )
}
