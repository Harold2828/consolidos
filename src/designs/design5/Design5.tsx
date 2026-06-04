import { BookOpen, Certificate, Clock, PlayCircle } from '@phosphor-icons/react'
import { Logo } from '../../components/Logo'
import { courseImage } from '../../utils/picsum'
import { dashboardUser, enrolledCourses } from '../shared/dashboardData'
import './Design5.css'

const statusLabel = {
  in_progress: 'En curso',
  acquired: 'Completado',
} as const

export function Design5() {
  return (
    <div className="design-5">
      <header className="d5-topbar">
        <a href="#" className="d5-topbar__brand" aria-label="Consolidos Academia">
          <Logo width={120} height={36} />
        </a>
        <nav className="d5-topbar__nav" aria-label="Área de estudiante">
          <a href="#" className="d5-topbar__link d5-topbar__link--active" aria-current="page">
            Mis cursos
          </a>
          <a href="#" className="d5-topbar__link">
            Perfil
          </a>
        </nav>
        <div className="d5-topbar__user">
          <span className="d5-topbar__avatar" aria-hidden>
            {dashboardUser.initials}
          </span>
          <div className="d5-topbar__user-text">
            <strong>{dashboardUser.name}</strong>
            <span>{dashboardUser.role}</span>
          </div>
        </div>
      </header>

      <main className="d5-main">
        <div className="d5-container">
          <header className="d5-page-head">
            <div>
              <p className="d5-page-head__eyebrow">Área de estudiante</p>
              <h1>Mis cursos</h1>
              <p className="d5-page-head__lead">
                Retome donde lo dejó, descargue materiales y consulte su avance por módulo.
              </p>
            </div>
            <div className="d5-summary">
              <div className="d5-summary__item">
                <BookOpen size={22} weight="duotone" aria-hidden />
                <span>
                  <strong>{enrolledCourses.length}</strong>
                  inscritos
                </span>
              </div>
              <div className="d5-summary__item">
                <Clock size={22} weight="duotone" aria-hidden />
                <span>
                  <strong>2</strong>
                  en progreso
                </span>
              </div>
            </div>
          </header>

          <ul className="d5-course-list">
            {enrolledCourses.map((course) => (
              <li key={course.id}>
                <article className="d5-course-card">
                  <img
                    src={courseImage(course.id)}
                    alt=""
                    className="d5-course-card__img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="d5-course-card__body">
                    <div className="d5-course-card__meta">
                      <span className="d5-course-card__area">{course.areaLabel}</span>
                      <span
                        className={`d5-course-card__status d5-course-card__status--${course.status}`}
                      >
                        {statusLabel[course.status]}
                      </span>
                    </div>
                    <h2>{course.title}</h2>
                    <p className="d5-course-card__modules">
                      {course.modulesDone} de {course.modulesTotal} módulos · Último acceso:{' '}
                      {course.lastAccess}
                    </p>
                    <div className="d5-course-card__progress">
                      <div
                        className="d5-course-card__bar"
                        role="progressbar"
                        aria-valuenow={course.progressPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span style={{ width: `${course.progressPercent}%` }} />
                      </div>
                      <span className="d5-course-card__percent">{course.progressPercent}%</span>
                    </div>
                    <div className="d5-course-card__actions">
                      {course.status === 'acquired' ? (
                        <button type="button" className="d5-btn d5-btn--ghost">
                          <Certificate size={18} weight="duotone" aria-hidden />
                          Ver certificado
                        </button>
                      ) : (
                        <button type="button" className="d5-btn d5-btn--primary">
                          <PlayCircle size={18} weight="fill" aria-hidden />
                          Continuar curso
                        </button>
                      )}
                      <button type="button" className="d5-btn d5-btn--ghost">
                        Materiales
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
