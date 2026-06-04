import {
  Bell,
  EnvelopeSimple,
  Gear,
  IdentificationCard,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { Logo } from '../../components/Logo'
import { dashboardUser, enrolledCourses, profileStats } from '../shared/dashboardData'
import './Design6.css'

export function Design6() {
  return (
    <div className="design-6">
      <header className="d6-topbar">
        <a href="#" className="d6-topbar__brand" aria-label="Consolidos Academia">
          <Logo width={120} height={36} />
        </a>
        <nav className="d6-topbar__nav" aria-label="Área de estudiante">
          <a href="#" className="d6-topbar__link">
            Mis cursos
          </a>
          <a href="#" className="d6-topbar__link d6-topbar__link--active" aria-current="page">
            Perfil
          </a>
        </nav>
        <div className="d6-topbar__user">
          <span className="d6-topbar__avatar" aria-hidden>
            {dashboardUser.initials}
          </span>
          <div className="d6-topbar__user-text">
            <strong>{dashboardUser.name}</strong>
            <span>{dashboardUser.role}</span>
          </div>
        </div>
      </header>

      <main className="d6-main">
        <div className="d6-container">
          <header className="d6-profile-hero">
            <div className="d6-profile-hero__avatar" aria-hidden>
              <User size={40} weight="duotone" />
            </div>
            <div className="d6-profile-hero__info">
              <p className="d6-profile-hero__eyebrow">Mi cuenta</p>
              <h1>{dashboardUser.name}</h1>
              <p>{dashboardUser.role} · Miembro desde {dashboardUser.memberSince}</p>
            </div>
            <button type="button" className="d6-btn d6-btn--ghost">
              <Gear size={18} aria-hidden />
              Editar perfil
            </button>
          </header>

          <div className="d6-stats">
            {profileStats.map((stat) => (
              <article key={stat.label} className="d6-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <div className="d6-grid">
            <section className="d6-panel" aria-labelledby="d6-datos">
              <h2 id="d6-datos">Datos personales</h2>
              <ul className="d6-fields">
                <li>
                  <IdentificationCard size={20} weight="duotone" aria-hidden />
                  <div>
                    <span>Nombre completo</span>
                    <strong>{dashboardUser.name}</strong>
                  </div>
                </li>
                <li>
                  <EnvelopeSimple size={20} weight="duotone" aria-hidden />
                  <div>
                    <span>Correo</span>
                    <strong>{dashboardUser.email}</strong>
                  </div>
                </li>
                <li>
                  <User size={20} weight="duotone" aria-hidden />
                  <div>
                    <span>Empresa</span>
                    <strong>{dashboardUser.company}</strong>
                  </div>
                </li>
              </ul>
            </section>

            <section className="d6-panel" aria-labelledby="d6-progreso">
              <h2 id="d6-progreso">Progreso reciente</h2>
              <ul className="d6-progress-list">
                {enrolledCourses
                  .filter((c) => c.status === 'in_progress')
                  .map((course) => (
                    <li key={course.id} className="d6-progress-item">
                      <div className="d6-progress-item__head">
                        <strong>{course.title}</strong>
                        <span>{course.progressPercent}%</span>
                      </div>
                      <div
                        className="d6-progress-item__bar"
                        role="progressbar"
                        aria-valuenow={course.progressPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span style={{ width: `${course.progressPercent}%` }} />
                      </div>
                      <p>
                        {course.modulesDone}/{course.modulesTotal} módulos · {course.lastAccess}
                      </p>
                    </li>
                  ))}
              </ul>
            </section>

            <section className="d6-panel d6-panel--wide" aria-labelledby="d6-prefs">
              <h2 id="d6-prefs">Preferencias</h2>
              <div className="d6-prefs">
                <label className="d6-pref">
                  <input type="checkbox" defaultChecked />
                  <span>
                    <Bell size={18} weight="duotone" aria-hidden />
                    Avisarme cuando haya nuevos módulos
                  </span>
                </label>
                <label className="d6-pref">
                  <input type="checkbox" defaultChecked />
                  <span>
                    <EnvelopeSimple size={18} weight="duotone" aria-hidden />
                    Resumen semanal de progreso por correo
                  </span>
                </label>
              </div>
              <button type="button" className="d6-btn d6-btn--danger">
                <SignOut size={18} aria-hidden />
                Cerrar sesión
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
