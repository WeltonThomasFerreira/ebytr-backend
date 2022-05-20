import * as Joi from 'joi'
import { Service, Task } from '../interfaces'
import { taskBadRequest, statusBadRequest } from '../errors/requestErros'

export default class TaskService implements Service<Task> {
  _bodySchema = Joi.object({
    task: Joi.string().required().min(3).max(50).error(taskBadRequest),
    status: Joi.string()
      .required()
      .valid('pendente', 'em andamento', 'pronto')
      .error(statusBadRequest)
  })

  _statusSchema = Joi.string()
    .required()
    .valid('pendente', 'em andamento', 'pronto')
    .error(new Error('status inválido'))

  public async validateBody (body: unknown): Promise<Error | null> {
    try {
      await this._bodySchema.validateAsync(body)
      return null
    } catch (error) {
      return error as Error
    }
  }

  public async validateStatus (status: string): Promise<Error | null> {
    try {
      await this._statusSchema.validateAsync(status)
      return null
    } catch (error) {
      return error as Error
    }
  }
}
