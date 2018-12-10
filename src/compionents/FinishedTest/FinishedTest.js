  import React from 'react'
  import classes from './FinishedTest.css'
  

  const FinishedTest = props => {

    const successCount = Object.keys(props.results).reduce((total, key)=> {
        if  (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    

      return (
          <div className={classes.FinishedTest}>
            <ul>
                {
                    props.test.map((testItem, index) => {

                        console.log(props.results[testItem.id])
                        const classAnswered = [
                            'fa fw',
                            props.results[testItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[testItem.id]]
                        ]

                         return (
                             <li key={index}>
                                <strong>{index + 1}</strong>.&nbsp;  {testItem.question}
                                <i className={classAnswered.join(' ')}/>
                            </li>
                             
                         )
                    })
                }
            </ul>
            <p>Вы ответили верно на {successCount} из {props.test.length} вопросов</p>
             <div>
                 <button onClick={props.onRetry}>Повторить тест!</button>
             </div>
          </div>
      )
  }

  export default FinishedTest