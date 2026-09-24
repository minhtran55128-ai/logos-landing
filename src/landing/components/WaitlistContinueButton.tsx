import { ArrowRight } from "lucide-react"

export function WaitlistContinueButton({
  label,
  ready,
  onClick,
}: {
  label: string
  ready: boolean
  onClick: () => void
}) {
  return (
    <button type="button" className="waitlist-continue" data-state={ready ? "ready" : "default"} onClick={onClick}>
      {label}
      <ArrowRight size={20} aria-hidden="true" />
    </button>
  )
}
