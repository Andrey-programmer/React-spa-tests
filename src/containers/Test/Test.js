import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'

class Test extends Component {

  state = { 
    test: [
      {
        answers: [
          {
            text: 'Вопрос 1'
          },
          {
            text: 'Вопрос 2'
          },
          {
            text: 'Вопрос 3'
          },
          {
            text: 'Вопрос 4'
          } 
        ]
      }
    ]
  }

    render() {

      // console.log(this.state.test[0])

      return (
       <div
        className={
            classes.Test
        } >
        <div className={classes.TestWrapper}>
        <h1>Ответьте на все вопросы</h1>
          <ActiveTest test={this.state.test[0]}/>
        </div>
       </div>
      )
    }
  }
  
  export default Test;
  