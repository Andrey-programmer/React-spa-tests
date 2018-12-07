import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'

class Test extends Component {

  state = { 
    activeQuestion: 0,
    test: [
      {
        id: 1,
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
      },
      {
        id: 2,
        question: 'В Каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        answers: [
          {
            text: '1700',
            id: 1
          },
          {
            text: '1705',
            id: 2
          },
          {
            text: '1703',
            id: 3
          },
          {
            text: '1803',
            id: 4
          } 
        ]
      }
    ]
  }

  onAnswerClick = (answerId) => {
    console.log('Answer Id: ' + answerId)
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
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
          test={this.state.test[this.state.activeQuestion]}
          onAnswerClick = {this.onAnswerClick}
          testLength={this.state.test.length}
          answerNumber={this.state.activeQuestion + 1}
        />
      </div>
     </div>
    )
  }
}
  
  export default Test;
  