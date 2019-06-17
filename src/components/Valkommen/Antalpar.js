import React from 'react'
import { connect } from 'react-redux'
import './Antalpar.css'
import * as actionCreator from "../../actions/memoryActions"



 function Antalpar(props) {

    function handleClickUp () {

        if(props.hurMangaPar < 16) {
            props.changeAntalPar(2)
        }

    }

    function handleClickDown (input) {

        if(props.hurMangaPar > 2) {
            props.changeAntalPar(-2)
        }

    }



    return (
        <div>
            Antal kort att spela med
            <div onClick={() => handleClickUp()} className="knapp">KnappUpp</div>
            <div onClick={() => handleClickDown()} className="knapp">KnappNer</div>

            <span> {props.hurMangaPar}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    //projectPosts: state
    hurMangaPar: state.memoryApi.hurMangaPar
  })

  const mapDispatchToProps = (dispatch) => {
    return {
        changeAntalPar: (input) => {
            dispatch(actionCreator.changeAntalPar(input))
        }
    }    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Antalpar)