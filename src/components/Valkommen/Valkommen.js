import React from 'react'
import Antalpar from './Antalpar'
import Startknapp from './Startknapp'
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/actions"


function Valkommen(props) {
    
    if(props.helaState.project.posts[0].body === 'Luke Skywalker'){

    }
    else {
        props.hämtafråndatabas()

    }
    let Startknappklar = props.memoryApi.apiFetchKlar

    if(false){
        //Startknappklar = true
    }
    console.log('Startknappklar', Startknappklar)


    return (
        <div>
  <div>{props.helaState.project.posts[0].body}</div>
  <button onClick={props.hämtafråndatabas}>jag kör dispach</button>



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
            dispatch(actionCreator.databas())
        }
    }    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Valkommen)