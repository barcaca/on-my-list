import { ReactNode } from 'react'

import { TaskProvider } from '@/contexts/useTask'

interface HomeLayoutProps {
  children: ReactNode
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return <TaskProvider>{children}</TaskProvider>
}
