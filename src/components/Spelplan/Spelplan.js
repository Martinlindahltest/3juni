import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Spelplan.css';
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/actions"
import Kort from './Kort'



 function Spelplan(props) {
    return (
        <div className="Spelplan">
  <div>{props.projectPosts.project.posts[0].body}</div>
<button onClick={props.hämtafråndatabas}>jag kör dispach</button>

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
        </div>
{/* Row 1 är slut */}
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
        </div>
{/* Row 1 är slut */}
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
        </div>
{/* Row 1 är slut */}
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort /></div>
          </div>
      
        </div>
{/* Row 1 är slut */}




        
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


export default connect(mapStateToProps, mapDispatchToProps)(Spelplan)