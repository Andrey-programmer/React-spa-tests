import React from 'react';
import classes from './Select.css'


const Select = props => {
    const htmlFor = `${props.value}-${Math.random()}`

    // console.log(htmlFor) Тут проверить id при выборе
    
    return (
        <div className={classes.Select}> 
            <label htmlFor={htmlFor}>

            </label>
            <select
               id={htmlFor}
               value={props.value}
               onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            key={option.value + index}
                            value={option.value }
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select