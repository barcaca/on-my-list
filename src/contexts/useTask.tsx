'use client'

import { produce } from 'immer'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'sonner'

import { Task } from '@/lib/definitions'

interface TaskItemType {
  tasks: Task[]
  createTask: (task: string) => void
  deleteTask: (taskId: string) => void
  updateTask: (taskId: string) => void
  clearTask: () => void
}

interface TaskProviderProps {
  children: ReactNode
}

const TaskContext = createContext({} as TaskItemType)

const TASK_ITEMS_STORAGE_KEY = '@onMyList:TaskItems@v1'
export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== 'undefined') {
      const storedTasks = localStorage.getItem(TASK_ITEMS_STORAGE_KEY)
      if (storedTasks) {
        return JSON.parse(storedTasks)
      } else {
        return []
      }
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(TASK_ITEMS_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function createTask(newTask: string) {
    const newTaskData = produce(tasks, (draft) => {
      draft.push({
        id: crypto.randomUUID(),
        task: newTask,
        status: 'active',
        date: new Date().toISOString().split('T')[0],
      })
    })

    setTasks(newTaskData)
    toast.success('Task created successfully!')
  }

  function deleteTask(taskId: string) {
    const newTaskData = produce(tasks, (draft) => {
      const existingTask = tasks.findIndex((task) => task.id === taskId)
      draft.splice(existingTask, 1)
    })
    setTasks(newTaskData)
    toast.error('Task deleted successfully!')
  }

  function updateTask(taskId: string) {
    const newTaskData = produce(tasks, (draft) => {
      const existingTask = tasks.findIndex((task) => task.id === taskId)
      const currentStatus = draft[existingTask].status
      draft[existingTask].status =
        currentStatus === 'active' ? 'complete' : 'active'
    })
    setTasks(newTaskData)
    toast.info('Task updated successfully!')
  }

  function clearTask() {
    const newTaskData = produce(tasks, (draft) => {
      const incompleteTasks = draft.filter((task) => task.status !== 'complete')
      return incompleteTasks
    })

    setTasks(newTaskData)
    toast.warning('Task cleared successfully!')
  }
  return (
    <TaskContext.Provider
      value={{ tasks, createTask, deleteTask, updateTask, clearTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)
