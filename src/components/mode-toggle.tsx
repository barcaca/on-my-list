'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <Button
      onClick={handleTheme}
      variant={'outline'}
      size={'icon'}
      className="fixed inset-x-1/2 inset-y-7 -translate-x-1/2"
    >
      <Sun className="scale-100 transition-all dark:hidden dark:scale-0" />
      <Moon className="hidden scale-0 transition-all dark:block dark:scale-100" />
    </Button>
  )
}
