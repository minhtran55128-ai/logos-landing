export function WaitlistSkipButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" className="waitlist-ghost" onClick={onClick}>
      {label}
    </button>
  )
}
