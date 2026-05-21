/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#071013',
        panel: '#0d1b1f',
        mint: '#38f2b4',
        cyan: '#54d8ff',
        amber: '#f8c76c',
        coral: '#ff7f6e',
      },
      boxShadow: {
        glow: '0 0 50px rgba(56, 242, 180, 0.18)',
      },
    },
  },
  plugins: [],
};
