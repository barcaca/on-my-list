import { Circle, X } from 'lucide-react'

import { Task } from '@/lib/definitions'

import { Button } from './ui/button'
import { TableCell, TableRow } from './ui/table'

interface TaskItemProps {
  tasks: Task[]
  onDelete: (taskId: string) => void
  onUpdate: (taskId: string) => void
}
export function TaskItem({ tasks, onDelete, onUpdate }: TaskItemProps) {
  return (
    <>
      {tasks.map((task) => (
        <TableRow key={task.id}>
          <TableCell className="w-14">
            <Button
              variant={'ghost'}
              onClick={() => onUpdate(task.id)}
              data-checked={false}
            >
              <Circle
                className={` ${task.status === 'complete' ? 'fill-emerald-500 text-emerald-500' : 'fill-amber-500 text-amber-500'}`}
              />
            </Button>
          </TableCell>
          <TableCell className="w-[300px]">{task.task}</TableCell>

          <TableCell className="w-28">{task.date}</TableCell>
          <TableCell className="text-center">
            <Button variant={'ghost'} onClick={() => onDelete(task.id)}>
              <X />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
