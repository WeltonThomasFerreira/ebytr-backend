import * as Express from 'express'
import { Router } from 'express'
import connectToDatabase from './connection'

export default class App {
  private readonly _app

  constructor () {
    this._app = Express()
    this._app.use(Express.json())
  }

  public addRouter (router: Router) {
    this._app.use(router)
  }

  public startServer (port: string) {
    connectToDatabase()
    this._app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
  }
}
