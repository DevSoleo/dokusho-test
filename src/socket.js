import { io } from 'socket.io-client'

export const socket = io('http://localhost:3000')

socket.on('connect', () => console.log('Connecté au serveur'))

export function toggle_pause_user(username) {
    socket.emit("ask_for_toggle_pause", username, (type) => {
        if (type == "error") {
            alert("Erreur ! Cet utilisateur n'existe pas !")
        }
    })
}

export function logout_user(username) {
    socket.emit("ask_for_logout_user", username, (type, reason) => {
        if (type == "success") {
            alert(`L'utilisateur '${username}' a été déconnecté !`)
        } else if (type == "error") {
            if (reason == "already_connected") {
                alert(`Erreur ! '${username}' est déjà connecté !`)
            } else if (reason == "user_doesnt_exist") {
                alert("Erreur ! Cet utilisateur n'existe pas !")
            }
        }
    })
}

export function login_user(username) {
    socket.emit("ask_for_login_user", username, (type, reason) => {
        if (type == "success") {
        } else if (type == "error") {
            if (reason == "no_time_remaining") {
                alert(`Erreur ! '${username}' n'a pas de temps restant !`)
            } else if (reason == "already_connected") {
                alert(`Erreur ! '${username}' est déjà connecté !`)
            } else if (reason == "user_doesnt_exist") {
                alert("Erreur ! Cet utilisateur n'existe pas !")
            }
        }
    })
}