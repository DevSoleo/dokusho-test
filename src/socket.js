import { io } from 'socket.io-client'

const SERVER_PORT = 3000

export const socket = io(`http://localhost:${SERVER_PORT}`).on('connect', () => console.log('Connecté au serveur'))