import type { ReactNode } from "react"

// Minimal inline markdown for legal copy: **bold** and [text](url). No nesting,
// no other syntax — just enough for the two patterns the terms content uses.
const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g

export function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let key = 0

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index))

    const [, bold, linkText, href] = match
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>)
    } else {
      nodes.push(
        <a key={key++} href={href} className="landing-legal-link">
          {linkText}
        </a>,
      )
    }
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}
