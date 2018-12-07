import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'

class Test extends Component {

  state = { 
    test: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          {
            text: 'Черный',
            id: 1
          },
          {
            text: 'Синий',
            id: 2
          },
          {
            text: 'Красный',
            id: 3
          },
          {
            text: 'Зеленый',
            id: 4
          } 
        ]
      }
    ]
  }

  onAnswerClick = (answerId) => {
    console.log('Answer Id: ' + answerId)
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
        <ActiveTest 
          test={this.state.test[0]}
          onAnswerClick = {this.onAnswerClick}
        />
      </div>
     </div>
    )
  }
}
  
  export default Test;
  