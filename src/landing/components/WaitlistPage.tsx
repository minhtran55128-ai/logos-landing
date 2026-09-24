import { useState } from "react"

import "../landing.css"
import { WaitlistStep1Join } from "./WaitlistStep1Join"
import { WaitlistStep2StudyHabits } from "./WaitlistStep2StudyHabits"
import { WaitlistStep3EarlyAccess } from "./WaitlistStep3EarlyAccess"
import { WaitlistStep4Confirmation } from "./WaitlistStep4Confirmation"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// TODO: this only advances local component state — nothing is sent anywhere
// yet. Wire step 1's submit to a real waitlist endpoint once one exists.
export function WaitlistPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [nameTouched, setNameTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)

  const [program, setProgram] = useState("")
  const [hours, setHours] = useState("")
  const [frustration, setFrustration] = useState("")

  const [choice, setChoice] = useState<string | null>(null)

  const nameValid = name.trim() !== ""
  const emailValid = EMAIL_PATTERN.test(email.trim())
  const step1Ready = nameValid && emailValid

  return (
    <div className="landing-root waitlist-shell">
      {step === 1 && (
        <WaitlistStep1Join
          name={name}
          email={email}
          nameTouched={nameTouched}
          emailTouched={emailTouched}
          nameValid={nameValid}
          emailValid={emailValid}
          ready={step1Ready}
          onNameChange={setName}
          onEmailChange={setEmail}
          onNameBlur={() => setNameTouched(true)}
          onEmailBlur={() => setEmailTouched(true)}
          onContinue={() => {
            setNameTouched(true)
            setEmailTouched(true)
            if (step1Ready) setStep(2)
          }}
        />
      )}

      {step === 2 && (
        <WaitlistStep2StudyHabits
          program={program}
          hours={hours}
          frustration={frustration}
          ready={program !== "" && hours !== "" && frustration.trim() !== ""}
          onProgramChange={setProgram}
          onHoursChange={setHours}
          onFrustrationChange={setFrustration}
          onContinue={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <WaitlistStep3EarlyAccess
          choice={choice}
          ready={choice !== null}
          onChoose={setChoice}
          onContinue={() => setStep(4)}
          onSkip={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <WaitlistStep4Confirmation
          onDone={() => {
            window.location.href = "/"
          }}
        />
      )}
    </div>
  )
}
