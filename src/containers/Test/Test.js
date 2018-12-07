import React, { Component } from 'react'
import classes from './Test.css'
import ActiveTest from '../../compionents/ActiveTest/ActiveTest'

class Test extends Component {

  state = { 
    test: []
  }

    render() {
      return (
       <div
        className={
            classes.Test
        } >
        <div className={classes.TestWrapper}>
        <h1>Test</h1>
          <ActiveTest />
        </div>
       </div>
      )
    }
  }
  
  export default Test;
  