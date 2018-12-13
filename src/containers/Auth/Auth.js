import React, { Component } from 'react'
import classes from './Auth.css'
import Button from '../../compionents/UI/Button/Button'
import Input from '../../compionents/UI/Input/Input'


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Введите корректный email',
                    valid: false,
                    touched: false, 
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Пароль',
                    errorMessage: 'Введите корректный пароль',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }

                }
            }
         }
    }


    autorization = () => {

    } 

    registration = () => {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }
    
    onChangeHandler = (event, controlName) => {
        console.log(`${controlName} :`, event.target.value)
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Input
                    key={controlName + index}
                    type = {control.type}
                    value = {control.value}
                    touched = {control.touched}
                    valid = {control.valid}
                    label = {control.label}
                    errorMessage = {control.errorMessage}
                    shouldValidate = {!!control.validation}
                    onChange = {(event) => {
                        this.onChangeHandler(event, controlName)
                    }}  
                />
            )
        })
    }

    render() { 
        return ( 
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form 
                        onSubmit={this.submitHandler}
                        className={classes.AuthForm}
                    >
                    {
                        this.renderInputs()
                    }
                   {/*      <Input
                             label="Email"
                        />
                        <Input
                             label="Пароль"
                             errorMessage="test"
                        /> */}
                        <Button 
                            type="success" 
                            onClick={this.autorization}
                        >
                            Войти в систему
                        </Button>
                        <Button 
                            type="primary"
                            onClick={this.registration}
                        >
                            Зарегистрироваться 
                        </Button>
                    </form>
                </div>
            </div> 
        )
    }
}
 
export default Auth;