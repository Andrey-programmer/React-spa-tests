import React, { Component } from 'react'
import classes from './TestList.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../compionents/UI/Loader/Loader'
import Axios from '../../Axios/axios-test';

class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tests: [],
            loading: true
         }
    }

    renderTests() {
        return this.state.tests.map((test) => {
            return (
                <li 
                    key={test.id}
                >
                    <NavLink to={'/test/' + test.id}>
                        {test.name}
                    </NavLink> 
                </li> 
            )
        })
    }

    async componentDidMount() {

        try {
            const tests = []

            const response = await Axios.get('/tests.json')




            Object.keys(response.data).forEach((id, index) => {
                tests.push({
                    id,
                    name: `Тест №${index + 1}`
                })
            })
            // console.log(response.data)

            this.setState({tests, loading: false})

        } catch(error) {
            console.log(error)
        }
    
    } 

    render() { 
        return ( 
            <div className={classes.TestList}>
                <div>
                    <h1>Список тестов</h1>

                    {this.state.loading 
                        ? <Loader/> 
                        :   <ul>
                                {this.renderTests()}
                            </ul>
                    }
                   
                </div>
            </div>

         );
    }
}
 
export default TestList;