import ClientApi from "../../../api/ClientApi"
import MDIcon from "../../others/MDIcon"

export default function CreateUserMenu({go}) {
  const submit = () => {
    const fields_ids = ['username', 'firstname', 'lastname', 'birthday', 'phone', 'email']
    let values = []

    // create a for loop that will iterate over the fields_ids array and push the value of each field to the values array
    for (const e of fields_ids) {
      values.push(document.getElementById(e).value)
    }
    console.log(values)

    ClientApi.create_user(values)
  }

  return (
    <div>
      
      <div className="back" onClick={() => go('home')}>
        <MDIcon icon_name="arrow_back" />

        <span className='back-text'> Retour</span>
      </div>

      <h3>Nouvel utilisateur</h3>

      <div className="form">
        <input type="text" placeholder="Username" id="username" />
        <input type="text" placeholder="Prénom" id="firstname" />
        <input type="text" placeholder="Nom" id="lastname" />
        <input type="date" id="birthday" />
        <input type="text" placeholder="Téléphone" id="phone" />
        <input type="email" placeholder="E-mail" id="email" />
        
        <button id="submit" onClick={submit}>Créer un utilisateur</button>
      </div>
    </div>
  )
}