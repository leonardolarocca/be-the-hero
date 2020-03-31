const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { errors } = require('celebrate')

const api = express()

api.use(cors())
api.use(express.json())
api.use(routes)
api.use(errors())

module.exports = api
