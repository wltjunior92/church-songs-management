'use client'

import Link from 'next/link'

import { Button } from './button'
import { useTheme } from './theme/theme-provider'

export function Header() {
  const { setTheme, theme } = useTheme()

  function handleToggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header className="flex w-full items-center justify-between p-4 border-b shadow bg-neutral-100 dark:bg-neutral-800">
      <strong className="text-2xl">Gestão de Repertório</strong>
      <nav className="flex gap-10 items-center justify-center flex-1">
        <Link href="/">
          <Button variant="ghost">
            <span className="text-lg">Home</span>
          </Button>
        </Link>
        <Link href="/repertorio">
          <Button variant="ghost">
            <span className="text-lg">Repertório</span>
          </Button>
        </Link>
        <Link href="/admin">
          <Button variant="ghost">
            <span className="text-lg">Administração</span>
          </Button>
        </Link>
      </nav>
      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleToggleTheme}
          variant="outline"
          suppressHydrationWarning
        >
          {theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
        </Button>
        <Link href="/auth">
          <Button type="button" variant="default">
            Login
          </Button>
        </Link>
      </div>
    </header>
  )
}
