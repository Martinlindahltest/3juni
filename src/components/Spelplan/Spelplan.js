import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Spelplan.css';
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/memoryActions"
import Kort from './Kort'




 function Spelplan(props) {




let containerClass = "col-6 col-md-3 p-2"
let kortClass = "kort mx-auto"

//vilka par ska skapas?

let apiData = props.memoryApi.apiData
//console.log('apidata', apiData)

let antalKortDettaSpel = props.memoryApi.hurMangaPar * 0.5

let vilkaKortDettaSpel = []

let vilkaKortDettaSpelBlandad =[]

for (let i = 0; i < antalKortDettaSpel; i++) {
  //console.log('nu körs forloopen', )
  vilkaKortDettaSpel.push(props.memoryApi.apiData[i])
}


//blandfunktion

function randomFunc(myArr) {      
  var l = myArr.length, temp, index;  
  while (l > 0) {  
     index = Math.floor(Math.random() * l);  
     l--;  
     temp = myArr[l];          
     myArr[l] = myArr[index];          
     myArr[index] = temp;      
  }    
  return myArr;
} 

let ejblandadarray = vilkaKortDettaSpel

vilkaKortDettaSpelBlandad = randomFunc(ejblandadarray)

for (let i = 0; i < 8-antalKortDettaSpel; i++) {
  //console.log('nu körs forloopen', )
  vilkaKortDettaSpel.push({id: 99, apiData: 99})
}

console.log('vilkaKortDettaSpelBlandad', vilkaKortDettaSpelBlandad)

apiData = vilkaKortDettaSpelBlandad



//array av 1-16
let arrayAv116 = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]

let arrayAv116Blandad = randomFunc(arrayAv116)

let a = arrayAv116Blandad[0]
let b = arrayAv116Blandad[1]
let c = arrayAv116Blandad[2]
let d = arrayAv116Blandad[3]

let e = arrayAv116Blandad[4]
let f = arrayAv116Blandad[5]
let g = arrayAv116Blandad[6]
let h = arrayAv116Blandad[7]

let i = arrayAv116Blandad[8]
let j = arrayAv116Blandad[9]
let k = arrayAv116Blandad[10]
let l = arrayAv116Blandad[11]

let m = arrayAv116Blandad[12]
let n = arrayAv116Blandad[13]
let o = arrayAv116Blandad[14]
let p = arrayAv116Blandad[15]

//blanda array


let Row1 = [apiData[a].apiData, apiData[b].apiData, apiData[c].apiData, apiData[d].apiData]
let Row2 = [apiData[e].apiData, apiData[f].apiData, apiData[g].apiData, apiData[h].apiData]
let Row3 = [apiData[i].apiData, apiData[j].apiData, apiData[k].apiData, apiData[l].apiData]
let Row4 = [apiData[m].apiData, apiData[n].apiData, apiData[o].apiData, apiData[p].apiData]

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