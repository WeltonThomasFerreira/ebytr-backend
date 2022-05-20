import { Controller, Model, Task } from '../interfaces'
import { ok, serverError } from '../helpers/httpHelpers'

interface Request {
  query: {
    sort?: string;
  };
}

export default class FindAllTasksController implements Controller<Request> {
  private readonly _model

  constructor (model: Model<Task>) {
    this._model = model
  }

  async handle (req: Request) {
    try {
      const { query } = req
      const response = await this._model.read(query.sort)
      return ok(response)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
