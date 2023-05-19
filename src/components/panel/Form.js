
export default function Form({children, title}) {
    return (
      <div className="form">
        { title }
        <br />
        { children }
        <button onClick={() => socket.emit()}>Valider</button>
      </div>
    )
}