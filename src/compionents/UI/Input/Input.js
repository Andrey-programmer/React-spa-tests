import React from 'react'
import classes from './Input.css'


function isInvalid({valid, touched, shouldValidate}) {
    
     return  !valid && shouldValidate && touched 
}

const Input = props => {

    const inputType = props.type || 'text'
    const classesInput = [classes.Input]
    const htmlFor = `${inputType} - ${Math.random()}`


    if (isInvalid(props)) {
         classesInput.push(classes.invalid)

        //  console.log(isInvalid(props))
    }

    return (
        <div className = {classesInput.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}  
                id={htmlFor}  
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null
            }
        </div>     
    )
}


export default Input