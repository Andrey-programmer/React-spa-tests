import React, { Component } from 'react'
import classes from './TestCreator.css'
import Button from '../../compionents/UI/Button/Button'
import Input from '../../compionents/UI/Input/Input'


class TestCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    addQuestion = () => {

    }

    createTest = () => {

    }
 
    onSubmitHandler = (event) => {
        event.preventDefault()
    }

    render() { 
        return ( 
            <div className={classes.TestCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form
                        onSubmit = {this.onSubmitHandler}
                    >
                        <Input/>
                        <hr/>
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>

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