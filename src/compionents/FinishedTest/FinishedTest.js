  import React from 'react'
  import classes from './FinishedTest.css'
  

  const FinishedTest = props => {
      return (
          <div className={classes.FinishedTest}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className={'fas fa-times fa-fw ' + classes.error}></i>
                </li>
                <li>
                    <strong>2. </strong>
                    How are you
                    <i className={'fas fa-check fa-fw ' + classes.success}></i>
                </li>
            </ul>
            <p>Вы ответили верно на 4 из 10 вопросов</p>
             <div>
                 <button>Повторить тест!</button>
             </div>
          </div>
      )
  }

  export default FinishedTest