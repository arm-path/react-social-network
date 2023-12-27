import React from 'react'

import User from './User/User'
import Loader from '../../Base/Loader/Loader'
import Pagination from '../../Base/Pagination/Pagination'
import noImage from '../../../images/react.svg'
import classes from './Users.module.css'


const Users = (props) => {
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>Список Пользователей</h3>
            {props.isLoader ? <Loader/> : null}
            <Pagination page={props.page} totalPages={props.totalPages} changePage={props.changePage}/>
            {props.users.map(el =>
                <User
                    key={el.id} id={el.id}
                    name={el.name} status={el.status}
                    image={el.photos.small ? el.photos.small : noImage}
                    followed={el.followed}
                    followAndUnfollowUser={props.followAndUnfollowUser}
                    followingProgress={props.followingProgress}
                />)}
        </div>)
}

export default Users