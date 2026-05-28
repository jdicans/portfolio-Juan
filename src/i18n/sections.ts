import type { Locale } from './types'

export function getSectionIds(lang: Locale) {
  if (lang === 'en') {
    return {
      stack: 'stack',
      experience: 'experience',
      certifications: 'certifications',
      education: 'education',
      projects: 'projects',
      caseStudy: 'case-study',
      about: 'about',
      contact: 'contact',
    }
  }
  return {
    stack: 'stack',
    experience: 'experiencia',
    certifications: 'certificaciones',
    education: 'educacion',
    projects: 'proyectos',
    caseStudy: 'case-study',
    about: 'sobre-mi',
    contact: 'contacto',
  }
}
