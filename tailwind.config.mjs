/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'canvas-ice': '#000000',
        'midnight-ink': '#ffffff',
        'paper-white': '#141414',
        'fog-gray': '#737373',
        'ash-gray': '#d4d4d4',
        'faint-mist': 'rgba(255,255,255,0.06)',
        'deep-smoke': '#0c0c0c',
        'accent-violet': '#8b5cf6',
        'accent-blue': '#6366f1',
        'accent-muted': '#c4b5fd',
        'action-green': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '32px',
        btn: '8px',
        nav: '12px',
        hero: '64px',
      },
      letterSpacing: {
        'body-sm': '-0.42px',
        subheading: '-0.72px',
        'display-sm': '-1.44px',
      },
      boxShadow: {
        accent: '0 0 24px rgba(139, 92, 246, 0.35)',
      },
      keyframes: {
        blurFadeUp: {
          from: {
            opacity: '0',
            filter: 'blur(12px)',
            transform: 'translateY(24px)',
          },
          to: {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'blur-fade-up': 'blurFadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
