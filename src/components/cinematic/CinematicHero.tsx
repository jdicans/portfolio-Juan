import { useRef } from 'react'
import type { PortfolioContent } from '../../i18n/types'
import { HeroContent } from './HeroContent'
import { Navbar } from './Navbar'

interface CinematicHeroProps {
  content: PortfolioContent
  alternateUrl: string
}

export default function CinematicHero({ content, alternateUrl }: CinematicHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          src={content.site.videoUrl}
          onError={() => {
            if (videoRef.current) videoRef.current.style.display = 'none'
          }}
        />
        <div className="hero-dark-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col gap-16 md:gap-24 lg:gap-32">
        <Navbar content={content} alternateUrl={alternateUrl} />
        <HeroContent content={content} />
      </div>
    </section>
  )
}
