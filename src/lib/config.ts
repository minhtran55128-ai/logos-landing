// Set VITE_FORMSPREE_ENDPOINT in .env.local (see .env.example) once you have
// a real Formspree form. Until then the waitlist form is disabled with a
// clear notice instead of silently failing.
export const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
  | string
  | undefined
