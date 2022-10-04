const express = require('express')
const path = require('path')

const server = express()

const plantRoute = require('./routes/edible_plants')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/plants', plantRoute)

module.exports = server
