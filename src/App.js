import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Events from './containers/events'





class App extends Component {
 
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path="/" exact component={Events} />
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
