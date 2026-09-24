import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Tailwind's preflight reset (list bullets, margins, etc.) — every entry needs
// it, same as main.tsx.
import "./index.css"
import { WaitlistPage } from "./landing/components/WaitlistPage"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WaitlistPage />
  </StrictMode>,
)
