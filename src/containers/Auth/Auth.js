import React, { Component } from 'react'
import classes from './Auth.css'
import Button from '../../compionents/UI/Button/Button'
import Input from '../../compionents/UI/Input/Input'
import is from 'is_js'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/actAuth'
import ErrorMessage from '../../compionents/UI/Error_message/Error_message'


function validateEmail(email) {
    const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(String(email).toLowerCase());
}


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type_submit: null,
            isFormValid: false,
            error_Mess: '',
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

        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        )
        
        this.setState({
            type_submit: 'autorization',
            error_Mess: 'Неверная пара логин/пароль'        
        })

        this.setState({
            // error_Mess: this.props.error_message(this.state.type_submit).message
        })
         
    } 

    registration = () => {

        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )

        this.setState({
            type_submit: 'registration',
            error_Mess:  'Такой пользователь уже существует'
        })

    }

    submitHandler = (event) => {
        event.preventDefault();
    }
    validateControl(value, validation) {
        if (!validation) {
            return true
        } else {
            let isValid = true

            if (validation.required) {
                isValid = value.trim() !== '' && isValid
                // console.log('required is ', isValid)
            } 
            
            if (validation.email) {
                isValid = validateEmail(value) && isValid
                // console.log('email is ', isValid)
            }
            /* Либо подключаем библиотеку и проверяем email так*/
            if (validation.email) {
                isValid = is.email(value) && isValid
                // console.log('email _js ', isValid)
            } 
            
            if (validation.minLength) {
                isValid = value.length >= validation.minLength && isValid
            }

            return isValid
        }
    }

    onChangeHandler = (event, controlName) => {
        // console.log(`${controlName} :`, event.target.value)
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control


        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({ 
            formControls,
            isFormValid
        })

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
                        <div>
                            <Button 
                                type="success" 
                                onClick={this.autorization}  
                                disabled ={!this.state.isFormValid}                   
                            >
                                Войти в систему
                            </Button>
                            <Button 
                                type="primary"
                                onClick={this.registration}
                                disabled={!this.state.isFormValid}
                            >
                                Зарегистрироваться
                            </Button>
                        </div>
                        
                        {this.props.async_call?<ErrorMessage>
                            {this.state.error_Mess}
                        </ErrorMessage>: null} 
                    </form>
                    
                </div>
            </div> 
        )
    }
}
 
function mapsStateToProps(state) {
    // console.log('asyn_call', state.auth.async_call)
    return {
        async_call: state.auth.async_call
    }
}
 
function mapDispatchToProps(dispatch) {
    return {
       auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}


export default connect(mapsStateToProps, mapDispatchToProps)(Auth)