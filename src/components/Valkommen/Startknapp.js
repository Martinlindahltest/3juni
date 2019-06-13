import React from 'react'
import { connect } from 'react-redux'


 function Startknapp(props) {

    let Vy

    if(props.apiFetchKlar === true){
        Vy = <div>Placeholder aktiv Startknapp</div>
    }
    else {
        Vy = <div>Placeholder passiv Startknapp</div>
    }

    return (
        <div>
            {Vy}
        </div>
    )
}

const mapStateToProps = (state) => ({
    //projectPosts: state
    //helaState: state,
    apiFetchKlar: state.memoryApi.apiFetchKlar
  })

export default connect(mapStateToProps)(Startknapp)