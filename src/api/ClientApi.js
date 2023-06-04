
import { socket } from '../socket';

class ClientApi {
    constructor(socket) {
        this.socket = socket
    }

    create_user(infos) {
        this.socket.emit("ask_for_create_user", infos, (type, reason) => {
            if (type == "success") {
                alert("Succès ! Cet utilisateur a bien été créé !")
            } else if (type == "error") {
                if (reason == "invalid_character") {
                    alert("Erreur ! Le username contient un caractère invalide !")
                } else if (reason == "user_already_exist") {
                    alert("Erreur ! Cet utilisateur existe déjà !")
                }
            }
        })
    }

    toggle_pause_user(username) {
        this.socket.emit("ask_for_toggle_pause", username, (type) => {
            if (type == "error") {
                alert("Erreur ! Cet utilisateur n'existe pas !")
            }
        })
    }

    logout_user(username) {
        this.socket.emit("ask_for_logout_user", username, (type, reason) => {
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

    login_user(username) {
        this.socket.emit("ask_for_login_user", username, (type, reason) => {
            if (type == "error") {
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
}

export default new ClientApi(socket)