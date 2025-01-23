/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#ef9e53",
        "medium-orange": "#ec7625",
        "dark-orange": "#d05f27",
        "light-blue": "#00bad2",
        "medium-blue": "#008da8",
        "dark-blue": "#00788b",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'custom-bounce': 'customBounce 1s ease-in-out forwards',
      },
      keyframes: {
        customBounce: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-30px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

