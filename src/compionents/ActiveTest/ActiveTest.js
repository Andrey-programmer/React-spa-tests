import React from 'react';
import classes from './ActiveTest.css'
import AnswersList from './AnswersList/AnswersList'


const ActiveTest = props => {
    // console.log(props)
    return (
        <div
            className={classes.ActiveTest}
        >
            <p className={classes.Question}>
                <span>
                    <strong>2. </strong>
                    {props.test.question}
                </span>
                <small>4 из 12</small>
            </p>
        <AnswersList 
                answers={props.test.answers}
                onAnswerClick={props.onAnswerClick} 
            />
        </div>
    )
}

export default ActiveTest

