import React from 'react'
import classes from './MenuToggle.css'


const MenuToggle = props => {
    
    const classMenu = [
        classes.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        classMenu.push('fa-times')
        classMenu.push(classes.open)
    } else {
        classMenu.push('fa-bars')
    }

    console.log(classes.MenuToggle)
    return (
        <i
            className={classMenu.join(' ')}
            onClick={props.onToggle}
        />
    )
}


export default MenuToggle