import React from 'react'

import classes from './Textarea.module.css'


const Textarea = (props) => {
    let errors = props.meta.touched && props.meta.error ? classes.errorElement : ''
    return (
        <div>
            <div>{errors ? <small className={classes.errorText}>{props.meta.error}</small> : ''}</div>
            <textarea {...props.input} {...props.data} className={props.styles + ' ' + errors}/>
        </div>
    )
}

export default Textarea