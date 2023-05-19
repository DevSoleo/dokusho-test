const config = require('dotenv').config()
const express = require('express')
const http = require('https')

const socket = require('./backend/socket')
const hearbeat = require('./backend/heartbeat')
const mongodb = require('./backend/database')
const path = require('path')

const app = express()

// Lancement du serveur web
const server = http.createServer(app)

const ENV = process.env.ENV ?? 'production'

const SERVER_PORT = 3000

const MONGO_DB_TIMEOUT = process.env.MONGO_DB_TIMEOUT ?? 2000
const MONGO_DB_HOST = process.env.MONGO_DB_HOST ?? "localhost"

// Tentative de connexion à la base de données
mongodb.connect(`mongodb://${MONGO_DB_HOST}:27017/dokusho`)

if (ENV === 'production') app.use(express.static(path.resolve('./build')))

// Récupération des requêtes entrantes
socket.wait(server)

hearbeat.start(socket.io)

console.log(`Ouvrir (env : ${ENV}) : http://localhost:${process.env.PORT ?? SERVER_PORT}`)

server.listen(SERVER_PORT)

