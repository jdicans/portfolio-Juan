import { en } from './en'
import { es } from './es'
import type { Locale, PortfolioContent } from './types'

const content: Record<Locale, PortfolioContent> = { es, en }

export function getPortfolio(lang: Locale): PortfolioContent {
  return content[lang]
}

export function getAlternateLang(lang: Locale): Locale {
  return lang === 'es' ? 'en' : 'es'
}

export function getLangPath(lang: Locale): string {
  return lang === 'en' ? '/en/' : '/'
}

export function getAlternateUrl(lang: Locale): string {
  return getLangPath(getAlternateLang(lang))
}

export function prefixPath(lang: Locale, hash: string): string {
  const base = lang === 'en' ? '/en' : ''
  return `${base}${hash}`
}

export type { Locale, PortfolioContent } from './types'
