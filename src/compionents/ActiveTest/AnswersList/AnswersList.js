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
                        onAnswerClick={props.onAnswerClick}
                        rightAnswer={props.rightAnswer ? props.rightAnswer[answer.id]: null}
                    />
                )
            }) } 
        </ul>
    )
}

export default AnswerList 