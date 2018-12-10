import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'
import FinishedTest from '../../compionents/FinishedTest/FinishedTest'

class Test extends Component {

  state = { 
    results: {}, //{ [id] : 'success' 'error'}
    rightAnswer: null, // { [id] : 'success' 'error' }
    activeQuestion: 0,
    isFinished: false,
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
    // console.log('Answer Id: ' + answerId)
    if (this.state.rightAnswer) {
      const key = Object.keys(this.state.rightAnswer)[0]
      if (this.state.rightAnswer[key] === 'success') {
         return 
      } 
    }
    const results = this.state.results
    const question = this.state.test[this.state.activeQuestion]
      // console.log('question' , question)
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        rightAnswer: {[answerId]: 'success'},
        results
      })

      setTimeout(() => {
          if (this.isTestFinished()) {
            console.log('Test finished')
            this.setState({
              isFinished: true
            })
          } else {
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              rightAnswer: null
            })
          }      
      }, 1000);
            
    } else {
      results[question.id] = 'error'

      this.setState({
        rightAnswer:{ [answerId]:'error'},
        results
      })
    }
     
   
  }

  isTestFinished() {
    return this.state.test.length === this.state.activeQuestion + 1
  }

  onRetry = () => {
    this.setState({
      activeQuestion: 0,
      rightAnswer: null,
      isFinished: false,
      results: {}
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

      {
        this.state.isFinished 
          ? <FinishedTest
              results={this.state.results}
              test={this.state.test}
              onRetry={this.onRetry}
            />
          : <ActiveTest 
            test={this.state.test[this.state.activeQuestion]}
            onAnswerClick = {this.onAnswerClick}
            testLength={this.state.test.length}
            answerNumber={this.state.activeQuestion + 1}
            rightAnswer={this.state.rightAnswer}
            />
      }
       
      </div>
     </div>
    )
  }
}
  
  export default Test;
  