import { ChevronDown } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"

const clampIndex = (index: number, length: number) => Math.min(Math.max(index, 0), Math.max(length - 1, 0))

type WaitlistComboboxProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  options: string[]
  // Searchable fields (e.g. program) accept free text and filter the list as
  // you type. Non-searchable ones (e.g. hours) are a small fixed set — the
  // input is read-only and just toggles the full list.
  searchable?: boolean
  maxVisible?: number
}

export function WaitlistCombobox({
  id,
  label,
  value,
  onChange,
  placeholder,
  options,
  searchable = true,
  maxVisible = 8,
}: WaitlistComboboxProps) {
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  const query = searchable ? value.trim().toLowerCase() : ""
  const filtered = (
    query === "" ? options : options.filter((option) => option.toLowerCase().includes(query))
  ).slice(0, maxVisible)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [open])

  const highlightedIndex = clampIndex(highlighted, filtered.length)

  const choose = (option: string) => {
    onChange(option)
    setOpen(false)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      if (!open) {
        setOpen(true)
        return
      }
      setHighlighted((index) => Math.min(index + 1, filtered.length - 1))
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setHighlighted((index) => Math.max(index - 1, 0))
    } else if (event.key === "Enter") {
      if (open && filtered[highlightedIndex]) {
        event.preventDefault()
        choose(filtered[highlightedIndex])
      }
    } else if (event.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div className="waitlist-field" ref={rootRef}>
      <label className="waitlist-field-label" htmlFor={id}>
        {label}
      </label>
      <div className="waitlist-combobox">
        <input
          id={id}
          className="waitlist-input waitlist-combobox-input"
          type="text"
          role="combobox"
          autoComplete="off"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete={searchable ? "list" : "none"}
          readOnly={!searchable}
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            onChange(event.target.value)
            setHighlighted(0)
          }}
          onFocus={() => {
            setOpen(true)
            setHighlighted(0)
          }}
          onClick={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        <ChevronDown className="waitlist-select-chevron" size={20} aria-hidden="true" />

        {open && filtered.length > 0 ? (
          <ul id={listboxId} role="listbox" className="waitlist-combobox-panel">
            {filtered.map((option, index) => (
              <li
                key={option}
                role="option"
                aria-selected={option === value}
                data-highlighted={index === highlightedIndex || undefined}
                className="waitlist-combobox-option"
                onMouseEnter={() => setHighlighted(index)}
                // Fires before the input's onBlur, so the click still lands.
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
