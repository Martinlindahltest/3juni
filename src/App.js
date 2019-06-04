import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Testredux from './components/Testredux'


import React, { Component } from 'react'

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
  }
  
}

  
  render() {
    return (
      <div className="App">
        <Testredux />

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto">{this.state.name}</div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"></div>
          </div>
      
        </div>
      </div>     
      </div>
    )
  }
}