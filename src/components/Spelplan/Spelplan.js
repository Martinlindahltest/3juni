import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Spelplan.css';
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/actions"
import Kort from './Kort'




 function Spelplan(props) {

//vilka par ska skapas?

//array av idn

//blanda array

let Row1 = [props.apiData[0].apiData, 2, 3, 4]
let Row2 = [5, 6, 7, 8]
let Row3 = [9, 10, 11, 12]
let Row4 = [13, 14, 15, 16]

    return (
        <div className="Spelplan">
  <div>{props.helaState.project.posts[0].body}</div>
<button onClick={props.hämtafråndatabas}>jag kör dispach</button>
{console.log(props.helaState.project.posts)}


      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row1[0]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row1[1]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row1[2]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row1[3]} /></div>
          </div>
      
        </div>

{/* Row 1 är slut */}

        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row2[0]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row2[1]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row2[2]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
          <div class="kort mx-auto"><Kort id={Row2[3]} /></div>
          </div>
      
        </div>

{/* Row 2 är slut */}
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row3[0]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row3[1]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row3[2]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row3[3]} /></div>
          </div>
      
        </div>
{/* Row 1 är slut */}
        <div class="row">
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row4[0]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row4[1]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
            <div class="kort mx-auto"><Kort id={Row4[2]} /></div>
          </div>
      
          <div class="col-6 col-md-3 border p-2">
          <div class="kort mx-auto"><Kort id={Row4[3]} /></div>
          </div>
      
        </div>
{/* Row 2 är slut */}
       




        
      </div>     

      </div>
    )
}

const mapStateToProps = (state) => ({
  //projectPosts: state
  helaState: state,
  apiData: state.memoryApi.apiData  
})


const mapDispatchToProps = (dispatch) => {
  return {
      hämtafråndatabas: () => {
          dispatch(actionCreator.databas())
      }
  }    
}


export default connect(mapStateToProps, mapDispatchToProps)(Spelplan)