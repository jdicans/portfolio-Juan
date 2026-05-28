import { ArrowUpRight } from 'lucide-react'
import type { FeaturedProject } from '../../i18n/types'

interface FeaturedProjectsProps {
  label: string
  projects: FeaturedProject[]
  codeLabel: string
  liveLabel: string
}

export function FeaturedProjects({ label, projects, codeLabel, liveLabel }: FeaturedProjectsProps) {
  return (
    <section
      className="animate-blur-fade-up mt-10 border-t border-white/10 pt-8 md:mt-14 md:pt-10"
      style={{ animationDelay: '650ms' }}
      aria-labelledby="featured-heading"
    >
      <div className="mb-6 border-b border-white/10 pb-4">
        <h2
          id="featured-heading"
          className="font-display text-3xl uppercase leading-[0.9] tracking-[-1.44px] text-white md:text-4xl"
        >
          {label}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {projects.map((project) => (
          <article key={project.title} className="featured-card group flex flex-col">
            {project.image && (
              <div className="relative h-36 overflow-hidden sm:h-40">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                {project.tag && (
                  <span className="tag-pill absolute left-4 top-4 bg-black/70 text-white backdrop-blur-sm">
                    {project.tag}
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-1 flex-col p-5">
              {!project.image && project.tag && (
                <span className="tag-pill mb-3 w-fit">
                  {project.tag}
                </span>
              )}
              <h3 className="font-display text-xl uppercase leading-[0.9] tracking-wide text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-[1.25] tracking-[-0.42px] text-fog-gray">
                {project.description}
              </p>
              <footer className="mt-4 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="link-accent inline-flex items-center gap-1"
                  >
                    {liveLabel}
                    <ArrowUpRight size={12} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-fog-gray transition-colors hover:text-white"
                  >
                    {codeLabel}
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
