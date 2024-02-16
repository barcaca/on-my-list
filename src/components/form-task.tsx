'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTask } from '@/contexts/useTask'

import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

const formSchema = z.object({
  task: z.string().min(3, {
    message: 'Task needs to be at least 3 characters',
  }),
})

type FormInputSchema = z.infer<typeof formSchema>

export function FormTask() {
  const { createTask } = useTask()
  const form = useForm<FormInputSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  })
  function handleTask(data: FormInputSchema) {
    createTask(data.task)
    form.reset()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleTask)}>
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <div className="relative flex gap-4">
                <FormLabel className="sr-only">Create a new todo...</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Create a new to-do..."
                    {...field}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <Button type="submit" title="Add Task Button">
                  <Plus />
                </Button>
              </div>
              <FormMessage />

              <FormDescription className="text-sm/6 text-black dark:text-white">
                Who needs a To-Do app, anyway? On My List is so intuitive you
                might just forget you have one. Beautiful design, effortless
                organization.
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
