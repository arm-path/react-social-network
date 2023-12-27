import React from 'react'
import {useParams} from 'react-router-dom'

import Dialog from '../Dialogs/Dialog/Dialog'
import Message from './Message/Message'
import CreateMessage from './CreateMessage/CreateMessageForm'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    const urlParams = useParams()
    const userId = urlParams.number ? parseInt(urlParams.number) : undefined
    let dialogs = props.dialogs.map(el => <Dialog key={el.id} id={el.id} username={el.username}/>)
    let messages = []

    if (userId) {
        messages = props.messages.filter(el => el.u1_id === userId || el.u2_id === userId)
        messages = messages.map(el => <Message key={el.id} id={el.id} text={el.message} typeMessage={el.typeMessage}/>)
    }

    const sendData = (data) => {
        if (userId) props.writeMessage(userId, data.textNewMessage)
    }

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {userId ?
                    (<div>
                        <div>{messages}</div>
                        <div>
                            {<CreateMessage onSubmit={sendData}/>}
                        </div>
                    </div>) : ''
                }
            </div>
        </div>
    )
}

export default Dialogs