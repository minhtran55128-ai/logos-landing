import type { ReactNode } from "react"

import { LandingFooter } from "./LandingFooter"
import { LandingNav } from "./LandingNav"

// Shared chrome for standalone legal pages (terms, and later privacy): the same
// nav and footer as the landing page, without the scroll scene between them.
export function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="landing-root">
      <LandingNav />
      <main>{children}</main>
      <LandingFooter />
    </div>
  )
}
