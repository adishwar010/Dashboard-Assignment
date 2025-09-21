/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0E0F12',
          elevated: '#16181D',
          subtle: '#1C1F26'
        },
        text: {
          DEFAULT: '#E5E7EB',
          muted: '#A3AAB8',
          brand: '#A4B1FF'
        },
        brand: '#8B5CF6',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: [],
};
