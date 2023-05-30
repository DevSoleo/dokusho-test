import './Boxes.css'

import ClientApi from '../../api/ClientApi'

export default function LoginBox() {
  function promptUsername() {
    const username = prompt("Username :")
    
    if (username) {
      ClientApi.login_user(username)
    }
  }

  return (
    <div className="box login-box" onClick={() => {promptUsername()}}>
      <span>+</span>
    </div>
  )
}