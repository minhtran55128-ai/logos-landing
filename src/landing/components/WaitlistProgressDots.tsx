export function WaitlistProgressDots({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="waitlist-progress" role="presentation">
      {[1, 2, 3].map((dot) => (
        <span key={dot} className="waitlist-progress-dot" data-active={dot === step ? "" : undefined} />
      ))}
    </div>
  )
}
