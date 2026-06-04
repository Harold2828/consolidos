import {
  BookOpenText,
  Certificate,
  ChalkboardTeacher,
  Clock,
  VideoCamera,
} from '@phosphor-icons/react'
import { FadeIn } from '../../components/FadeIn'
import { LoginPage } from '../../components/LoginPage'
import { Logo } from '../../components/Logo'
import { ScrollTopButton } from '../../components/ScrollTopButton'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import { usePageNavigation } from '../../hooks/usePageNavigation'
import { courses, learningPaths } from '../design2/data'
import { CourseOfferCard } from './CourseOfferCard'
import { d3Images } from './images'
import { useParallaxScene } from '../../hooks/useParallaxScene'
import { ParallaxImage } from './ParallaxImage'
import { BuildingSkyline } from './BuildingSkyline'
import './Design3.css'

const includes = [
  {
    title: 'Clases en video HD',
    text: 'Lecciones por módulo, pausables y actualizables según cambie la normativa.',
  },
  {
    title: 'Material de obra',
    text: 'Plantillas, listas de verificación y ejemplos de planos listos para licencia e interventoría.',
  },
  {
    title: 'Docentes en sitio',
    text: 'Ingenieros que diseñan y ejecutan bajo reglamento colombiano, no teóricos de otro país.',
  },
] as const

const openCourse = courses.find((c) => c.status === 'open')!
const catalogCourses = courses.filter((c) => c.id !== openCourse.id).slice(0, 4)

const routes = [
  { path: '/', page: 'home' },
  { path: '/nosotros', page: 'nosotros' },
  { path: '/cursos', page: 'cursos' },
  { path: '/catalogo', page: 'catalogo' },
  { path: '/rutas', page: 'rutas' },
  { path: '/inscripcion', page: 'inscripcion' },
  { path: '/login', page: 'login' },
] as const

