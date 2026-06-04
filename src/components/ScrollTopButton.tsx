import './ScrollTopButton.css'

export function ScrollTopButton() {
  return (
    <button
      type="button"
      className="scroll-top-button"
      aria-label="Subir al inicio"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span aria-hidden>↑</span>
    </button>
  )
}
