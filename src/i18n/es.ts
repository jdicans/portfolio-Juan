import type { PortfolioContent } from './types'

const email = 'juandiegocalleg@gmail.com'

export const es: PortfolioContent = {
  locale: 'es',
  site: {
    name: 'NUBE',
    title: 'Nube — Desarrollador Web Full Stack',
    description:
      'Portafolio de Juan Diego Calleg (Nube). Desarrollo web full stack, UX/UI y proyectos con impacto desde Medellín, Colombia.',
    email,
    linkedin: 'https://www.linkedin.com/in/juandiegocalleg/',
    github: 'https://github.com/jdicans',
    cv: 'https://drive.google.com/file/d/1tZPGkOKP7ya2OQEeO7xeU5JforQ7ufO_/view?usp=sharing',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4',
    whatsapp: null,
    ogImage: '/porfolio.webp',
  },
  navItems: [
    { title: 'Stack', label: 'stack', url: '/#stack' },
    { title: 'Experiencia', label: 'experiencia', url: '/#experiencia' },
    { title: 'Certificaciones', label: 'certificaciones', url: '/#certificaciones' },
    { title: 'Educación', label: 'educacion', url: '/#educacion' },
    { title: 'Proyectos', label: 'proyectos', url: '/#proyectos' },
    { title: 'Sobre mí', label: 'sobre-mi', url: '/#sobre-mi' },
    { title: 'Contacto', label: 'contacto', url: '/#contacto' },
  ],
  hero: {
    metadata: [
      { text: 'Disponible para trabajar' },
      { text: '+3 años de experiencia' },
      { text: 'Medellín, Colombia' },
    ],
    roleLine: 'Desarrollador web en Roda · ex EstratecLabs',
    title: 'Build Apps. Ship Products.',
    description:
      'Desarrollador web full stack y diseñador UX/UI. Construyo aplicaciones con Python, React y Next.js, integrando frontend, backend y experiencia de usuario.',
    ctas: {
      primary: { label: 'Contactar', href: `mailto:${email}` },
      secondary: { label: 'Ver proyectos', href: '/#proyectos' },
    },
    cvLabel: 'Mi CV',
  },
  featuredProjects: [
    {
      title: 'Roda',
      description:
        'Landing de movilidad eléctrica en LatAm — primer proyecto freelance; mejoró la marca ante inversionistas.',
      image: '/projects/roda.png',
      tag: 'UX/UI',
      link: '/#case-study',
    },
    {
      title: 'Encorely',
      description:
        'App móvil para encontrar compañía en conciertos según tu gusto musical — Expo y .NET.',
      image: '/projects/encorely.png',
      tag: 'Expo',
      link: '/#proyectos',
    },
    {
      title: 'Bytte',
      description: 'Software de reservas — React, Next.js, FastAPI y SQL.',
      image: '/projects/Dashboard.png',
      tag: 'Full stack',
      link: '/#proyectos',
    },
    {
      title: 'Consultor Veterinario',
      description: 'Plataforma para casos clínicos, pacientes y citas veterinarias.',
      image: '/projects/veterinaria.png',
      tag: 'Next.js',
      github: 'https://github.com/jdicans/consultor-veterinario',
    },
  ],
  skills: [
    {
      label: 'Frontend',
      items: ['React', 'Next.js', 'Expo', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      label: 'Backend',
      items: ['Python', 'FastAPI', 'C#', '.NET', 'Node.js', 'Express', 'PHP', 'Laravel', 'SQL', 'MySQL'],
    },
    {
      label: 'Diseño',
      items: ['Figma', 'UX/UI', 'Illustrator', 'Photoshop'],
    },
    {
      label: 'Datos',
      items: ['Pandas', 'Matplotlib', 'Power BI', 'Análisis de datos'],
    },
  ],
  experience: [
    {
      date: '2026 – Actualidad',
      title: 'Desarrollador Web Junior & UX/UI',
      company: 'Roda',
      location: 'Medellín, Colombia',
      description:
        'Participo en el desarrollo y mantenimiento de aplicaciones web con Python y React. Ingresé como freelancer con la landing corporativa y hoy colaboro en producto y UX/UI.',
      highlights: [
        'Landing Roda: investigación de marca, narrativa y diseño orientados a inversionistas',
        'Integración frontend–backend con Python y React en productos activos',
        'Mejoras de UX/UI, rendimiento y usabilidad en flujos clave',
      ],
    },
    {
      date: '2025 – 2026',
      title: 'Full Stack Developer & Web Designer',
      company: 'EstratecLabs',
      location: 'Medellín, Colombia',
      description:
        'Desarrollé aplicaciones web y soluciones digitales con React, Next.js, Node.js, Express y JavaScript, participando en frontend y backend.',
      highlights: [
        'Diseño de interfaces UX/UI con identidad visual coherente por producto',
        'Integración de APIs y bases de datos en proyectos full stack',
        'Entrega iterativa en metodologías ágiles',
      ],
    },
    {
      date: '2025',
      title: 'Desarrollador Web',
      company: 'Sitios Webs LLC',
      location: 'EE. UU. (Remoto)',
      description:
        'Desarrollé soluciones web personalizadas con PHP, Laravel, React y JavaScript en entorno ágil, creando sitios optimizados y responsivos.',
      highlights: [
        'Sitios corporativos y e-commerce con stack PHP/Laravel y React',
        'Optimización de UX y rendimiento en entregas para clientes en EE. UU.',
      ],
    },
    {
      date: '2025',
      title: 'Gestión y Análisis de Proyectos TI',
      company: 'Sincenso',
      location: 'Medellín, Colombia',
      description:
        'Asesoré en la planificación y ejecución de proyectos TI, optimizando recursos mediante análisis de viabilidad y propuestas estratégicas de mejora.',
      highlights: [
        'Alineación de iniciativas TI con objetivos de negocio',
        'Metodologías ágiles e híbridas en gestión de proyectos',
      ],
    },
    {
      date: '2024-2025',
      title: 'Desarrollador Web y Diseñador Gráfico',
      company: 'Freelancer',
      location: 'Medellín, Colombia',
      description:
        'Desarrollé sitios web responsivos con React, Next.js y WordPress, integrando UX/UI e identidad visual con Figma, Illustrator y Photoshop.',
    },
    {
      date: 'Enero-junio 2024',
      title: 'Analista de Datos (6 meses)',
      company: 'Comfenalco (Sector Educación)',
      location: 'Medellín, Colombia',
      description:
        'Analicé PQRs para identificar patrones en la calidad del servicio. Automatizé análisis con Python, Pandas y Matplotlib.',
      highlights: [
        'Automatización de reportes que redujo tiempos manuales de análisis',
        'Insights accionables para mejorar la atención al usuario',
      ],
    },
  ],
  certifications: [
    {
      date: '2024',
      title: 'Certificación en Análisis de Datos',
      issuer: 'Google & Comfenalco',
      description:
        'Procesamiento y análisis de datos con Python, Pandas y Matplotlib para generar insights accionables.',
    },
    {
      date: '2024',
      title: 'Competencias Socioemocionales para el Entorno Laboral',
      issuer: 'International Youth Foundation',
      description:
        'Comunicación efectiva, trabajo en equipo, pensamiento crítico y adaptación al cambio.',
    },
    {
      date: '2022-2023',
      title: 'Técnico en Desarrollo y Programación de Software',
      issuer: 'SENA',
      description:
        'Formación técnica en desarrollo de aplicaciones, estructuras de datos, interfaces y bases de datos.',
    },
    {
      date: '2019',
      title: 'Pensamiento Computacional',
      issuer: 'Universidad EAFIT',
      description: 'Talleres teóricos en desarrollo de apps y cultura maker.',
    },
  ],
  education: [
    {
      date: '2024-2028',
      title: 'Ingeniería de Software',
      collage: 'Tecnológico de Antioquia',
      location: 'Medellín, Colombia',
      description:
        'Diseño, desarrollo y mantenimiento de soluciones tecnológicas. Metodologías ágiles, arquitectura de software y gestión de proyectos.',
    },
    {
      date: '2019',
      title: 'Taller Teórico de Pensamiento Computacional – Desarrollo de Apps',
      collage: 'Universidad EAFIT',
      location: '',
      description: 'Pensamiento computacional y desarrollo de aplicaciones.',
    },
    {
      date: '2019',
      title: 'Taller Teórico de Pensamiento Computacional – Makers',
      collage: 'Universidad EAFIT',
      location: '',
      description: 'Pensamiento computacional y cultura maker.',
    },
  ],
  projects: [
    {
      title: 'Roda — Landing corporativa',
      description:
        'Primer proyecto con Roda como freelancer: landing para financiar movilidad eléctrica en LatAm, con foco en fortalecer la marca ante inversionistas y usuarios.',
      image: '/projects/roda.png',
      tags: ['React', 'Next.js', 'UX/UI', 'Tailwind CSS'],
      link: '/#case-study',
    },
    {
      title: 'Encorely',
      description:
        'App móvil para conectar personas con gustos musicales similares y encontrar compañía para conciertos y eventos. Frontend con Expo; backend en C# y .NET.',
      image: '/projects/encorely.png',
      tags: ['Expo', 'React Native', 'C#', '.NET'],
    },
    {
      title: 'Bytte Software de reservar',
      description:
        'Software de reserva con React, Next.js en frontend y Python con FastAPI en backend, base de datos SQL.',
      image: '/projects/Dashboard.png',
      tags: ['React', 'Next.js', 'Python', 'FastAPI', 'SQL'],
    },
    {
      title: 'Anomaly website react',
      description:
        'Página empresarial de la agencia Anomaly Studio. Desarrollada con React y Tailwind CSS.',
      github: 'https://github.com/AlejoDec/Anomaly-website-react?tab=readme-ov-file',
      link: 'https://anomalystudio.com.co/',
      image: '/projects/anomaly.png',
      tags: ['React', 'Tailwind CSS'],
    },
    {
      title: 'Consultor Veterinario',
      description:
        'Plataforma para gestión de casos clínicos, pacientes y citas veterinarias.',
      github: 'https://github.com/jdicans/consultor-veterinario',
      image: '/projects/veterinaria.png',
      tags: ['Next.js', 'Tailwind CSS'],
    },
    {
      title: 'KTX Custom Glass',
      description: 'Sitio web corporativo para empresa de vidrios personalizados en EE.UU.',
      link: 'https://ktxcustomglass.com/',
      image: '/projects/ktx.png',
      tags: ['WordPress', 'React'],
    },
    {
      title: 'SitioWebs',
      description: 'Página institucional para agencia de desarrollo web y branding.',
      link: 'https://sitiowebs.com/',
      image: '/projects/sitiowebs.png',
      tags: ['React', 'PHP', 'Laravel'],
    },
    {
      title: 'Chic Custom Cakes',
      description: 'E-commerce para pastelería personalizada con enfoque visual y móvil.',
      link: 'https://chiccustomcakes.com/',
      image: '/projects/chiccustomcakes.png',
      tags: ['WordPress', 'Tailwind CSS'],
    },
    {
      title: 'Valorar Eficaz',
      description: 'Landing page corporativa para empresa de avalúos.',
      link: 'https://valorareficaz.com/',
      image: '/projects/valorar.png',
      tags: ['WordPress', 'Tailwind CSS'],
    },
    {
      title: 'ZonaWork',
      description: 'Plataforma tipo coworking para espacios compartidos y gestión.',
      link: 'https://zonawork.co/',
      image: '/projects/zonawork.png',
      tags: ['React', 'Tailwind CSS'],
    },
  ],
  caseStudy: {
    title: 'Roda',
    subtitle: 'Landing corporativa · movilidad eléctrica LatAm',
    problem:
      'Roda necesitaba una presencia digital que comunicara confianza y propuesta de valor antes de conversaciones con inversionistas, al tiempo que conectaba con repartidores y usuarios de movilidad eléctrica.',
    stack: 'React, Next.js, Tailwind CSS y diseño UX/UI orientado a conversión.',
    role: 'Freelancer (primer proyecto): investigación de marca, arquitectura de información, diseño visual y desarrollo de la landing. El proyecto abrió la puerta a mi rol actual en el equipo.',
    outcome:
      'Landing alineada con la narrativa de inclusión financiera y movilidad eléctrica; mejor percepción de marca y continuidad del trabajo con Roda en desarrollo web y producto.',
    image: '/projects/roda.png',
    imageAlt: 'Landing de Roda — financiamiento de movilidad eléctrica en LatAm',
    tags: ['React', 'Next.js', 'UX/UI', 'Branding'],
    link: 'https://roda.co',
  },
  about: {
    imageAlt: 'Juan Diego Calleg (Nube)',
    tagline: 'Construyo productos digitales que se sienten bien y funcionan bien.',
    intro:
      'Soy Juan Diego Calleg — Nube — desarrollador web en Roda y estudiante de Ingeniería de Software en el Tecnológico de Antioquia. Empecé en Roda como freelancer con su landing corporativa; hoy formo parte del equipo trabajando con Python, React y diseño UX/UI en productos reales.',
    highlights: [
      { label: 'Ubicación', value: 'Medellín, CO' },
      { label: 'Experiencia', value: '+3 años' },
      { label: 'Actualmente', value: 'Roda' },
      { label: 'Formación', value: 'Ing. Software' },
    ],
    focusTitle: 'En qué me enfoco',
    focusAreas: [
      'Desarrollo web full stack',
      'UX/UI y diseño de interfaces',
      'Apps móviles (Expo)',
      'APIs y backends',
      'Análisis de datos',
    ],
    closing:
      'Antes estuve en EstratecLabs, Sitios Webs LLC y proyectos freelance para agencias y clientes internacionales. Me motivan los productos con impacto — como la landing de Roda para inversionistas o Encorely, la app para encontrar compañía en conciertos según tu música. Busco equipos que valoren criterio de diseño, código mantenible y aprendizaje continuo.',
  },
  contact: {
    title: '¿Trabajamos juntos?',
    description:
      'Escríbeme para proyectos freelance, oportunidades full time o colaboraciones. Respondo en menos de 48 horas.',
  },
  sections: {
    stack: 'Stack',
    experience: 'Experiencia',
    certifications: 'Certificaciones',
    education: 'Educación',
    projects: 'Proyectos',
    caseStudy: 'Case study',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  ui: {
    learnMore: 'Saber más',
    code: 'Code',
    live: 'Live',
    featuredLabel: 'Destacados',
    contactEmail: 'Email',
    contactLinkedIn: 'LinkedIn',
    contactGithub: 'GitHub',
    contactCv: 'CV',
    contactWhatsapp: 'WhatsApp',
    contactIntro: 'Enlaces directos',
    caseStudyProblem: 'Problema',
    caseStudyStack: 'Stack',
    caseStudyRole: 'Mi rol',
    caseStudyOutcome: 'Resultado',
    footerContact: 'Contacto',
    langSwitch: 'EN',
    cvLink: 'CV',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
}
