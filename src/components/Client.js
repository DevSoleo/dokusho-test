import '../css/Client.css'

import formatDate from '../utils/Date'
import { logout_user, toggle_pause_user } from '../socket';

export default function Client(props) {
    return (
    <div className={"client" + " status-" + props.status}>
        <span className='username'>{props.username}</span>
        <span className='bank'>Time : {formatDate(props.time)}</span>

        <button className='interaction' onClick={() => toggle_pause_user(props.username)}>Pause</button>
        <button className='interaction' onClick={() => logout_user(props.username)}>Supprimer</button>
    </div>
    )
}