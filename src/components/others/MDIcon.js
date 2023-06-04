import './MDIcon.css'

export default function MDIcon(props) {

    let classes = 'material-icons'

    if (props.cursor == 'pointer') {
        classes += ' cursor-pointer'
    }

    return (
        <span className={ classes }>{ props.icon_name }</span>
    )
}