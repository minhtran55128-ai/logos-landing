import { terms } from "../data/terms"
import { renderInlineMarkdown } from "../lib/inlineMarkdown"
import "../landing.css"
import { LegalLayout } from "./LegalLayout"

export function TermsPage() {
  return (
    <LegalLayout>
      <section className="landing-shell landing-section landing-legal">
        <header className="landing-legal-header">
          <h1 className="landing-legal-title">{terms.title}</h1>
          <p className="landing-body-sm landing-legal-updated">{terms.updated}</p>
        </header>

        <div className="landing-legal-body">
          {terms.sections.map((section) => (
            <section key={section.heading} className="landing-legal-section">
              <h2 className="landing-h2 landing-legal-heading">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="landing-body landing-legal-paragraph">
                  {renderInlineMarkdown(paragraph)}
                </p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </LegalLayout>
  )
}
