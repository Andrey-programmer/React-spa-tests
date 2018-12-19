import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'
import FinishedTest from '../../compionents/FinishedTest/FinishedTest'
import Loader from '../../compionents/UI/Loader/Loader'
import {connect} from 'react-redux'
import {fetchTestById, testAnswerClick, retryTest} from '../../store/actions/actTest';

class Test extends Component {

  componentDidMount() {
    this.props.fetchTestById(this.props.match.params.id)
  }

  componentWillMount() {
    this.props.retryTest()
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
              onRetry={this.props.retryTest}
            />
          : <ActiveTest 
            test={this.props.test[this.props.activeQuestion]}
            onAnswerClick = {this.props.testAnswerClick}
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
     fetchTestById: id => dispatch(fetchTestById(id)),
     testAnswerClick: answerid => dispatch(testAnswerClick(answerid)),
     retryTest: () => dispatch(retryTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
  