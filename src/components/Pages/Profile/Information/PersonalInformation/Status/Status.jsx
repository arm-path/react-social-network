import React, {useState, useEffect} from 'react'

import classes from './Status.module.css'


const Status = (props) => {

    let [isEditMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const editStatus = () => {
        console.log('111')
        if (props.profileUrlId) setEditMode(false)
        else setEditMode(true)
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const acceptStatus = () => {
        setEditMode(false)
        if (status) props.updateStatus(status)

    }

    return (
        <div className={classes.container}>
            {!isEditMode
                ?
                <div>
                    <b>Статус:</b> <span onDoubleClick={editStatus}>{props.status || '...'}</span>
                </div>
                :
                <div>

                    <input
                        onBlur={acceptStatus}
                        value={status}
                        onChange={onChangeStatus}
                        type="text"
                    />
                </div>
            }
        </div>
    )
}


export default Status