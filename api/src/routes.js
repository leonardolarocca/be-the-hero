const express = require('express')
const routes = express.Router()
const { celebrate, Segments, Joi } = require('celebrate')

const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

routes.post('/ongs', ongController.store)

routes.get('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongController.index)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incidentController.index)

routes.post('/incidents', incidentController.store)

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incidentController.destroy)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), profileController.index)

routes.post('/sessions', sessionController.store)

module.exports = routes
