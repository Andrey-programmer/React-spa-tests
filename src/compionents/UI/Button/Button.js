import React from 'react'
import classes from './Button.css'

const Button = props => {
    // console.log('Button', props)

    const classButton = [
        classes.Button,
        classes[props.type],
        props.disabled ? classes.error : ''
    ]

    return (
        <button
            onClick={props.onClick}
            className={classButton.join(' ')}
            disabled={props.disabled}
        >   
            {props.children}
        </button>
    )
}

export default Button 