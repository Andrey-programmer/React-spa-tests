import React from 'react'
import classes from './Error_message.css'

const Error_message = props => {
    
    return (
        <p 
            className={classes.Error_message}
        >
            {props.children}
        </p>
      
    )

}

export default Error_message