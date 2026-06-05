import { useState } from 'react'
import './FloatingDesignMenu.css'

export type DesignOption = 1 | 2 | 3

const designs: { id: DesignOption; label: string }[] = [
  { id: 1, label: 'Diseño 1' },
  { id: 2, label: 'Diseño 2' },
  { id: 3, label: 'Diseño 3' },
]

type FloatingDesignMenuProps = {
  value: DesignOption
  onChange: (design: DesignOption) => void
}

export function FloatingDesignMenu({ value, onChange }: FloatingDesignMenuProps) {
  const [open, setOpen] = useState(false)

  const activeLabel = designs.find((d) => d.id === value)?.label ?? 'Diseño'

  return (
    <div className="floating-menu">
      {open && (
        <ul className="floating-menu__list" role="listbox" aria-label="Seleccionar diseño">
          {designs.map(({ id, label }) => (
            <li key={id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === id}
                className={`floating-menu__item${value === id ? ' floating-menu__item--active' : ''}`}
                onClick={() => {
                  onChange(id)
                  setOpen(false)
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        className="floating-menu__trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="floating-menu__trigger-label">{activeLabel}</span>
        <span className={`floating-menu__chevron${open ? ' floating-menu__chevron--open' : ''}`} aria-hidden>
          ▾
        </span>
      </button>
    </div>
  )
}
