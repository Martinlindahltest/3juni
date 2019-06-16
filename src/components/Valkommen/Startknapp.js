import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from "../../actions/memoryActions"



 function Startknapp(props) {

    let Vy

    if(props.apiFetchKlar === true){
        Vy = <div> 
            <button onClick={() => {
                props.changeArrayAppview()
            }}>aktiv Startknapp</button>
        </div>
    }
    else {
        Vy = <div> 
        <button>passiv Startknapp</button>
    </div>    }

    return (
        <div>
            {Vy}
        </div>
    )
}

const mapStateToProps = (state) => ({
    //projectPosts: state
    //helaState: state,
    apiFetchKlar: state.memoryApi.apiFetchKlar,
  })

  const mapDispatchToProps = (dispatch) => {
    return {
        changeArrayAppview: () => {
          dispatch(actionCreator.changeArray())
          dispatch(actionCreator.changeApplicationView())

      }
    }    
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Startknapp)