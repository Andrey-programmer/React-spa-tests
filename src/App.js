import React, { Component } from 'react'
import Layout from './Components/Layout/Layout'
import Test from './containers/Test/Test'


class App extends Component {
  render() {
    return (
     <Layout>
       <Test/>
      </Layout>
    )
  }
}

export default App;
