import { useEffect, useRef } from "react"

import { CtaSection } from "./components/CtaSection"
import { FaqSection } from "./components/FaqSection"
import { Hero } from "./components/Hero"
import { LandingFooter } from "./components/LandingFooter"
import { LandingNav } from "./components/LandingNav"
import { MissionSection } from "./components/MissionSection"
import { ScrollScene } from "./components/ScrollScene"
import { TrustSection } from "./components/TrustSection"
import { scrollToSection } from "./lib/scrollToSection"
import { useScrollReveal } from "./lib/useScrollReveal"
import "./landing.css"

export function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null)
  useScrollReveal(rootRef)

  // Arriving from another page (e.g. the footer's Villkor link, or a nav link
  // that fired from the terms page) with a #section in the URL.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) scrollToSection(id)
  }, [])

  return (
    <div ref={rootRef} className="landing-root">
      <LandingNav />
      <main>
        <Hero />
        <TrustSection />
        <ScrollScene />
        <MissionSection />
        <FaqSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  )
}
