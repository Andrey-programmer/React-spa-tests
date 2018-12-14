import React, { Component } from 'react'
import classes from './TestCreator.css'
import Button from '../../compionents/UI/Button/Button'
import Input from '../../compionents/UI/Input/Input'
import {createControl} from '../../MyFrameworkForm/formFramework'
 


function createOptionControl(number) {
    return createControl (
        {
            label: `Вариант ${number}`,
            errorMessage: 'Значение не может быть пустым',
            id: number
        }, 
        {required: true}) 
}

function createNewFormControls() {
    return {
        question: createControl(
            {
                label: 'Введите вопрос',
                errorMessage: 'Вопрос не может быть пустым'
            },
            {required: true}
        ),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}


class TestCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            test: [],
            formControls: createNewFormControls()
        }
    }

    addQuestion = () => {

    }

    createTest = () => {

    }
 
    onSubmitHandler = (event) => {
        event.preventDefault()
    }

    changeHandler = (value, controlName) => {
        
    }

    renderInputs = () => {

        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            console.log(control)
            return (
            <React.Fragment key={index}>
                        <Input
                            label={control.label}
                            value={control.value}
                            valid={control.valid}
                            shouldValidate={!!control.validation}
                            touched={control.touched}
                            errorMessage={control.errorMessage}
                            onChange={event => this.changeHandler(event.target.value, controlName)}
                        />
                        {index === 0 ? <hr/> : null}
            </React.Fragment>
            )
        })
       
    }
    render() { 
        return ( 
            <div className={classes.TestCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form
                        onSubmit = {this.onSubmitHandler}
                    >
                       {this.renderInputs()}

                        <select></select>
                        <Button
                            type="primary"
                            onClick={this.addQuestion}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createTest}
                        >
                            Создать тест
                        </Button>
                    
                    </form>
                </div>
            </div>
        );
    }
}
 
export default TestCreator;