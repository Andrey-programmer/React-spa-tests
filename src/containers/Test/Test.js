import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'
import FinishedTest from '../../compionents/FinishedTest/FinishedTest'
import Axios from '../../Axios/axios-test'
import Loader from '../../compionents/UI/Loader/Loader';

class Test extends Component {

  state = { 
    results: {}, //{ [id] : 'success' 'error'}
    rightAnswer: null, // { [id] : 'success' 'error' }
    activeQuestion: 0,
    isFinished: false,
    test: [],
    loading: true
  }

  onAnswerClick = (answerId) => {
    // console.log('Answer Id: ' + answerId)
    // console.log(this.state)
    if (this.state.rightAnswer) {
      const key = Object.keys(this.state.rightAnswer)[0]
      if (this.state.rightAnswer[key] === 'success') {
         return 
      } 
    }
    const results = this.state.results
    const question = this.state.test[this.state.activeQuestion]
      console.log('question' , question.rightAnswerId, answerId)
    if (parseInt(question.rightAnswerId) === answerId) {
      console.log('Всё верно!')
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


  async componentDidMount() {

    try {
      const response = await Axios.get(`/tests/${this.props.match.params.id}.json`)
      
      const test = response.data

      this.setState({
        test, 
        loading: false,
        rightAnswer: test.rightAnswer
      })

      // console.log(test) 

    } catch(error) {
      console.log(error)
    }
    
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
        this.state.loading 
          ? <Loader/> 
          :  this.state.isFinished 
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
  