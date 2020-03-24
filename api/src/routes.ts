import { Router } from 'express'

class Routes {
  public Router: Router

  public constructor() {
    this.Router = Router()
    this.setRoutes()    
  }

  private setRoutes (): void {
    this.Router.get('/', async (req, res) => {
      return res.send({
        status: 'Teste!'
      })
    })
  }

}

export default new Routes().Router