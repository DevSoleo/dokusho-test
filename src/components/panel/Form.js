import './Panel.css'

export default function Form({children, title}) {
    return (
      <div className="form">
        <span className="title">{ title }</span>
        { children }
      </div>
    )
}