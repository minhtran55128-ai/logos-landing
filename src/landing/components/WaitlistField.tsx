type WaitlistFieldProps = {
  id: string
  label: string
  type: "text" | "email" | "textarea"
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  placeholder?: string
  error?: string
}

export function WaitlistField({ id, label, type, value, onChange, onBlur, placeholder, error }: WaitlistFieldProps) {
  const invalid = Boolean(error)

  return (
    <div className="waitlist-field">
      <label className="waitlist-field-label" htmlFor={id}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          className="waitlist-textarea"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={3}
          data-invalid={invalid || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="waitlist-input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          data-invalid={invalid || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? `${id}-error` : undefined}
        />
      )}

      {error ? (
        <p id={`${id}-error`} className="waitlist-helper">
          {error}
        </p>
      ) : null}
    </div>
  )
}
