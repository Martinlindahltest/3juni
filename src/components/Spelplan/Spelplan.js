import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Spelplan.css';
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/memoryActions"
import Kort from './Kort'




 function Spelplan(props) {

//vilka par ska skapas?

//array av idn

//blanda array

if(props.memoryApi.apiFetchKlar === false){
  props.hämtafråndatabas()
  //console.log('hej')
}

let containerClass = "col-6 col-md-3 border p-2"
let kortClass = "kort mx-auto"

let apiData = props.memoryApi.apiData

let Row1 = [apiData[0].apiData, apiData[0].apiData, 3, 4]
let Row2 = [5, 6, 7, 8]
let Row3 = [9, 10, 11, 12]
let Row4 = [13, 14, 15, 16]

    return (
        <div className="Spelplan">


      <div class="container">
        <div class="row">
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row1[0]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row1[1]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row1[2]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row1[3]} /></div>
          </div>
      
        </div>

{/* Row 1 är slut */}

        <div class="row">
        <div class={containerClass}>
            <div class={kortClass}><Kort id={Row2[0]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row2[1]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row2[2]} /></div>
          </div>
      
          <div class={containerClass}>
          <div class={kortClass}><Kort id={Row2[3]} /></div>
          </div>
      
        </div>

{/* Row 2 är slut */}
        <div class="row">
        <div class={containerClass}>
            <div class={kortClass}><Kort id={Row3[0]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row3[1]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row3[2]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row3[3]} /></div>
          </div>
      
        </div>
{/* Row 3 är slut */}
        <div class="row">
        <div class={containerClass}>
            <div class={kortClass}><Kort id={Row4[0]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row4[1]} /></div>
          </div>
      
          <div class={containerClass}>
            <div class={kortClass}><Kort id={Row4[2]} /></div>
          </div>
      
          <div class={containerClass}>
          <div class={kortClass}><Kort id={Row4[3]} /></div>
          </div>
      
        </div>
{/* Row 4 är slut */}
       




        
      </div>     

      </div>
    )
}

const mapStateToProps = (state) => ({
  //projectPosts: state
  //helaState: state,
  memoryApi: state.memoryApi  
})


const mapDispatchToProps = (dispatch) => {
  return {
      hämtafråndatabas: () => {
          dispatch(actionCreator.apiFetch())
      }
  }    
}


export default connect(mapStateToProps, mapDispatchToProps)(Spelplan)