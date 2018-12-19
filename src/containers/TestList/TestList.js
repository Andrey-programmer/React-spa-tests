import React, { Component } from 'react'
import classes from './TestList.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../compionents/UI/Loader/Loader'
import {fetchTests} from '../../store/actions/actTest'
import {connect} from 'react-redux'

class TestList extends Component {

    renderTests() {
        return this.props.tests.map((test) => {
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

    componentDidMount() {
        this.props.fetchTests()
    } 

    render() { 
        return ( 
            <div className={classes.TestList}>
                <div>
                    <h1>Список тестов</h1>

                    {this.props.loading && this.props.tests.length !== 0
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
 
function mapStateToProps(state) {
    console.log('state', state)
    return {
        tests: state.test.tests,
        loading: state.test.loading
    }
}

function mapDispatchToProps(dispatch) {
    console.log('dispatch', dispatch)
    return {
        fetchTests: () => dispatch(fetchTests())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestList);