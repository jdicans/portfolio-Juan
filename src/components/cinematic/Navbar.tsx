import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { PortfolioContent } from '../../i18n/types'
import { MobileMenu } from './MobileMenu'

interface NavbarProps {
  content: PortfolioContent
  alternateUrl: string
}

export function Navbar({ content, alternateUrl }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { site, navItems, ui } = content
  const homeHref = content.locale === 'en' ? '/en/' : '/'

  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:min-h-[80px] sm:px-6 md:min-h-[88px] md:px-12 lg:min-h-[96px]">
        <a
          href={homeHref}
          className="animate-blur-fade-up font-display text-3xl tracking-wide text-white md:text-4xl"
          style={{ animationDelay: '0ms' }}
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.url}
              className="animate-blur-fade-up rounded-nav px-4 py-3 text-sm font-normal tracking-[-0.42px] text-ash-gray transition-colors hover:bg-white/10 hover:text-white"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={alternateUrl}
            className="animate-blur-fade-up rounded-nav px-4 py-3 text-sm text-fog-gray transition-colors hover:text-white"
            style={{ animationDelay: '300ms' }}
          >
            {ui.langSwitch}
          </a>
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-blur-fade-up hidden md:inline-flex"
            style={{ animationDelay: '350ms' }}
          >
            {ui.cvLink}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-blur-fade-up hidden text-sm text-fog-gray transition-colors hover:text-white sm:inline-block"
            style={{ animationDelay: '400ms' }}
          >
            GitHub
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex h-11 w-11 items-center justify-center rounded-nav text-ash-gray transition-colors hover:bg-white/10 hover:text-white xl:hidden"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={menuOpen}
          >
            <Menu
              size={22}
              className={`absolute transition-all duration-300 ${
                menuOpen ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
              }`}
            />
            <X
              size={22}
              className={`absolute transition-all duration-300 ${
                menuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        content={content}
        alternateUrl={alternateUrl}
      />
    </header>
  )
}
