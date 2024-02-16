import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { josefin, monaSans } from '@/components/font'
import { ModeToggle } from '@/components/mode-toggle'
import { PatternBackground } from '@/components/pattern'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'On My List',
  description: 'Todo App List',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefin.variable} ${monaSans.variable}`}
    >
      <body className="h-screen w-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ModeToggle />
          <Toaster richColors position="top-left" />
          <PatternBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
