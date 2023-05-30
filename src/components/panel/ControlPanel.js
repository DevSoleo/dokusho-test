import './Panel.css'

export default function ControlPanel({children}) {
  return (
    <div className="control-panel">
      { children }
    </div>
  )
}