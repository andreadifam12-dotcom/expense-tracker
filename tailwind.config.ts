/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8EC',
        parchment: '#FAF3DC',
        rose: '#D4798A',
        mauve: '#C9637A',
        sage: '#7A9E7E',
        'sage-dark': '#5C8C6A',
        forest: '#2C4A35',
        brown: '#5C3D2E',
        gold: '#C9A84C',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        'display-italic': ['Playfair Display Italic', 'serif'],
        serif: ['Lora', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
        mono: ['Courier Prime', 'monospace'],
      },
      boxShadow: {
        watercolor: '0 8px 16px rgba(212, 121, 138, 0.15), 0 4px 8px rgba(92, 140, 106, 0.1)',
        'watercolor-lg': '0 16px 32px rgba(212, 121, 138, 0.2), 0 8px 16px rgba(92, 140, 106, 0.15)',
        'watercolor-sm': '0 4px 8px rgba(212, 121, 138, 0.1), 0 2px 4px rgba(92, 140, 106, 0.08)',
      },
      borderRadius: {
        watercolor: '45% 55% 52% 48% / 48% 45% 55% 52%',
        'watercolor-lg': '40% 60% 55% 45% / 45% 50% 50% 55%',
      },
      backgroundImage: {
        parchment: "url('data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' fill='%23FDF8EC' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}