import { Controller, Service, Model, Task } from '../interfaces'
import { ok, badRequest, serverError } from '../helpers/httpHelpers'

interface Request {
  params: { status?: string };
  query: {
    sort?: string;
  };
}

export default class FindTaskByStatusController implements Controller<Request> {
  private readonly _service
  private readonly _model

  constructor (service: Service<Task>, model: Model<Task>) {
    this._service = service
    this._model = model
  }

  async handle (req: Request) {
    try {
      const { status } = req.params
      const { sort } = req.query
      const error = await this._service.validateStatus(status as string)
      if (error) return badRequest(error)
      const response = await this._model.readByStatus(status as string, sort)
      return ok(response)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
