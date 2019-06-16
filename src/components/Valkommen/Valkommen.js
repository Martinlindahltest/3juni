import React from 'react'
import Antalpar from './Antalpar'
import Startknapp from './Startknapp'
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/memoryActions"


function Valkommen(props) {

    if(props.memoryApi.apiFetchKlar === false){
        props.hämtafråndatabas()
        //console.log('hej')
      }
    
    let Startknappklar = props.memoryApi.apiFetchKlar

    console.log('Startknappklar', Startknappklar)


    return (
        <div>
  <div>{props.memoryApi.apiData[0].apiData}</div>



            <h6>välkommen</h6>
            <Antalpar />
            <Startknapp />
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