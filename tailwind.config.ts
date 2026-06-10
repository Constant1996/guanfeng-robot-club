import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          black: '#05070D',
          navy: '#07111F',
          panel: '#0B1628',
          panel2: '#101D32',
          line: 'rgba(125, 211, 252, 0.22)',
          blue: '#1D4ED8',
          cyan: '#22D3EE',
          gold: '#F6B73C',
          orange: '#F97316',
          red: '#EF4444',
          green: '#22C55E',
          ink: '#F8FBFF',
          muted: '#91A4BD',
        },
      },
      boxShadow: {
        glow: '0 18px 44px rgba(34,211,238,0.16)',
        gold: '0 18px 36px rgba(246,183,60,0.22)',
        hard: '0 24px 70px rgba(0,0,0,0.58)',
        hud: '0 0 0 1px rgba(34,211,238,0.16), 0 24px 70px rgba(0,0,0,0.52)',
      },
      fontFamily: {
        display: ['"Microsoft YaHei"', 'sans-serif'],
        body: ['"Microsoft YaHei"', 'sans-serif'],
      },
      backgroundImage: {
        'arena-grid':
          'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
