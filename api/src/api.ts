import express from 'express'
import Routes from './routes'

class Api {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.database()
    this.middleware()
    this.routes()
  }

  private database (): void {
    //
  }

  private middleware (): void {
    //
  }

  public routes (): void {
    this.express.use(Routes)
  }
}

export default new Api()
