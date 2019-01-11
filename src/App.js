import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Events from './containers/events'
import Event from './containers/event'




class App extends Component {
 
  
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <Route path="/" exact component={Events} />
            <Route path="/events/:id" exact component={Event} />            
          </Fragment>
        </BrowserRouter>
    )
  }
}

export default App