export function Design3() {
  const { sceneRef, layer } = useParallaxScene()
  const { page, linkProps } = usePageNavigation(routes, 'home')
  const { isAtTop, isHidden } = useScrollHeader()
  const showFullPage = page === 'home'

  return (
    <div className="design-3">
      <header
        className={`d3-header${isAtTop ? ' d3-header--top' : ' d3-header--light'}${isHidden ? ' d3-header--hidden' : ''}`}
      >
        <div className="d3-container d3-header__inner">
          <a
            {...linkProps('/')}
            className="d3-header__brand"
            aria-label="Consolidos Cursos"
          >
            <Logo width={205} height={61} />
          </a>
          <nav className="d3-nav" aria-label="Principal">
            <a {...linkProps('/')}>Inicio</a>
            <a {...linkProps('/nosotros')}>Nosotros</a>
            <a {...linkProps('/cursos')}>Cursos</a>
            <a {...linkProps('/rutas')}>Rutas</a>
          </nav>
          <a {...linkProps('/login')} className="d3-btn d3-btn--gold d3-header__cta">
            Ingresar / registrarme
          </a>
        </div>
      </header>

      {page === 'login' && <LoginPage />}

      {showFullPage && (
        <section className="d3-hero d3-scene" ref={sceneRef}>
          <div
            className="d3-scene__orb d3-scene__orb--a"
            style={layer({ scroll: 0.12, mouse: 0.15 })}
            aria-hidden
          />
          <div
            className="d3-scene__orb d3-scene__orb--b"
            style={layer({ scroll: 0.22, mouse: 0.2 })}
            aria-hidden
          />
          <div
            className="d3-scene__mesh"
            style={layer({ scroll: 0.08, mouse: 0.05 })}
            aria-hidden
          />

          <BuildingSkyline layer={layer} />

          <div className="d3-container d3-hero__layout">
            <FadeIn className="d3-hero__copy" onMount delay={0}>
              <div
                className="d3-hero__copy-inner"
                style={layer({ scroll: -0.06, mouse: 0.18, scaleFalloff: 0.04 })}
              >
                <p className="d3-hero__seal">Catálogo 2026 · Cursos de ingeniería civil</p>
                <h1 className="d3-hero__title">
                  Aprenda la <span className="d3-hero__gold">normativa colombiana</span>{' '}
                  con quien la aplica en obra
                </h1>
                <p className="d3-hero__lead">
                  Cursos online con video, guías descargables y casos reales. Formación
                  pensada para licencias, estructuras, BIM y gestión de proyecto.
                </p>
                <div className="d3-hero__actions">
                  <a {...linkProps('/cursos')} className="d3-btn d3-btn--gold">
                    Ver curso abierto
                  </a>
                  <a {...linkProps('/catalogo')} className="d3-btn d3-btn--outline">
                    Explorar catálogo
                  </a>
                </div>
                <p className="d3-hero__note">
                  <Clock size={16} weight="duotone" aria-hidden />
                  Acceso 24/7 · Actualización normativa · Cupos por cohorte
                </p>
              </div>
            </FadeIn>

            <div className="d3-scene__stage">
              <div
                className="d3-float d3-float--open"
                style={layer({ scroll: 0.5, mouse: 0.85, scaleFalloff: 0.06 })}
              >
                <strong>Abierto</strong>
                <span>Inscripciones hoy</span>
              </div>
              <div
                className="d3-float d3-float--areas"
                style={layer({ scroll: 0.68, mouse: 1, scaleFalloff: 0.08 })}
              >
                <strong>7</strong>
                <span>rutas de cursos</span>
              </div>
              <div
                className="d3-float d3-float--hours"
                style={layer({ scroll: 0.38, mouse: 0.7, scaleFalloff: 0.05 })}
              >
                10–18 h por curso
              </div>

              <img
                src={d3Images.heroAccent}
                alt=""
                className="d3-scene__img d3-scene__img--back"
                style={layer({ scroll: 0.18, mouse: 0.28, scaleFalloff: 0.05 })}
                loading="eager"
                decoding="async"
              />
              <img
                src={d3Images.heroMain}
                alt="Curso de ingeniería civil en línea"
                className="d3-scene__img d3-scene__img--main"
                style={layer({ scroll: 0.4, mouse: 0.5, scaleFalloff: 0.12 })}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>
      )}

      <main className={showFullPage ? undefined : 'd3-page-main'}>
        {(showFullPage || page === 'cursos') && (
          <FadeIn as="section" className="d3-spotlight" id="cursos">
            <div className="d3-container">
              <div className="d3-section-head">
                <h2>Curso disponible ahora</h2>
                <p>Empiece hoy con el módulo que ya tiene inscripciones abiertas.</p>
              </div>
              <CourseOfferCard course={openCourse} featured />
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'catalogo') && (
          <FadeIn as="section" className="d3-catalog" id="catalogo">
            <div className="d3-container">
              <div className="d3-section-head">
                <h2>Próximos cursos del catálogo</h2>
                <p>
                  Reserve su cupo o reciba un aviso cuando abra cada ruta. Todos los
                  cursos tienen enfoque en normativa y práctica colombiana.
                </p>
              </div>
              <div className="d3-catalog__grid">
                {catalogCourses.map((course, i) => (
                  <FadeIn key={course.id} delay={i * 80}>
                    <CourseOfferCard course={course} />
                  </FadeIn>
                ))}
              </div>
              <p className="d3-catalog__more">
                +{courses.length - catalogCourses.length - 1} cursos más en las 7 áreas de
                ingeniería civil
              </p>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'nosotros') && (
          <FadeIn as="section" className="d3-includes">
            <div className="d3-container">
              <div className="d3-section-head d3-section-head--center">
                <h2>¿Qué recibe al comprar un curso?</h2>
                <p>Todo lo necesario para llevar el aprendizaje directo a su proyecto.</p>
              </div>
              <div className="d3-includes__grid">
                {includes.map((item, i) => (
                  <FadeIn key={item.title} as="article" className="d3-include" delay={i * 70}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </FadeIn>
                ))}
              </div>
              <ul className="d3-includes__perks">
                <li>
                  <VideoCamera size={20} weight="duotone" aria-hidden />
                  Video + descargables
                </li>
                <li>
                  <ChalkboardTeacher size={20} weight="duotone" aria-hidden />
                  Especialistas locales
                </li>
                <li>
                  <BookOpenText size={20} weight="duotone" aria-hidden />
                  Casos de licencia y obra
                </li>
                <li>
                  <Certificate size={20} weight="duotone" aria-hidden />
                  Certificado (en desarrollo)
                </li>
              </ul>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'rutas') && (
          <FadeIn as="section" className="d3-routes">
            <div className="d3-container d3-routes__inner">
              <ParallaxImage
                src={d3Images.classroom}
                alt="Clase en línea de ingeniería civil"
                speed={0.35}
                wrapperClassName="d3-routes__media"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2 className="d3-section-title">Rutas por área</h2>
                <p className="d3-routes__lead">
                  Elija su área y avance módulo a módulo. Cada ruta está parametrizada
                  con título y contenido para crecer con el catálogo.
                </p>
                <ul className="d3-routes__areas">
                  {learningPaths.map((path) => (
                    <li key={path.title}>
                      <strong>{path.title}</strong>
                      <span>{path.content}</span>
                    </li>
                  ))}
                </ul>
                <a {...linkProps('/inscripcion')} className="d3-btn d3-btn--gold">
                  Quiero acceso anticipado
                </a>
              </div>
            </div>
          </FadeIn>
        )}

        {(showFullPage || page === 'inscripcion') && (
          <FadeIn as="section" className="d3-offer" id="inscripcion">
            <div className="d3-container d3-offer__inner">
              <ParallaxImage
                src={d3Images.team}
                alt="Equipo docente"
                speed={0.32}
                wrapperClassName="d3-offer__media"
                loading="lazy"
                decoding="async"
              />
              <div className="d3-offer__panel">
                <p className="d3-offer__tag">Precio de lanzamiento</p>
                <h2>Reserve su cupo con tarifa de fundador</h2>
                <p>
                  Los primeros inscritos en cada curso obtienen descuento y acceso
                  prioritario cuando se publiquen los módulos de su área.
                </p>
                <ul className="d3-offer__list">
                  <li>Precio preferencial de preventa</li>
                  <li>Aviso antes del público general</li>
                  <li>Sin pago hasta confirmar apertura del curso</li>
                </ul>
                <form className="d3-offer__form" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="d3-name">Nombre completo</label>
                  <input
                    id="d3-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ingeniero(a)…"
                  />
                  <label htmlFor="d3-course-interest">Curso de interés</label>
                  <select id="d3-course-interest" className="d3-offer__select" defaultValue="">
                    <option value="" disabled>
                      Seleccione un curso
                    </option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="d3-email-offer">Correo profesional</label>
                  <input
                    id="d3-email-offer"
                    type="email"
                    autoComplete="email"
                    placeholder="nombre@empresa.com"
                  />
                  <button type="submit" className="d3-btn d3-btn--gold d3-btn--wide">
                    Reservar mi cupo
                  </button>
                  <p className="d3-offer__legal">
                    Lo contactamos en menos de 24 h hábiles con precio y fecha de inicio.
                  </p>
                </form>
              </div>
            </div>
          </FadeIn>
        )}
      </main>

      <footer className="d3-footer">
        <div className="d3-container d3-footer__inner">
          <Logo width={130} height={40} />
          <p>© {new Date().getFullYear()} Consolidos S.A.S · Cursos de ingeniería civil</p>
        </div>
      </footer>
      <ScrollTopButton />
    </div>
  )
}
