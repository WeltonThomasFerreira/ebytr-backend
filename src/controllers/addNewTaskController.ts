import { Controller, Service, Model, Task } from '../interfaces'
import { created, badRequest, serverError } from '../helpers/httpHelpers'

interface Request {
  body: Task;
}

export default class AddNewTaskController implements Controller<Request> {
  private readonly _service
  private readonly _model

  constructor (service: Service<Task>, model: Model<Task>) {
    this._service = service
    this._model = model
  }

  async handle (req: Request) {
    try {
      const { body } = req
      const error = await this._service.validateBody(body)
      if (error) return badRequest(error)
      const response = await this._model.create(body)
      return created(response)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
