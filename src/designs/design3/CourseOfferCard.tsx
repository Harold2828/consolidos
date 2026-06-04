import { Clock, DownloadSimple, PlayCircle, Stack } from '@phosphor-icons/react'
import { courseImage } from '../../utils/picsum'
import type { Course } from '../design2/data'

type CourseOfferCardProps = {
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
  open: 'Inscribirme al curso',
  soon: 'Avisarme cuando abra',
  acquired: 'Ir al curso',
  in_progress: 'Continuar curso',
}

export function CourseOfferCard({ course, featured = false }: CourseOfferCardProps) {
  return (
    <article className={`d3-course${featured ? ' d3-course--featured' : ''}`}>
      <div className="d3-course__thumb">
        <img src={courseImage(course.id)} alt="" loading="lazy" decoding="async" />
        <span className={`d3-course__badge d3-course__badge--${course.status}`}>
          {statusLabel[course.status]}
        </span>
        <PlayCircle className="d3-course__play" size={featured ? 36 : 28} weight="duotone" aria-hidden />
      </div>
      <div className="d3-course__body">
        <p className="d3-course__area">{course.areaLabel}</p>
        <h3>{course.title}</h3>
        <p className="d3-course__excerpt">{course.excerpt}</p>
        <ul className="d3-course__meta">
          <li>
            <Stack size={15} aria-hidden />
            {course.modules} módulos
          </li>
          <li>
            <Clock size={15} aria-hidden />
            {course.hours} horas
          </li>
          <li>
            <DownloadSimple size={15} aria-hidden />
            Material descargable
          </li>
        </ul>
        <p className="d3-course__teacher">
          {course.instructorRole}
        </p>
        <button type="button" className="d3-btn d3-btn--gold d3-course__cta" disabled={course.status === 'soon'}>
          {actionLabel[course.status]}
        </button>
      </div>
    </article>
  )
}
