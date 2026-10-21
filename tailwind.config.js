/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          DEFAULT: '#FAF9F6',
          50: '#FFFFFF',
          100: '#FAF9F6',
          200: '#F4F2EB',
          300: '#E8E5DA',
        },
        navy: {
          DEFAULT: '#17233F',
          dark: '#0D1527',
          light: '#25355A',
          muted: '#4B556D',
        },
        electric: {
          teal: '#00BFA6',
          'teal-dark': '#009E89',
          'teal-light': '#DDF8F3',
          violet: '#7957FF',
          'violet-dark': '#613EEC',
          'violet-light': '#EEE9FF',
          coral: '#FF786B',
          'coral-dark': '#E85F51',
          'coral-light': '#FFECE9',
        },
        lavender: '#EEE9FF',
        aqua: '#DDF8F3',
      },
      fontFamily: {
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        '3d-teal': '0 6px 0 #009380, 0 12px 24px rgba(0, 191, 166, 0.22)',
        '3d-teal-pressed': '0 2px 0 #009380, 0 4px 10px rgba(0, 191, 166, 0.2)',
        '3d-violet': '0 6px 0 #5B38DC, 0 12px 24px rgba(121, 87, 255, 0.22)',
        '3d-violet-pressed': '0 2px 0 #5B38DC, 0 4px 10px rgba(121, 87, 255, 0.2)',
        '3d-coral': '0 6px 0 #D95042, 0 12px 24px rgba(255, 120, 107, 0.22)',
        '3d-coral-pressed': '0 2px 0 #D95042, 0 4px 10px rgba(255, 120, 107, 0.2)',
        'card-elevated': '0 10px 30px -5px rgba(23, 35, 63, 0.07), 0 4px 12px -2px rgba(23, 35, 63, 0.03)',
        'card-hover': '0 20px 40px -8px rgba(23, 35, 63, 0.12), 0 8px 20px -4px rgba(0, 191, 166, 0.08)',
        'glow-teal': '0 0 35px rgba(0, 191, 166, 0.25)',
        'glow-violet': '0 0 35px rgba(121, 87, 255, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
