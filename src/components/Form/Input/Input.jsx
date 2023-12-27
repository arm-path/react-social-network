import React from 'react'

import classes from './Input.module.css'

const Input = ({input, meta, type = 'text', label, styles}) => {

    const errorStyle = meta.touched && meta.error ? classes.errorElement : ''

    return (
        <>
            {meta.touched && meta.error ? <div><small className={classes.errorText}>{meta.error}</small></div>: ''}
            <input {...input} type={type} placeholder={label} className={styles + ' ' + errorStyle}/>
        </>
    )
}

export default Input