import { ContextSection } from "./components/ContextSection"
import { ContinuitySection } from "./components/ContinuitySection"
import { FaqSection } from "./components/FaqSection"
import { Footer } from "./components/Footer"
import { FutureSection } from "./components/FutureSection"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { JoinSection } from "./components/JoinSection"
import { MissionSection } from "./components/MissionSection"
import { OutcomeSection } from "./components/OutcomeSection"
import { OutputsSection } from "./components/OutputsSection"
import { PersonalizeSection } from "./components/PersonalizeSection"
import { PictureSection } from "./components/PictureSection"
import { SystemSection } from "./components/SystemSection"
import { WhyLogosSection } from "./components/WhyLogosSection"
import { WhySection } from "./components/WhySection"

function App() {
  return (
    <div className="logos-page min-h-[100dvh]">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <PictureSection />
        <ContextSection />
        <PersonalizeSection />
        <OutputsSection />
        <SystemSection />
        <ContinuitySection />
        <FutureSection />
        <WhyLogosSection />
        <OutcomeSection />
        <MissionSection />
        <FaqSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
