import React from 'react';
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'


const AnswerList = props => {
    return (
        <ul className={classes.AnswersList}>
            { props.answers.map((answer, index) => {
                return (
                    <AnswerItem 
                        key={index}
                        answer={answer}
                    />
                )
            }) } 
        </ul>
    )
}

export default AnswerList 