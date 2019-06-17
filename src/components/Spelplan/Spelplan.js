import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Spelplan.css';
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/memoryActions"
import Kort from './Kort'




 function Spelplan(props) {




let containerClass = "col-6 col-md-3 border p-2"
let kortClass = "kort mx-auto"

//vilka par ska skapas?

let apiData = props.memoryApi.apiData
//console.log('apidata', apiData)

let antalKortDettaSpel = props.memoryApi.hurMangaPar * 0.5

let vilkaKortDettaSpel = []

for (let i = 0; i < antalKortDettaSpel; i++) {
  //console.log('nu körs forloopen', )
  vilkaKortDettaSpel.push(props.memoryApi.apiData[i])
}

console.log('vilkaKortDettaSpel', vilkaKortDettaSpel)

//apiData = vilkaKortDettaSpel



//array av idn

//blanda array


let Row1 = [apiData[0].apiData, apiData[0].apiData, apiData[1].apiData, apiData[1].apiData]
let Row2 = [apiData[2].apiData, apiData[2].apiData, apiData[3].apiData, apiData[3].apiData]
let Row3 = [apiData[4].apiData, apiData[4].apiData, apiData[5].apiData, apiData[5].apiData]
let Row4 = [apiData[6].apiData, apiData[6].apiData, apiData[7].apiData, apiData[7].apiData]

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
      },
      changeArray: () => {
        dispatch(actionCreator.changeArray())
    }
  }    
}


export default connect(mapStateToProps, mapDispatchToProps)(Spelplan)