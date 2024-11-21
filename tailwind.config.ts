import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Circular Std', ...defaultTheme.fontFamily.sans],
        avenir: ['Avenir', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '120%' }],
        'display-2': ['3.25rem', { lineHeight: '120%' }],
        'display-3': ['2.75rem', { lineHeight: '120%' }],
        'header-1': ['2.25rem', { lineHeight: '125%' }],
        'header-2': ['2rem', { lineHeight: '125%' }],
        'header-3': ['1.75rem', { lineHeight: '125%' }],
        'header-4': ['1.5rem', { lineHeight: '125%' }],
        'sub-header-1': ['1.375rem', { lineHeight: '125%' }],
        'sub-header-2': ['1.25rem', { lineHeight: '125%' }],
        'sub-header-3': ['1.125rem', { lineHeight: '125%' }],
        'body-1': ['1rem', { lineHeight: '150%' }],
        'body-2': ['0.875rem', { lineHeight: '150%' }],
        'body-3': ['0.8125rem', { lineHeight: '150%' }],
        'body-4': ['0.75rem', { lineHeight: '150%' }],
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',

      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
