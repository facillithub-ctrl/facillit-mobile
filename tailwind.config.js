/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aponta para todos os arquivos onde usamos classes do Tailwind
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#07f49e',
          purple: '#42047e',
          DEFAULT: '#42047e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          500: '#6b7280',
          900: '#111827',
        }
      },
      fontFamily: {
        inter: ['Inter_400Regular'],
        'inter-medium': ['Inter_500Medium'],
        'inter-bold': ['Inter_700Bold'],
      },
    },
  },
  plugins: [],
}