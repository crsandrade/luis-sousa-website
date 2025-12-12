import './globals.css'
import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-exo2'
})

export const metadata: Metadata = {
  title: 'Site de Apresentação Comercial',
  description: 'Apresentação comercial com Next.js, Tailwind e TypeScript',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${exo2.variable} ${exo2.className} relative`}>
        {children}
      </body>
    </html>
  );
}
