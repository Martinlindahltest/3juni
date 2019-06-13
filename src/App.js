import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import * as actionCreator from "./actions/actions"


//<Testredux />



import React from 'react'


 function App(props) {
  console.log(props.projectPosts.project.posts[0].body)

  return (
<div className="App">
  <div>{props.projectPosts.project.posts[0].body}</div>
<button onClick={props.hämtafråndatabas}>jag kör dispach</button>

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"></div>
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

const mapStateToProps = (state) => ({
  projectPosts: state  
})


const mapDispatchToProps = (dispatch) => {
  return {
      hämtafråndatabas: () => {
          dispatch(actionCreator.databas())
      }
  }    
}




export default connect(mapStateToProps, mapDispatchToProps)(App)