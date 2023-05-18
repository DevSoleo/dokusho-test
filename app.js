const express = require('express')
const http = require('http')

const socket = require('./backend/socket')
const hearbeat = require('./backend/heartbeat')
const mongodb = require('./backend/database')
const path = require('path');

const app = express()

process.env.MONGO_DB_TIMEOUT = process.env.MONGO_DB_TIMEOUT ?? 2000
process.env.MONGO_DB_HOST = process.env.MONGO_DB_HOST ?? "localhost"

// Tentative de connexion à la base de données
mongodb.connect(`mongodb://${process.env.MONGO_DB_HOST}:27017/dokusho`)

// Lancement du serveur web
const server = http.createServer(app)

app.use(express.static(path.resolve('./build')));

// Récupération des requêtes entrantes
socket.wait(server)

hearbeat.start(socket.io)

server.listen(3000)
