import { FormTask } from './form-task'
import { IconLink } from './icon-link'
import { GitHubIcon } from './icons'

export function Header() {
  return (
    <header className="font-display ">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">On My List</h1>
        <span className="text-2xl dark:text-primary">minimalist To-Do App</span>
        <FormTask />
      </div>
      <div className="mx-auto w-min">
        <IconLink href={''} icon={GitHubIcon}>
          GitHub
        </IconLink>
      </div>
    </header>
  )
}
