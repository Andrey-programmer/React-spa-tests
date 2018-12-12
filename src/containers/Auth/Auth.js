import React, { Component } from 'react'
import classes from './Auth.css'
import Button from '../../compionents/UI/Button/Button'


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    autorization = () => {

    }

    registration = () => {

    }

    submitHandler = (event) => {
        event.preventDefault();
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
                        <input type="text"/>
                        <input type="text"/>
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