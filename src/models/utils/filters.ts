import { Task } from '../../interfaces'

export const sortByAlpha = (tasks: Task[]) => {
  return tasks.sort((a, b) => a.task.localeCompare(b.task))
}

export const sortByNew = (tasks: Task[]) => {
  return tasks.sort((a, b) => {
    const c = b.createdAt as Date
    const d = a.createdAt as Date
    return c.getTime() > d.getTime() ? 1 : -1
  })
}
