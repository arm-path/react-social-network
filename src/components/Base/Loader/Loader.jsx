import React from 'react'

import classes from './Loader.module.css'
import loader from '../../../images/loader.gif'

const Loader = (props) => {
    return (
        <div className={classes.container}>
            <img src={loader} alt="loader"/>
        </div>
    )
}

export default Loader