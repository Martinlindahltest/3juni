import React from 'react'
import Antalpar from './Antalpar'
import Startknapp from './Startknapp'
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/actions"


function Valkommen() {
    return (
        <div>
            <h6>välkommen</h6>
            <Antalpar />
            <Startknapp />
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

export default connect(mapStateToProps, mapDispatchToProps)(Valkommen)