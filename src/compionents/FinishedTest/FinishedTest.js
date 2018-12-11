  import React from 'react'
  import classes from './FinishedTest.css'
  import Button from '../UI/Button/Button'
  

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
                 <Button onClick={props.onRetry} type={'primary'}>Повторить тест!</Button>
                 <Button type={'success'}>Перейти в список тестов</Button>
             </div>
          </div>
      )
  }

  export default FinishedTest