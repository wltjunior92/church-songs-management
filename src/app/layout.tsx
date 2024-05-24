import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestão de Repertório',
  description: 'IBRB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          storageKey="gestaoDeRepertorio-theme"
          defaultTheme="light"
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
