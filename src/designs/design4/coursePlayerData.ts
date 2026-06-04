export type Lesson = {
  id: string
  title: string
  durationMin: number
  completed?: boolean
  current?: boolean
}

export type Module = {
  id: string
  title: string
  lessons: Lesson[]
}

export const playerCourse = {
  id: 'planos-licencia',
  title: 'Planos constructivos listos para trámite',
  areaLabel: 'Construcción',
  progressPercent: 38,
} as const

export const playerUser = {
  name: 'Ing. María López',
  role: 'Estudiante',
  initials: 'ML',
} as const

export const playerModules: Module[] = [
  {
    id: 'm1',
    title: 'Módulo 1 · Entregables y normativa',
    lessons: [
      { id: 'l1-1', title: 'Bienvenida al curso', durationMin: 6, completed: true },
      { id: 'l1-2', title: '¿Qué exige la curaduría en Colombia?', durationMin: 14, completed: true },
      {
        id: 'l1-3',
        title: 'Lista de verificación de planos antes del trámite',
        durationMin: 18,
        completed: false,
        current: true,
      },
      { id: 'l1-4', title: 'Casos de rechazo frecuentes', durationMin: 12, completed: false },
    ],
  },
  {
    id: 'm2',
    title: 'Módulo 2 · Capas y simbología',
    lessons: [
      { id: 'l2-1', title: 'Organización de capas CAD/BIM', durationMin: 16, completed: false },
      { id: 'l2-2', title: 'Simbología estructural y arquitectónica', durationMin: 20, completed: false },
      { id: 'l2-3', title: 'Plantillas reutilizables', durationMin: 11, completed: false },
    ],
  },
  {
    id: 'm3',
    title: 'Módulo 3 · Interventoría y cierre',
    lessons: [
      { id: 'l3-1', title: 'Respuesta a observaciones', durationMin: 15, completed: false },
      { id: 'l3-2', title: 'Entrega final y archivo maestro', durationMin: 9, completed: false },
    ],
  },
]

export const currentLesson = playerModules[0].lessons.find((l) => l.current)!
