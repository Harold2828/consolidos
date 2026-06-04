import { FadeIn } from '../../components/FadeIn'
import { LoginPage } from '../../components/LoginPage'
import { Logo } from '../../components/Logo'
import { ScrollTopButton } from '../../components/ScrollTopButton'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import { usePageNavigation } from '../../hooks/usePageNavigation'
import { courseImage, previewImages } from '../../utils/picsum'
import { courses, learningPaths, type Course } from '../design2/data'
import './Design1.css'

const routes = [
  { path: '/', page: 'home' },
  { path: '/servicios', page: 'servicios' },
  { path: '/cursos', page: 'cursos' },
  { path: '/rutas', page: 'rutas' },
  { path: '/nosotros', page: 'nosotros' },
  { path: '/contacto', page: 'contacto' },
  { path: '/login', page: 'login' },
] as const

const courseStatusLabel: Record<Course['status'], string> = {
  open: 'Inscripciones abiertas',
  soon: 'Próximamente',
  acquired: 'Adquirido',
  in_progress: 'En curso',
}

const courseActionLabel: Record<Course['status'], string> = {
  open: 'Ver programa',
  soon: 'Avisarme',
  acquired: 'Ir al curso',
  in_progress: 'Continuar curso',
}

export function Design1() {
  const { page, linkProps } = usePageNavigation(routes, 'home')
  const { isAtTop, isHidden } = useScrollHeader()
  const showFullPage = page === 'home'

  return (
    <div className="design-1">
      <header
        className={`site-header${isAtTop ? ' site-header--top' : ' site-header--light'}${isHidden ? ' site-header--hidden' : ''}`}
      >
        <div className="container site-header__inner">
          <a
            {...linkProps('/')}
            className="site-logo"
            aria-label="Consolidos S.A.S. inicio"
          >
            <Logo width={255} height={68} />
          </a>
          <nav className="site-nav" aria-label="Principal">
            <a {...linkProps('/')}>Inicio</a>
            <a {...linkProps('/servicios')}>Servicios</a>
            <a {...linkProps('/nosotros')}>Nosotros</a>
            <a {...linkProps('/cursos')}>Cursos</a>
            <a {...linkProps('/rutas')}>Rutas</a>
            <a {...linkProps('/contacto')}>Contacto</a>
          </nav>
          <a {...linkProps('/login')} className="site-header__login">
            Ingresar / registrarme
          </a>
        </div>
      </header>

      <main className={showFullPage ? undefined : 'page-main'}>
        {page === 'login' && <LoginPage />}

        {showFullPage && (
          <section className="hero">
            <div className="container hero__grid">
              <FadeIn onMount delay={0}>
                <p className="hero__eyebrow">Construcción · Inmobiliaria</p>
                <h1>Soluciones integrales para proyectos que perduran</h1>
                <p className="hero__lead">
                  Más de una década consolidando espacios comerciales, residenciales e
                  industriales con estándares de calidad y cumplimiento.
                </p>
                <div className="hero__actions">
                  <a {...linkProps('/contacto')} className="btn btn--primary">
                    Solicitar cotización
                  </a>
                  <a {...linkProps('/servicios')} className="btn btn--ghost">
                    Ver servicios
                  </a>
                </div>
              </FadeIn>
              <FadeIn className="hero__visual" onMount delay={140}>
                <img
                  src={previewImages.obra}
                  alt="Proyecto de construcción"
                  className="hero__visual-img"
                  loading="eager"
                  decoding="async"
                />
              </FadeIn>
            </div>
          </section>
        )}

        {(showFullPage || page === 'servicios') && (
          <FadeIn as="section" className="section section--alt" id="servicios">
            <div className="container">
              <h2 className="section__title">Nuestros servicios</h2>
              <p className="section__subtitle">
                Acompañamos cada etapa del proyecto, desde la planeación hasta la entrega.
              </p>
              <div className="cards">
                <FadeIn as="article" className="card" delay={0}>
                  <img
                    src={previewImages.servicio1}
                    alt=""
                    className="card__img"
                    loading="lazy"
                  />
                  <div className="card__num">01</div>
                  <h3>Construcción</h3>
                  <p>
                    Obras civiles, estructuras y acabados con control de calidad en sitio.
                  </p>
                </FadeIn>
                <FadeIn as="article" className="card" delay={90}>
                  <img
                    src={previewImages.servicio2}
                    alt=""
                    className="card__img"
                    loading="lazy"
                  />
                  <div className="card__num">02</div>
                  <h3>Desarrollo inmobiliario</h3>
                  <p>Proyectos residenciales y comerciales con visión de largo plazo.</p>
                </FadeIn>
                <FadeIn as="article" className="card" delay={180}>
                  <img
                    src={previewImages.servicio3}
                    alt=""
                    className="card__img"
                    loading="lazy"
                  />
                  <div className="card__num">03</div>
                  <h3>Consultoría</h3>
                  <p>Asesoría técnica, presupuestos y gestión de licencias y permisos.</p>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'cursos') && (
          <FadeIn as="section" className="section" id="cursos">
            <div className="container">
              <h2 className="section__title">Cursos disponibles</h2>
              <p className="section__subtitle">
                Formación práctica para equipos técnicos, con material descargable,
                módulos por tema y seguimiento visual del estado del curso.
              </p>
              <div className="course-preview-grid">
                {courses.slice(0, 4).map((course, index) => (
                  <FadeIn key={course.id} as="article" className="course-preview" delay={index * 80}>
                    <img src={courseImage(course.id)} alt="" loading="lazy" decoding="async" />
                    <div className="course-preview__body">
                      <span className={`course-preview__status course-preview__status--${course.status}`}>
                        {courseStatusLabel[course.status]}
                      </span>
                      <h3>{course.title}</h3>
                      <p>{course.excerpt}</p>
                      <ul>
                        <li>{course.modules} módulos</li>
                        <li>{course.hours} horas</li>
                        <li>Material descargable</li>
                      </ul>
                      <button type="button" className="btn btn--primary">
                        {courseActionLabel[course.status]}
                      </button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'rutas') && (
          <FadeIn as="section" className="section section--alt" id="rutas">
            <div className="container">
              <h2 className="section__title">Rutas por área</h2>
              <p className="section__subtitle">
                Organice la capacitación por especialidad y avance desde fundamentos hasta
                aplicación en obra.
              </p>
              <div className="path-grid">
                {learningPaths.map((path) => (
                  <article className="path-card" key={path.title}>
                    <span>{path.area}</span>
                    <h3>{path.title}</h3>
                    <p>{path.content}</p>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'nosotros') && (
          <FadeIn as="section" className="section" id="nosotros">
            <div className="container">
              <h2 className="section__title">¿Por qué Consolidos?</h2>
              <p className="section__subtitle">
                Integramos diseño, planeación, presupuesto y ejecución en un solo equipo
                técnico. Cada proyecto se gestiona con cronogramas claros, control de
                costos, documentación verificable y comunicación constante con el cliente,
                para reducir imprevistos y entregar obras con criterio, orden y respaldo.
              </p>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'contacto') && (
          <FadeIn as="section" className="cta" id="contacto">
            <div className="container">
              <h2>¿Listo para iniciar su proyecto?</h2>
              <p>Escríbanos y le respondemos en menos de 24 horas hábiles.</p>
              <a href="mailto:contacto@consolidos.com" className="btn btn--primary">
                contacto@consolidos.com
              </a>
            </div>
          </FadeIn>
        )}
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Consolidos S.A.S. Todos los derechos reservados.</p>
        </div>
      </footer>
      <ScrollTopButton />
    </div>
  )
}
