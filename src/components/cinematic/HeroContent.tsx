import { ArrowUpRight, Mail } from 'lucide-react'
import type { PortfolioContent } from '../../i18n/types'
import { FeaturedProjects } from './FeaturedProjects'

interface HeroContentProps {
  content: PortfolioContent
}

export function HeroContent({ content }: HeroContentProps) {
  const { hero, site, featuredProjects, ui } = content

  return (
    <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end overflow-y-auto pb-8 pt-8 md:pb-12 md:pt-12 lg:pt-16">
      <div className="w-full px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <ul
            className="animate-blur-fade-up mb-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs leading-[1.6] tracking-[-0.36px] text-fog-gray sm:mb-6"
            style={{ animationDelay: '200ms' }}
          >
            {hero.metadata.map((item) => (
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>

          <p
            className="animate-blur-fade-up mb-4 font-mono text-xs leading-[1.6] tracking-[-0.36px] text-ash-gray sm:mb-6"
            style={{ animationDelay: '280ms' }}
          >
            {hero.roleLine}
          </p>

          <h1
            className="animate-blur-fade-up font-display text-[clamp(3rem,12vw,7.5rem)] uppercase leading-[0.9] tracking-[-1.44px] text-white"
            style={{ animationDelay: '350ms' }}
          >
            {hero.title}
          </h1>

          <p
            className="animate-blur-fade-up mt-6 max-w-xl text-base font-normal leading-[1.25] tracking-[-0.42px] text-ash-gray"
            style={{ animationDelay: '450ms' }}
          >
            {hero.description}
          </p>

          <div
            className="animate-blur-fade-up mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
            style={{ animationDelay: '550ms' }}
          >
            <a href={hero.ctas.primary.href} className="btn-primary">
              <Mail size={16} strokeWidth={2} />
              {hero.ctas.primary.label}
            </a>
            <a href={hero.ctas.secondary.href} className="btn-ghost">
              {hero.ctas.secondary.label}
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-fog-gray transition-colors hover:text-white"
            >
              {hero.cvLabel}
            </a>
          </div>

          <FeaturedProjects
            label={ui.featuredLabel}
            projects={featuredProjects}
            codeLabel={ui.code}
            liveLabel={ui.live}
          />
        </div>
      </div>
    </div>
  )
}
