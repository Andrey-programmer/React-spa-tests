import React, { Component } from 'react'
import Layout from './Components/Layout/Layout'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Test from './containers/Test/Test'
import TestCreator from './containers/TestCreator/TestCreator'
import TestList from './containers/TestList/TestList'
import {autoLogin} from './store/actions/actAuth'
import Auth from './containers/Auth/Auth'
import Logout from './compionents/Logout/Logout'
import { connect } from 'react-redux'



class App extends Component {
  
  componentDidMount () {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/test/:id" component={Test}/>
        <Route path="/" exact component={TestList}/>
        <Redirect to='/'/>
      </Switch>
    )
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/test-creator" component={TestCreator}/>
          <Route path="/test/:id" component={Test}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={TestList}/>
          <Redirect to='/'/>
        </Switch>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>
    )
  }
}

function mapStateToProps(state) { 
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
