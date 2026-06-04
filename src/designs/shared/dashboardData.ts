export const dashboardUser = {
  name: 'Ing. María López',
  role: 'Estudiante',
  initials: 'ML',
  email: 'maria.lopez@ingenieria.co',
  company: 'Constructora Andina S.A.S.',
  memberSince: 'Marzo 2024',
} as const

export type EnrolledCourse = {
  id: string
  title: string
  areaLabel: string
  progressPercent: number
  modulesTotal: number
  modulesDone: number
  lastAccess: string
  status: 'in_progress' | 'acquired'
}

export const enrolledCourses: EnrolledCourse[] = [
  {
    id: 'planos-licencia',
    title: 'Planos constructivos listos para trámite',
    areaLabel: 'Construcción',
    progressPercent: 38,
    modulesTotal: 8,
    modulesDone: 3,
    lastAccess: 'Hoy',
    status: 'in_progress',
  },
  {
    id: 'cimentaciones',
    title: 'Cimentaciones y geotecnia para licenciamiento',
    areaLabel: 'Geotecnia',
    progressPercent: 52,
    modulesTotal: 9,
    modulesDone: 5,
    lastAccess: 'Ayer',
    status: 'in_progress',
  },
  {
    id: 'nsr10-estructuras',
    title: 'NSR-10 aplicada: diseño y verificación estructural',
    areaLabel: 'Estructuras',
    progressPercent: 100,
    modulesTotal: 12,
    modulesDone: 12,
    lastAccess: '12 may 2026',
    status: 'acquired',
  },
]

export const profileStats = [
  { label: 'Cursos activos', value: '2' },
  { label: 'Horas registradas', value: '34 h' },
  { label: 'Certificados', value: '1' },
] as const
