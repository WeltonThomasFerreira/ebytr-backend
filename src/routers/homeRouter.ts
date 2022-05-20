import { Router, Request, Response } from 'express'
import AddNewTaskController from '../controllers/addNewTaskController'
import FindAllTasksController from '../controllers/findAllTasksController'
import FindTaskByStatusController from '../controllers/findTaskByStatusController'
import TaskService from '../services/taskService'
import TaskModel from '../models/taskModel'

const taskService = new TaskService()
const taskModel = new TaskModel()
const addNewTask = new AddNewTaskController(taskService, taskModel)
const findAllTasks = new FindAllTasksController(taskModel)
const findTaskByStatus = new FindTaskByStatusController(taskService, taskModel)

export default class HomeRouter {
  private _router

  constructor () {
    this._router = Router()
    this.addRoutes()
  }

  private addRoutes () {
    this._router.post('/home', async (req: Request, res: Response) => {
      const { statusCode, body } = await addNewTask.handle(req)
      res.status(statusCode).json(body)
    })

    this._router.get('/home', async (req: Request, res: Response) => {
      const { statusCode, body } = await findAllTasks.handle(req)
      res.status(statusCode).json(body)
    })

    this._router.get('/home/:status', async (req: Request, res: Response) => {
      const { statusCode, body } = await findTaskByStatus.handle(req)
      res.status(statusCode).json(body)
    })
  }

  get router () {
    return this._router
  }
}
