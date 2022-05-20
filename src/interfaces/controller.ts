import { Response } from './response'

export interface Controller<Request = null> {
  handle(req?: Request): Promise<Response>;
}
