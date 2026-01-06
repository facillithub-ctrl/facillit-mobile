/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#07f49e', // Verde da Marca 
          purple: '#42047e', // Roxo da Marca 
          DEFAULT: '#42047e',
        },
        // Estética "Clean White" 
        background: '#ffffff',
        surface: '#f8f9fa', // Um off-white muito sutil para contraste se necessário
        error: '#ef4444',
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