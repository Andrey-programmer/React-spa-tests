import React, { Component } from 'react'
import Layout from './Components/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Test from './containers/Test/Test'
import TestCreator from './containers/TestCreator/TestCreator'
import TestList from './containers/TestList/TestList'
import Auth from './containers/Auth/Auth'


class App extends Component {
  render() {
    return (
     <Layout>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/test-creator" component={TestCreator}/>
          <Route path="/test/:id" component={Test}/>
          <Route path="/" component={TestList}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
