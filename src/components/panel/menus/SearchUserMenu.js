import MDIcon from "../../others/MDIcon"

export default function SearchUserMenu({go}) {
  const submit = () => {
    // ClientApi.create_user(values)
  }

  return (
    <div>
      
      <div className="back" onClick={() => go('home')}>
        <MDIcon icon_name="arrow_back" />

        <span className='back-text'> Retour</span>
      </div>

      <h3>Trouver un utilisateur</h3>

      <div className="form">
        <input type="text" placeholder="Valeur" id="search_content" />
        <select id="search_by">
          <option selected disabled>Rechercher par</option>
          <option value="username">Username</option>
          <option value="firstname">Prénom</option>
          <option value="lastname">Nom</option>
          <option value="birthday" disabled>Date de naissance</option>
          <option value="phone">Téléphone</option>
          <option value="email">E-mail</option>
        </select>
        
        <button id="submit" onClick={submit}>Rechercher</button>
      </div>
    </div>
  )
}