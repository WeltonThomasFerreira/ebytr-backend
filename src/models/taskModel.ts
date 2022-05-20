import mongoose from 'mongoose'
import { Task, Model } from '../interfaces'

export default class TaskModel implements Model<Task> {
  private readonly _taskModel = mongoose.model(
    'Task',
    new mongoose.Schema({
      task: String,
      status: String,
      createdAt: { type: Date, default: new Date() },
      __v: { type: Number, select: false }
    })
  )

  async create (task: Task): Promise<Task> {
    const newTask = await this._taskModel.create(task)
    return {
      _id: newTask._id,
      task: newTask.task,
      status: newTask.status,
      createdAt: newTask.createdAt
    }
  }

  read (): Promise<Task[]> {
    throw new Error('Method not implemented.')
  }

  readOne (args: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  update (arg1: string, arg2: object): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }

  delete (args: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }
}
