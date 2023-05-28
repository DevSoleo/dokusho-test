const config = require('dotenv').config()
const express = require('express')
const http = require('http')

const socket = require('./backend/socket')
const hearbeat = require('./backend/heartbeat')
const mongodb = require('./backend/database')
const path = require('path')

const ENV = process.env.ENV ?? 'production'
const SERVER_PORT = 3000
const MONGO_DB_HOST = process.env.MONGO_DB_HOST ?? "localhost"

const app = express()

// Lancement du serveur web
const server = http.createServer(app)

// Tentative de connexion à la base de données
mongodb.connect(`mongodb://${MONGO_DB_HOST}:27017/dokusho`)

if (ENV === 'production') app.use(express.static(path.resolve('./build')))

// Récupération des requêtes entrantes
socket.handle(server)

hearbeat.start(socket.io)

console.log(`Ouvrir (env : ${ENV}) : http://localhost:${SERVER_PORT}`)

server.listen(SERVER_PORT)