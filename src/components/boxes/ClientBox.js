import './Boxes.css'

import formatDate from '../../utils/Date'
import ClientApi from '../../api/ClientApi'

export default function ClientBox(props) {
    const statusDisplayName = props.status == 1 ? "Pause" : "Reprendre"

    let label = ''

    if (props.status == 2) {
        label = 'paused'
    } else if (props.status == 1 && props.time <= 0) {
        label = 'no-time'
    }

    return (
    <div className={"box " + label}>
        <span className='username'>{props.username}</span>
        <span className='bank'>Temps : {formatDate(props.time)}</span>

        {
           props.time > 0 ? (<button className='interaction' onClick={() => ClientApi.toggle_pause_user(props.username)}>{ statusDisplayName }</button>) : ''
        }

        <button className='interaction' onClick={() => ClientApi.logout_user(props.username)}>Supprimer</button>
    </div>
    )
}