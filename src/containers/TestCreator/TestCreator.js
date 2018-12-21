import React, { Component } from 'react'
import classes from './TestCreator.css'
import Button from '../../compionents/UI/Button/Button'
import Input from '../../compionents/UI/Input/Input'
import Select from '../../compionents/UI/Select/Select'
// import axios from '../../Axios/axios-test'
import {createControl, validate, validateForm} from '../../MyFrameworkForm/formFramework'
import {connect} from 'react-redux'
import { finishCreateTest, createTestQuestion } from '../../store/actions/actCreateTest';
 


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
            isFormValid: false,
            formControls: createNewFormControls(),
            rightAnswerId: 1
        }

        // console.log(this.state.isFormValid)
    } 

    addQuestion = (event) => {
        event.preventDefault()

        const {question, option1, option2, option3, option4} = this.state.formControls

        const questionItem ={ 
            question: question.value,
            id: this.props.test.length + 1,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {
                    text: option1.value,
                    id: option1.id 
                },
                {
                    text: option2.value,
                    id: option2.id 
                },
                {
                    text: option3.value,
                    id: option3.id 
                },
                {
                    text: option4.value,
                    id: option4.id 
                }
            ]
        }

        this.props.createTestQuestion(questionItem)

        this.setState({
            isFormValid: false,
            formControls: createNewFormControls(),
            rightAnswerId: 1
        })
    }

    createTest = event => {
        event.preventDefault()
        console.log('create from render')
        // console.log(response.data)  
        
        
        this.setState({
            isFormValid: false,
            formControls: createNewFormControls(),
            rightAnswerId: 1
        })
        this.props.finishCreateTest()
        
  
      /*   axios.post('https://react-spa-tests.firebaseio.com/tests.json', this.state.test).then(response => {
            console.log(response)
        }).catch(error =>console.log(error)) */
    }
 
    onSubmitHandler = (event) => {
        event.preventDefault()
    }

    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)


        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })

        // console.log(this.state.isFormValid)
    }

    renderInputs = () => {

        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            // console.log(control)
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


    selectChange = (event) => {
        this.setState({
           rightAnswerId: event.target.value 
        })
    }


    componentDidMount() {

    /*     axios.get('https://react-spa-tests.firebaseio.com/test.json').then(response => {
            console.log(response)
        }) */
    }


    render() { 

        const select =<Select
            label = "Выберете правильный ответ"
            value = {this.state.rightAnswerId}
            onChange = {this.selectChange}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        />

        return ( 
            
            <div className={classes.TestCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form
                        onSubmit = {this.onSubmitHandler}
                    >
                       {this.renderInputs()}

                        {select}
                        <Button
                            type="primary"
                            onClick={this.addQuestion}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createTest}
                            disabled={this.props.test.length === 0}
                        >
                            Создать тест
                        </Button>
                    
                    </form>
                </div>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    return {
        test: state.create.test
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createTestQuestion: item => dispatch(createTestQuestion(item)),
        finishCreateTest: () => dispatch(finishCreateTest())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestCreator);