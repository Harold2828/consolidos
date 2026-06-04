import { BookOpen, Clock, DownloadSimple, PlayCircle, Stack } from '@phosphor-icons/react'
import { courseImage } from '../../utils/picsum'
import type { Course } from './data'
import './CourseCard.css'

type CourseCardProps = {
  course: Course
  featured?: boolean
}

const statusLabel: Record<Course['status'], string> = {
  open: 'Inscripciones abiertas',
  soon: 'Próximamente',
  acquired: 'Adquirido',
  in_progress: 'En curso',
}

const actionLabel: Record<Course['status'], string> = {
  open: 'Ver programa',
  soon: 'Avisarme',
  acquired: 'Ir al curso',
  in_progress: 'Continuar curso',
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <article
      className={`d2-course${featured ? ' d2-course--featured' : ''}`}
      data-area={course.area}
    >
      <div className="d2-course__thumb">
        <img
          src={courseImage(course.id)}
          alt=""
          className="d2-course__thumb-img"
          loading="lazy"
          decoding="async"
        />
        <span className="d2-course__area">{course.areaLabel}</span>
        <PlayCircle className="d2-course__play" size={featured ? 40 : 28} weight="duotone" aria-hidden />
      </div>

      <div className="d2-course__body">
        <div className="d2-course__meta-top">
          <span className={`d2-course__status d2-course__status--${course.status}`}>
            {statusLabel[course.status]}
          </span>
          <span className="d2-course__level">{course.level}</span>
        </div>

        <h3 className="d2-course__title">{course.title}</h3>
        <p className="d2-course__excerpt">{course.excerpt}</p>

        <div className="d2-course__includes">
          <strong>Incluye</strong>
          <span>Video, material descargable, ejemplos aplicados y recursos por módulo.</span>
        </div>

        <ul className="d2-course__facts" aria-label="Detalles del curso">
          <li>
            <Stack size={16} weight="regular" aria-hidden />
            {course.modules} módulos
          </li>
          <li>
            <Clock size={16} weight="regular" aria-hidden />
            {course.hours} h
          </li>
          <li>
            <BookOpen size={16} weight="regular" aria-hidden />
            {course.instructorRole}
          </li>
          <li>
            <DownloadSimple size={16} weight="regular" aria-hidden />
            Material por tema
          </li>
        </ul>

        <div className="d2-course__footer">
          <p className="d2-course__instructor">
            Imparte: <strong>{course.instructor}</strong>
          </p>
          <button
            type="button"
            className="d2-course__cta"
            disabled={course.status === 'soon'}
          >
            {actionLabel[course.status]}
          </button>
        </div>
      </div>
    </article>
  )
}
