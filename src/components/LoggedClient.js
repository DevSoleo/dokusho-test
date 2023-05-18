import '../css/LoggedClient.css'

import formatDate from '../utils/Date'

export default function LoggedClient(props) {
    return (
      <div className="logged-client">
        Username : {props.username}<br />
        Time : {formatDate(props.time)}<br />
      </div>
    )
}