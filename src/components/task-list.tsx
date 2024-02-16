'use client'
import { useEffect, useState } from 'react'

import { useTask } from '@/contexts/useTask'

import { TaskItem } from './task-item'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

interface TaskListProps {
  tabValue: string
}

export function TaskList({ tabValue }: TaskListProps) {
  const { tasks, deleteTask, updateTask, clearTask } = useTask()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-col gap-2">
        <div>
          <Skeleton className="h-12 w-full" />
        </div>
        <div>
          <Skeleton className="h-12 w-full" />
        </div>
        <div>
          <Skeleton className="h-12 w-full" />
        </div>
        <div>
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (tabValue === 'all') {
      return task.status
    } else if (tabValue === 'active') {
      return task.status === 'active'
    } else {
      return task.status === 'complete'
    }
  })

  function handleDelete(taskId: string) {
    deleteTask(taskId)
  }
  function handleUpdate(taskId: string) {
    updateTask(taskId)
  }
  function handleClear() {
    clearTask()
  }

  const completedTasksLength = filteredTasks.filter(
    (task) => task.status === 'complete',
  ).length

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[88px]" />
          <TableHead className="w-[300px]">Task</TableHead>
          <TableHead className="w-28">Date</TableHead>
          <TableHead className="text-center"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TaskItem
          tasks={filteredTasks}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </TableBody>
      {filteredTasks.length > 0 && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="w-auto">
              ({completedTasksLength}) of {filteredTasks.length} tasks completed
            </TableCell>
            <TableCell>
              <Button
                size={'sm'}
                onClick={handleClear}
                disabled={completedTasksLength === 0}
              >
                Limpar
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  )
}
