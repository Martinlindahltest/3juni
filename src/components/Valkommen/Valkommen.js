import React from 'react'
import Antalpar from './Antalpar'
import Startknapp from './Startknapp'
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/memoryActions"
import './Valkommen.css'
import 'bootstrap/dist/css/bootstrap.css';



function Valkommen(props) {

    if(props.memoryApi.apiFetchKlar === false){
        props.hämtafråndatabas()
        //console.log('hej')
      }
    
    let Startknappklar = props.memoryApi.apiFetchKlar

    let containerClass = "border col-6 col-md-3 p-2"
    let BigContainerClass = "border col-12 col-md-6 p-2"
    let FullContainerClass = "border col-12 col-md-12 p-2"



    console.log('Startknappklar', Startknappklar)


    return (
        <div className='Valkommen'>
  <div>{props.memoryApi.apiData[0].apiData}</div>





            <div>

      <div class="container">
        <div class="row">
          <div class={containerClass}>
            <div>ph</div>
          </div>
      
          <div class={BigContainerClass}>
            <div>            <h6>välkommen</h6>
</div>
          </div>
      
      
          <div class={containerClass}>
            <div>ph</div>
          </div>
      
        </div>

{/* Row 1 är slut */}

<div class="row">
          <div class={FullContainerClass}>
            <div>            <Antalpar />
</div>
          </div>
      
    
        </div>

{/* Row 2 är slut */}

<div class="row">
          <div class={containerClass}>
            <div>ph</div>
          </div>
      
          <div class={BigContainerClass}>
            <div>            
              <Startknapp />
            </div>
          </div>
    
      
          <div class={containerClass}>
            <div>ph</div>
          </div>
      
        </div>

{/* Row 4 är slut */}

        
       




        
      </div>     

      </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    //projectPosts: state
    helaState: state,
    memoryApi: state.memoryApi  
  })
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
        hämtafråndatabas: () => {
            dispatch(actionCreator.apiFetch())
        }
    }    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Valkommen)