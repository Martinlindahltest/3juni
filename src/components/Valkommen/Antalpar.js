import React from 'react'
import { connect } from 'react-redux'


 function Antalpar(props) {
    return (
        <div>
            Antal par placeholder
            <span> {props.hurMangaPar}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    //projectPosts: state
    hurMangaPar: state.memoryApi.hurMangaPar
  })

export default connect(mapStateToProps)(Antalpar)