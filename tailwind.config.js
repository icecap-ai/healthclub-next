/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13의 app 디렉토리 사용 시 포함
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  