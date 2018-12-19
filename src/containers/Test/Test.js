import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'
import FinishedTest from '../../compionents/FinishedTest/FinishedTest'
import Loader from '../../compionents/UI/Loader/Loader'
import {connect} from 'react-redux'
import { fetchTestById } from '../../store/actions/actTest';

class Test extends Component {

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


  componentDidMount() {
    this.props.fetchTestById(this.props.match.params.id)
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
        this.props.loading || !this.props.test  
          ? <Loader/> 
          :  this.props.isFinished 
          ? <FinishedTest
              results={this.props.results}
              test={this.props.test}
              onRetry={this.onRetry}
            />
          : <ActiveTest 
            test={this.props.test[this.props.activeQuestion]}
            onAnswerClick = {this.onAnswerClick}
            testLength={this.props.test.length}
            answerNumber={this.props.activeQuestion + 1}
            rightAnswer={this.props.rightAnswer}
            />
      }
        
      </div>
     </div>
    )
  }
}
  
function mapStateToProps(state) {
  return {
    results: state.test.results, 
    rightAnswer: state.test.rightAnswer,
    activeQuestion: state.test.activeQuestion,
    isFinished: state.test.isFinished,
    test: state.test.test,
    loading: state.test.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
     fetchTestById: id => dispatch(fetchTestById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
  