/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sxm: { max: '640px' }, // Small screen (mobiles)
      mxd: { max: '767px' }, // Medium screen (tablets)
      md: '668px',
      xl: '1024px', // Large screen (laptops)
      '1xl': '1280px', // Extra-large screen (desktops)
      '2xl': '1536px', // Extra-extra-large screen (large displays)
    },
    extend: {
      fontFamily: {
        Antonio: ['Antonio, system-ui'],
        Bellefair: ['Bellefair, system-ui'],
        Metropolis: ['Metropolis, system-ui'],
      },
      colors: {
        'primary-500': '#877EFF',
        'footer-Bg': '#444',
        'secondary-500': '#FFB620',
        blue: '#0095F6',
        'logout-btn': '#FF5A5A',
        'navbar-menu': 'rgba(16, 16, 18, 0.6)',
        'dark-1': '#000000',
        'dark-2': '#121417',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'gray-1': '#697C89',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
      },
    },
  },
  plugins: [],
}
