import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <p><b>Контакты:</b></p>
            <ul>
                {Object.keys(contacts).map((el)=> {
                    return (
                        <li key={el}><b>{el}</b>:{contacts[el]}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Contacts