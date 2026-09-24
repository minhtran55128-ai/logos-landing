import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Tailwind's preflight reset (list bullets, margins, etc.) — every entry needs
// it, same as main.tsx.
import "./index.css"
import { TermsPage } from "./landing/components/TermsPage"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
)
