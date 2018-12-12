import React, { Component } from 'react'
import classes from './TestList.css'
import {NavLink} from 'react-router-dom'

class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderTests() {
        return [1, 2, 3].map((test, index) => {
            return (
                <li 
                    key={index}
                >
                    <NavLink to={'/test/' + test}>
                        Тест {test}
                    </NavLink> 
                </li>
            )
        })
    }

    render() { 
        return ( 
            <div className={classes.TestList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderTests()}
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default TestList;