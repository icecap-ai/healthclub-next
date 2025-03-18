// app/layout.js

import './globals.css' // Tailwind 디렉티브가 들어있는 글로벌 CSS 임포트

export const metadata = {
  title: 'HealthClub App',
  description: '헬스클럽 공유 플랫폼',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
