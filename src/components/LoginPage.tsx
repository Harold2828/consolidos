import { Logo } from './Logo'
import './LoginPage.css'

export function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-page__panel" aria-labelledby="login-title">
        <Logo width={150} height={45} className="login-page__logo" />
        <p className="login-page__eyebrow">Ingreso de usuario</p>
        <h1 id="login-title">Ingrese o registre su cuenta</h1>
        <p className="login-page__lead">
          Acceda a sus cursos, descargue materiales, consulte su progreso y revise sus
          certificados cuando estén disponibles.
        </p>

        <button type="button" className="login-page__google">
          <span aria-hidden>G</span>
          Continuar con Google
        </button>

        <form className="login-page__form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="login-email">Correo electrónico</label>
          <input id="login-email" type="email" placeholder="nombre@empresa.com" autoComplete="email" />

          <label htmlFor="login-password">Contraseña</label>
          <input
            id="login-password"
            type="password"
            placeholder="Ingrese su contraseña"
            autoComplete="current-password"
          />

          <button type="submit" className="login-page__submit">
            Ingresar
          </button>
        </form>

        <p className="login-page__note">
          ¿No tiene cuenta? Regístrese para guardar sus cursos y materiales.
        </p>
      </section>
    </main>
  )
}
