const express = require('express')
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')
const routes = express.Router()

routes.post('/ongs', ongController.store)
routes.get('/ongs', ongController.index)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.store)
routes.delete('/incidents/:id', incidentController.destroy)

routes.get('/profile', profileController.index)

routes.post('/sessions', sessionController.store)

module.exports = routes
