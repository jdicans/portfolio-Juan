import type { PortfolioContent } from '../../i18n/types'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  content: PortfolioContent
  alternateUrl: string
}

export function MobileMenu({ open, onClose, content, alternateUrl }: MobileMenuProps) {
  const { site, navItems, ui } = content

  return (
    <div
      className={`border-t border-white/10 bg-black transition-all duration-300 xl:hidden ${
        open
          ? 'pointer-events-auto max-h-[85vh] overflow-y-auto opacity-100'
          : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
      }`}
    >
      <nav className="flex flex-col px-4 py-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.url}
            onClick={onClose}
            className="rounded-nav border-b border-white/5 py-4 text-sm text-ash-gray transition-colors last:border-0 hover:bg-white/10 hover:text-white"
          >
            {item.title}
          </a>
        ))}
        <a
          href={alternateUrl}
          onClick={onClose}
          className="rounded-nav py-4 text-sm text-fog-gray transition-colors hover:text-white"
        >
          {ui.langSwitch}
        </a>
      </nav>
      <div className="flex gap-6 border-t border-white/10 px-4 py-5 text-sm text-fog-gray">
        <a href={site.cv} target="_blank" rel="noopener noreferrer" onClick={onClose} className="hover:text-white">
          {ui.cvLink}
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" onClick={onClose} className="hover:text-white">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" onClick={onClose} className="hover:text-white">
          LinkedIn
        </a>
      </div>
    </div>
  )
}
