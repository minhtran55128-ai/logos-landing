import { loginLabel } from "../data/content"

// Inert for now, like the waitlist button: no destination exists yet.
export function LoginButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={`landing-cta landing-cta-secondary ${className}`.trim()}>
      {loginLabel}
    </button>
  )
}
