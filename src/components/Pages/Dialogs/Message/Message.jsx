import classes from './Message.module.css'


const Message = (props) => {
    let classTypeMessage = props.typeMessage === 'sent' ? classes.sent : classes.inbox
    let classMessage = classes.container + ' ' + classTypeMessage
    return (
        <div className={classMessage}>
            <div>{props.text}</div>
        </div>
    )
}

export default Message