export function WaitlistChoice({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button type="button" className="waitlist-choice" aria-pressed={selected} onClick={onSelect}>
      {label}
    </button>
  )
}
