import type { PortfolioContent } from './types'

const email = 'juandiegocalleg@gmail.com'

export const en: PortfolioContent = {
  locale: 'en',
  site: {
    name: 'NUBE',
    title: 'Nube — Full Stack Web Developer',
    description:
      'Portfolio of Juan Diego Calleg (Nube). Full stack web development, UX/UI, and impactful projects from Medellín, Colombia.',
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
    { title: 'Stack', label: 'stack', url: '/en/#stack' },
    { title: 'Experience', label: 'experience', url: '/en/#experience' },
    { title: 'Certifications', label: 'certifications', url: '/en/#certifications' },
    { title: 'Education', label: 'education', url: '/en/#education' },
    { title: 'Projects', label: 'projects', url: '/en/#projects' },
    { title: 'About', label: 'about', url: '/en/#about' },
    { title: 'Contact', label: 'contact', url: '/en/#contact' },
  ],
  hero: {
    metadata: [
      { text: 'Open to work' },
      { text: '3+ years experience' },
      { text: 'Medellín, Colombia' },
    ],
    roleLine: 'Web Developer at Roda · formerly EstratecLabs',
    title: 'Build Apps. Ship Products.',
    description:
      'Full stack web developer and UX/UI designer. I build applications with Python, React, and Next.js, connecting frontend, backend, and user experience.',
    ctas: {
      primary: { label: 'Get in touch', href: `mailto:${email}` },
      secondary: { label: 'View projects', href: '/en/#projects' },
    },
    cvLabel: 'My CV',
  },
  featuredProjects: [
    {
      title: 'Roda',
      description:
        'Electric mobility landing for LatAm — my first freelance project; strengthened the brand for investors.',
      image: '/projects/roda.png',
      tag: 'UX/UI',
      link: '/en/#case-study',
    },
    {
      title: 'Encorely',
      description:
        'Mobile app to find concert companions based on musical taste — Expo and .NET.',
      image: '/projects/encorely.png',
      tag: 'Expo',
      link: '/en/#projects',
    },
    {
      title: 'Bytte',
      description: 'Booking software — React, Next.js, FastAPI, and SQL.',
      image: '/projects/Dashboard.png',
      tag: 'Full stack',
      link: '/en/#projects',
    },
    {
      title: 'Vet Consultant',
      description: 'Platform for clinical cases, patients, and veterinary appointments.',
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
      label: 'Design',
      items: ['Figma', 'UX/UI', 'Illustrator', 'Photoshop'],
    },
    {
      label: 'Data',
      items: ['Pandas', 'Matplotlib', 'Power BI', 'Data analysis'],
    },
  ],
  experience: [
    {
      date: '2026 – Present',
      title: 'Junior Web Developer & UX/UI',
      company: 'Roda',
      location: 'Medellín, Colombia',
      description:
        'I develop and maintain web applications with Python and React. I joined as a freelancer on the corporate landing and now work on product and UX/UI.',
      highlights: [
        'Roda landing: brand research, narrative, and design aimed at investors',
        'Frontend–backend integration with Python and React on live products',
        'UX/UI, performance, and usability improvements on key flows',
      ],
    },
    {
      date: '2025 – 2026',
      title: 'Full Stack Developer & Web Designer',
      company: 'EstratecLabs',
      location: 'Medellín, Colombia',
      description:
        'Built web applications and digital solutions with React, Next.js, Node.js, Express, and JavaScript across frontend and backend.',
      highlights: [
        'UX/UI design with consistent visual identity per product',
        'API and database integration on full stack projects',
        'Iterative delivery in agile environments',
      ],
    },
    {
      date: '2025',
      title: 'Web Developer',
      company: 'Sitios Webs LLC',
      location: 'U.S. (Remote)',
      description:
        'Built custom web solutions with PHP, Laravel, React, and JavaScript in an agile environment, delivering optimized responsive sites.',
      highlights: [
        'Corporate sites and e-commerce with PHP/Laravel and React stack',
        'UX and performance optimization for U.S. clients',
      ],
    },
    {
      date: '2025',
      title: 'IT Project Management & Analysis',
      company: 'Sincenso',
      location: 'Medellín, Colombia',
      description:
        'Advised on IT project planning and execution, optimizing resources through feasibility analysis and strategic improvement proposals.',
      highlights: [
        'Aligned IT initiatives with business goals',
        'Agile and hybrid methodologies in project management',
      ],
    },
    {
      date: '2024-2025',
      title: 'Web Developer & Graphic Designer',
      company: 'Freelancer',
      location: 'Medellín, Colombia',
      description:
        'Built responsive websites with React, Next.js, and WordPress, integrating UX/UI and visual identity with Figma, Illustrator, and Photoshop.',
    },
    {
      date: 'Jan–Jun 2024',
      title: 'Data Analyst (6 months)',
      company: 'Comfenalco (Education Sector)',
      location: 'Medellín, Colombia',
      description:
        'Analyzed customer requests to identify service quality patterns. Automated analysis with Python, Pandas, and Matplotlib.',
      highlights: [
        'Automated reporting that reduced manual analysis time',
        'Actionable insights to improve customer service',
      ],
    },
  ],
  certifications: [
    {
      date: '2024',
      title: 'Data Analytics Certification',
      issuer: 'Google & Comfenalco',
      description:
        'Data processing and analysis with Python, Pandas, and Matplotlib to generate actionable insights.',
    },
    {
      date: '2024',
      title: 'Workplace Socio-Emotional Skills',
      issuer: 'International Youth Foundation',
      description:
        'Effective communication, teamwork, critical thinking, and adaptability.',
    },
    {
      date: '2022-2023',
      title: 'Software Development Technician',
      issuer: 'SENA',
      description:
        'Technical training in application development, data structures, interfaces, and databases.',
    },
    {
      date: '2019',
      title: 'Computational Thinking',
      issuer: 'Universidad EAFIT',
      description: 'Theoretical workshops on app development and maker culture.',
    },
  ],
  education: [
    {
      date: '2024-2028',
      title: 'Software Engineering',
      collage: 'Tecnológico de Antioquia',
      location: 'Medellín, Colombia',
      description:
        'Design, development, and maintenance of technology solutions. Agile methods, software architecture, and project management.',
    },
    {
      date: '2019',
      title: 'Computational Thinking Workshop – App Development',
      collage: 'Universidad EAFIT',
      location: '',
      description: 'Computational thinking and application development.',
    },
    {
      date: '2019',
      title: 'Computational Thinking Workshop – Makers',
      collage: 'Universidad EAFIT',
      location: '',
      description: 'Computational thinking and maker culture.',
    },
  ],
  projects: [
    {
      title: 'Roda — Corporate landing',
      description:
        'First project with Roda as a freelancer: landing for electric mobility financing in LatAm, focused on strengthening the brand for investors and users.',
      image: '/projects/roda.png',
      tags: ['React', 'Next.js', 'UX/UI', 'Tailwind CSS'],
      link: '/en/#case-study',
    },
    {
      title: 'Encorely',
      description:
        'Mobile app connecting people with similar musical tastes to find companions for concerts and events. Expo frontend; C# and .NET backend.',
      image: '/projects/encorely.png',
      tags: ['Expo', 'React Native', 'C#', '.NET'],
    },
    {
      title: 'Bytte Booking Software',
      description:
        'Booking platform with React and Next.js on the frontend, Python with FastAPI on the backend, and SQL database.',
      image: '/projects/Dashboard.png',
      tags: ['React', 'Next.js', 'Python', 'FastAPI', 'SQL'],
    },
    {
      title: 'Anomaly website react',
      description:
        'Corporate site for Anomaly Studio agency. Built with React and Tailwind CSS.',
      github: 'https://github.com/AlejoDec/Anomaly-website-react?tab=readme-ov-file',
      link: 'https://anomalystudio.com.co/',
      image: '/projects/anomaly.png',
      tags: ['React', 'Tailwind CSS'],
    },
    {
      title: 'Vet Consultant',
      description:
        'Platform for clinical cases, patients, and veterinary appointments.',
      github: 'https://github.com/jdicans/consultor-veterinario',
      image: '/projects/veterinaria.png',
      tags: ['Next.js', 'Tailwind CSS'],
    },
    {
      title: 'KTX Custom Glass',
      description: 'Corporate website for a custom glass company in the U.S.',
      link: 'https://ktxcustomglass.com/',
      image: '/projects/ktx.png',
      tags: ['WordPress', 'React'],
    },
    {
      title: 'SitioWebs',
      description: 'Institutional page for a web development and branding agency.',
      link: 'https://sitiowebs.com/',
      image: '/projects/sitiowebs.png',
      tags: ['React', 'PHP', 'Laravel'],
    },
    {
      title: 'Chic Custom Cakes',
      description: 'E-commerce for a custom bakery with a visual, mobile-first focus.',
      link: 'https://chiccustomcakes.com/',
      image: '/projects/chiccustomcakes.png',
      tags: ['WordPress', 'Tailwind CSS'],
    },
    {
      title: 'Valorar Eficaz',
      description: 'Corporate landing page for an appraisal company.',
      link: 'https://valorareficaz.com/',
      image: '/projects/valorar.png',
      tags: ['WordPress', 'Tailwind CSS'],
    },
    {
      title: 'ZonaWork',
      description: 'Coworking-style platform for shared spaces and management.',
      link: 'https://zonawork.co/',
      image: '/projects/zonawork.png',
      tags: ['React', 'Tailwind CSS'],
    },
  ],
  caseStudy: {
    title: 'Roda',
    subtitle: 'Corporate landing · electric mobility LatAm',
    problem:
      'Roda needed a digital presence that communicated trust and value before investor conversations, while connecting with delivery workers and electric mobility users.',
    stack: 'React, Next.js, Tailwind CSS, and conversion-focused UX/UI design.',
    role: 'Freelancer (first project): brand research, information architecture, visual design, and landing development. The project led to my ongoing role on the team.',
    outcome:
      'Landing aligned with financial inclusion and electric mobility narrative; stronger brand perception and continued work with Roda on web development and product.',
    image: '/projects/roda.png',
    imageAlt: 'Roda landing — electric mobility financing in LatAm',
    tags: ['React', 'Next.js', 'UX/UI', 'Branding'],
    link: 'https://roda.co',
  },
  about: {
    imageAlt: 'Juan Diego Calleg (Nube)',
    tagline: 'I build digital products that feel right and work well.',
    intro:
      "I'm Juan Diego Calleg — Nube — a web developer at Roda and Software Engineering student at Tecnológico de Antioquia. I joined Roda as a freelancer on their corporate landing; today I'm on the team building with Python, React, and UX/UI on live products.",
    highlights: [
      { label: 'Location', value: 'Medellín, CO' },
      { label: 'Experience', value: '3+ years' },
      { label: 'Currently', value: 'Roda' },
      { label: 'Education', value: 'Software Eng.' },
    ],
    focusTitle: 'What I focus on',
    focusAreas: [
      'Full stack web development',
      'UX/UI and interface design',
      'Mobile apps (Expo)',
      'APIs and backends',
      'Data analysis',
    ],
    closing:
      "Previously at EstratecLabs, Sitios Webs LLC, and freelance work for agencies and international clients. I'm driven by products with impact — like the Roda landing for investors or Encorely, the app to find concert companions based on your music. I'm looking for teams that value design judgment, maintainable code, and continuous learning.",
  },
  contact: {
    title: "Let's work together",
    description:
      'Reach out for freelance projects, full-time opportunities, or collaborations. I typically reply within 48 hours.',
  },
  sections: {
    stack: 'Stack',
    experience: 'Experience',
    certifications: 'Certifications',
    education: 'Education',
    projects: 'Projects',
    caseStudy: 'Case study',
    about: 'About',
    contact: 'Contact',
  },
  ui: {
    learnMore: 'Learn more',
    code: 'Code',
    live: 'Live',
    featuredLabel: 'Featured',
    contactEmail: 'Email',
    contactLinkedIn: 'LinkedIn',
    contactGithub: 'GitHub',
    contactCv: 'CV',
    contactWhatsapp: 'WhatsApp',
    contactIntro: 'Direct links',
    caseStudyProblem: 'Problem',
    caseStudyStack: 'Stack',
    caseStudyRole: 'My role',
    caseStudyOutcome: 'Outcome',
    footerContact: 'Contact',
    langSwitch: 'ES',
    cvLink: 'CV',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
}
