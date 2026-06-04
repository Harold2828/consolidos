export type CourseArea =
  | 'estructuras'
  | 'geotecnia'
  | 'hidraulica'
  | 'transporte'
  | 'construccion'
  | 'ambiental'
  | 'urbanismo'

export type CourseStatus = 'open' | 'soon' | 'acquired' | 'in_progress'

export type Course = {
  id: string
  title: string
  area: CourseArea
  areaLabel: string
  level: 'Fundamentos' | 'Intermedio' | 'Avanzado'
  modules: number
  hours: number
  instructor: string
  instructorRole: string
  status: CourseStatus
  excerpt: string
}

export const areaFilters: { id: CourseArea | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'estructuras', label: 'Estructuras' },
  { id: 'geotecnia', label: 'Geotecnia' },
  { id: 'hidraulica', label: 'Hidráulica' },
  { id: 'transporte', label: 'Transporte' },
  { id: 'construccion', label: 'Construcción' },
  { id: 'ambiental', label: 'Ambiental' },
  { id: 'urbanismo', label: 'Urbanismo' },
]

export const courses: Course[] = [
  {
    id: 'nsr10-estructuras',
    title: 'NSR-10 aplicada: diseño y verificación estructural',
    area: 'estructuras',
    areaLabel: 'Estructuras',
    level: 'Avanzado',
    modules: 12,
    hours: 18,
    instructor: 'Equipo estructuras',
    instructorRole: 'Magíster y especialista en estructuras',
    status: 'acquired',
    excerpt:
      'Criterios de diseño, combinaciones de carga y documentación exigida en Colombia.',
  },
  {
    id: 'cimentaciones',
    title: 'Cimentaciones y geotecnia para licenciamiento',
    area: 'geotecnia',
    areaLabel: 'Geotecnia',
    level: 'Intermedio',
    modules: 9,
    hours: 14,
    instructor: 'Equipo geotecnia',
    instructorRole: 'Especialista en estructuras y suelos',
    status: 'in_progress',
    excerpt: 'Estudios de suelo, zapatas y estabilidad con enfoque normativo local.',
  },
  {
    id: 'planos-licencia',
    title: 'Planos constructivos listos para trámite',
    area: 'construccion',
    areaLabel: 'Construcción',
    level: 'Fundamentos',
    modules: 8,
    hours: 10,
    instructor: 'Equipo dibujo',
    instructorRole: 'Dibujante técnico',
    status: 'open',
    excerpt:
      'Capas, simbología y entregables que exigen curaduría e interventoría.',
  },
  {
    id: 'bim-coordinacion',
    title: 'Coordinación BIM en obra civil',
    area: 'construccion',
    areaLabel: 'Construcción',
    level: 'Intermedio',
    modules: 10,
    hours: 16,
    instructor: 'Equipo BIM',
    instructorRole: 'Modelador BIM',
    status: 'soon',
    excerpt: 'Federación de modelos, cantidades y trazabilidad multidisciplinaria.',
  },
  {
    id: 'apu-programacion',
    title: 'APU, presupuesto y programación de obra',
    area: 'construccion',
    areaLabel: 'Construcción',
    level: 'Intermedio',
    modules: 11,
    hours: 15,
    instructor: 'Equipo gestión',
    instructorRole: 'Presupuestos y programación',
    status: 'soon',
    excerpt: 'Costos directos, cronograma y control vinculado al alcance técnico.',
  },
  {
    id: 'drenaje-urbano',
    title: 'Drenaje pluvial y normativa hidráulica',
    area: 'hidraulica',
    areaLabel: 'Hidráulica',
    level: 'Intermedio',
    modules: 7,
    hours: 11,
    instructor: 'Equipo hidráulica',
    instructorRole: 'Consultoría hidráulica',
    status: 'soon',
    excerpt: 'Conducción, aliviaderos y criterios de diseño en contexto colombiano.',
  },
  {
    id: 'vias-transporte',
    title: 'Diseño de vías y señalización',
    area: 'transporte',
    areaLabel: 'Transporte',
    level: 'Fundamentos',
    modules: 8,
    hours: 12,
    instructor: 'Equipo vías',
    instructorRole: 'Ingeniería de transporte',
    status: 'soon',
    excerpt: 'Geometría vial, capacidad y estándares nacionales de movilidad.',
  },
]

export const instructors = [
  {
    role: 'Dibujante',
    courses: 'Planos y documentación para licencia',
    modules: '2 cursos en catálogo',
  },
  {
    role: 'Magíster en estructuras',
    courses: 'NSR-10 y análisis avanzado',
    modules: 'Ruta estructuras',
  },
  {
    role: 'Especialista en estructuras',
    courses: 'Verificación y geotecnia aplicada',
    modules: 'Casos de diseño local',
  },
  {
    role: 'Modelador BIM',
    courses: 'Coordinación 3D en obra',
    modules: 'Flujo federado',
  },
  {
    role: 'Presupuestos y programación',
    courses: 'APU y control de obra',
    modules: 'Gestión económica',
  },
] as const

export const learningPaths = [
  {
    area: 'Estructuras',
    title: 'Ruta de estructuras',
    content:
      'Aprenda a revisar criterios de diseño, cargas, memoria de cálculo y entregables técnicos para proyectos sometidos a revisión normativa.',
  },
  {
    area: 'Geotecnia',
    title: 'Ruta de geotecnia',
    content:
      'Organice estudios de suelo, cimentaciones, estabilidad y recomendaciones constructivas con enfoque práctico para licenciamiento.',
  },
  {
    area: 'Construcción',
    title: 'Ruta de construcción',
    content:
      'Conecte planos, cantidades, presupuesto, programación y control de obra para mejorar la trazabilidad del proyecto.',
  },
  {
    area: 'BIM y documentación',
    title: 'Ruta BIM y documentación',
    content:
      'Estructure modelos, capas, plantillas y entregables coordinados para equipos técnicos multidisciplinarios.',
  },
] as const
