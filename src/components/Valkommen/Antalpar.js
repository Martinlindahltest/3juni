import React from 'react'
import { connect } from 'react-redux'
import './Antalpar.css'
import * as actionCreator from "../../actions/memoryActions"
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







 function Antalpar(props) {

    let containerClass = "border col-6 col-md-3 p-2"
let BigContainerClass = "border col-12 col-md-6 p-2"
//let FullContainerClass = "border col-12 col-md-12 p-2"

library.add(faCheckSquare, faCoffee)



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


            <div class="row h-100 justify-content-center align-items-center">
          <div class={BigContainerClass}>
            <div className="">
                <div className="">Antal kort att spela med</div> 

            </div>
          </div>
      
          <div class={containerClass}>
            <div>
            <div onClick={() => handleClickUp()} className="knapp">
              <FontAwesomeIcon icon="coffee"/>
              <FontAwesomeIcon icon="arrow-up"/>

              KnappUpp
              </div>
            <div onClick={() => handleClickDown()} className="knapp">KnappNer</div>
            </div>
          </div>
      
      
          <div class={containerClass}>
            <div>             <span> {props.hurMangaPar}</span>
 </div>
          </div>
      
        </div>

{/* Row 1 är slut */}
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