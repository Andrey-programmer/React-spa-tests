import React from 'react';
import classes from './ActiveTest.css'


const ActiveTest = props => (
    <div
        className={classes.ActiveTest}
    >
        <p className={classes.Question}>
            <span>
                <strong>2. </strong>
                Как дела?
            </span>
            <small>4 из 12</small>
        </p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
)

export default ActiveTest

