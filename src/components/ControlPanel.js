import '../css/ControlPanel.css'

export default function LoggedClient({children}) {
    return (
      <div className="control-panel">
        { children }
      </div>
    )
}