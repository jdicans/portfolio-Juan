export type Locale = 'es' | 'en'

export interface NavItem {
  title: string
  label: string
  url: string
}

export interface HeroMetadata {
  text: string
}

export interface HeroCta {
  label: string
  href: string
}

export interface FeaturedProject {
  title: string
  description: string
  image?: string
  tag?: string
  link?: string
  github?: string
}

export interface ExperienceItem {
  date: string
  title: string
  company: string
  location?: string
  description: string
  link?: string
  highlights?: string[]
}

export interface EducationItem {
  date: string
  title: string
  collage: string
  location?: string
  description: string
}

export interface CertificationItem {
  date: string
  title: string
  issuer: string
  description: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface CaseStudy {
  title: string
  subtitle: string
  problem: string
  stack: string
  role: string
  outcome: string
  image: string
  imageAlt: string
  tags: string[]
  link?: string
}

export interface SectionLabels {
  stack: string
  experience: string
  certifications: string
  education: string
  projects: string
  caseStudy: string
  about: string
  contact: string
}

export interface UiStrings {
  learnMore: string
  code: string
  live: string
  featuredLabel: string
  contactEmail: string
  contactLinkedIn: string
  contactGithub: string
  contactCv: string
  contactWhatsapp: string
  contactIntro: string
  caseStudyProblem: string
  caseStudyStack: string
  caseStudyRole: string
  caseStudyOutcome: string
  footerContact: string
  langSwitch: string
  cvLink: string
  openMenu: string
  closeMenu: string
}

export interface PortfolioContent {
  locale: Locale
  site: {
    name: string
    title: string
    description: string
    email: string
    linkedin: string
    github: string
    cv: string
    videoUrl: string
    whatsapp: string | null
    ogImage: string
  }
  navItems: NavItem[]
  hero: {
    metadata: HeroMetadata[]
    roleLine: string
    title: string
    description: string
    ctas: {
      primary: HeroCta
      secondary: HeroCta
    }
    cvLabel: string
  }
  featuredProjects: FeaturedProject[]
  skills: SkillGroup[]
  experience: ExperienceItem[]
  certifications: CertificationItem[]
  education: EducationItem[]
  projects: Project[]
  caseStudy: CaseStudy
  about: {
    imageAlt: string
    tagline: string
    intro: string
    highlights: { label: string; value: string }[]
    focusTitle: string
    focusAreas: string[]
    closing: string
  }
  contact: {
    title: string
    description: string
  }
  sections: SectionLabels
  ui: UiStrings
}
