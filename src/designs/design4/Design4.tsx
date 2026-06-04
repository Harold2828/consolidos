import {
  CaretLeft,
  CaretRight,
  CheckCircle,
  Circle,
  DownloadSimple,
  Play,
  User,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { courseImage } from '../../utils/picsum'
import {
  currentLesson,
  playerCourse,
  playerModules,
  playerUser,
  type Lesson,
} from './coursePlayerData'
import './Design4.css'

function findLesson(id: string): { lesson: Lesson; moduleTitle: string } | undefined {
  for (const mod of playerModules) {
    const lesson = mod.lessons.find((l) => l.id === id)
    if (lesson) return { lesson, moduleTitle: mod.title }
  }
  return undefined
}

export function Design4() {
  const [activeLessonId, setActiveLessonId] = useState(currentLesson.id)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const active = findLesson(activeLessonId) ?? {
    lesson: currentLesson,
    moduleTitle: playerModules[0].title,
  }
  const poster = courseImage(playerCourse.id)

  return (
    <div className="design-4">
      <header className="d4-topbar">
        <div className="d4-topbar__left">
          <a href="#" className="d4-topbar__back">
            <CaretLeft size={18} weight="bold" aria-hidden />
            Mis cursos
          </a>
          <span className="d4-topbar__divider" aria-hidden />
          <Logo width={120} height={36} />
        </div>
        <p className="d4-topbar__course" title={playerCourse.title}>
          {playerCourse.title}
        </p>
        <div className="d4-topbar__user">
          <span className="d4-topbar__avatar" aria-hidden>
            {playerUser.initials}
          </span>
          <div className="d4-topbar__user-text">
            <strong>{playerUser.name}</strong>
            <span>{playerUser.role}</span>
          </div>
        </div>
      </header>

      <div className="d4-layout">
        <aside
          className={`d4-sidebar${sidebarOpen ? '' : ' d4-sidebar--collapsed'}`}
          aria-label="Módulos del curso"
        >
          <div className="d4-profile">
            <div className="d4-profile__head">
              <span className="d4-profile__icon" aria-hidden>
                <User size={22} weight="duotone" />
              </span>
              <div>
                <p className="d4-profile__label">Su progreso</p>
                <p className="d4-profile__percent">{playerCourse.progressPercent}%</p>
              </div>
            </div>
            <div className="d4-profile__bar" role="progressbar" aria-valuenow={playerCourse.progressPercent} aria-valuemin={0} aria-valuemax={100}>
              <span style={{ width: `${playerCourse.progressPercent}%` }} />
            </div>
            <p className="d4-profile__meta">
              {playerCourse.areaLabel} · {playerModules.length} módulos
            </p>
          </div>

          <nav className="d4-modules">
            {playerModules.map((mod) => (
              <div key={mod.id} className="d4-module">
                <h2 className="d4-module__title">{mod.title}</h2>
                <ul className="d4-lessons">
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLessonId
                    const Icon = lesson.completed ? CheckCircle : Circle
                    return (
                      <li key={lesson.id}>
                        <button
                          type="button"
                          className={`d4-lesson${isActive ? ' d4-lesson--active' : ''}${lesson.completed ? ' d4-lesson--done' : ''}`}
                          aria-current={isActive ? 'true' : undefined}
                          onClick={() => setActiveLessonId(lesson.id)}
                        >
                          <Icon
                            size={18}
                            weight={lesson.completed ? 'fill' : 'regular'}
                            className="d4-lesson__status"
                            aria-hidden
                          />
                          <span className="d4-lesson__text">
                            <span className="d4-lesson__name">{lesson.title}</span>
                            <span className="d4-lesson__dur">{lesson.durationMin} min</span>
                          </span>
                          {isActive && (
                            <Play size={16} weight="fill" className="d4-lesson__play" aria-hidden />
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <button
          type="button"
          className="d4-sidebar-toggle"
          aria-expanded={sidebarOpen}
          aria-label={sidebarOpen ? 'Ocultar módulos' : 'Mostrar módulos'}
          onClick={() => setSidebarOpen((o) => !o)}
        >
          <CaretLeft
            size={18}
            weight="bold"
            className={sidebarOpen ? '' : 'd4-sidebar-toggle__icon--flip'}
            aria-hidden
          />
        </button>

        <main className="d4-main">
          <div className="d4-player">
            <div className="d4-player__screen">
              <img src={poster} alt="" className="d4-player__poster" />
              <button type="button" className="d4-player__play" aria-label="Reproducir lección">
                <Play size={40} weight="fill" aria-hidden />
              </button>
              <span className="d4-player__badge">HD</span>
            </div>
            <div className="d4-player__chrome">
              <div className="d4-player__progress">
                <span className="d4-player__progress-fill" style={{ width: '42%' }} />
              </div>
              <div className="d4-player__controls">
                <span>08:24 / 18:00</span>
                <span className="d4-player__controls-right">1x · CC</span>
              </div>
            </div>
          </div>

          <div className="d4-lesson-detail">
            <div className="d4-lesson-detail__head">
              <div>
                <p className="d4-lesson-detail__module">{active.moduleTitle}</p>
                <h1>{active.lesson.title}</h1>
              </div>
              <div className="d4-lesson-detail__nav">
                <button type="button" className="d4-btn d4-btn--ghost">
                  <CaretLeft size={16} aria-hidden />
                  Anterior
                </button>
                <button type="button" className="d4-btn d4-btn--primary">
                  Siguiente
                  <CaretRight size={16} aria-hidden />
                </button>
              </div>
            </div>
            <p className="d4-lesson-detail__desc">
              Revise la lista de verificación de capas, escalas y cuadro de revisiones
              antes de radicar en curaduría. Incluye una plantilla descargable alineada
              con la práctica colombiana.
            </p>
            <ul className="d4-resources">
              <li>
                <DownloadSimple size={18} weight="duotone" aria-hidden />
                Lista_verificación_planos_curaduría.pdf
              </li>
              <li>
                <DownloadSimple size={18} weight="duotone" aria-hidden />
                Plantilla_capas_CAD.dwg
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
