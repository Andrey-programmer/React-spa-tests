import React from 'react'
import classes from './AnswerItem.css'


const AnswerItem = props => {

    const nowClass = [classes.AnswerItem]

    if (props.rightAnswer) {
        nowClass.push(classes[props.rightAnswer])
    }
    return (
        <li 
            className={nowClass.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem