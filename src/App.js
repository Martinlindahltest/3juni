import 'bootstrap/dist/css/bootstrap.css';
import Spelplan from './components/Spelplan/Spelplan'
import React from 'react'
import { connect } from 'react-redux'

import Valkommen from './components/Valkommen/Valkommen'
import Grattis from './components/Grattis'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






 function App(props) {

  let VilkenVy = <Valkommen />
 
  library.add(faCheckSquare, faCoffee)


if(props.AppView === 'spelplan'){
  VilkenVy = <Spelplan />
}
if(props.AppView === 'välkommen'){
  VilkenVy = <Valkommen />
}
if(props.AppView === 'grattis'){
  VilkenVy = <Grattis />
}
  //console.log('App', props.AppView) Spelplan
  return (
<div >
<FontAwesomeIcon icon="check-square" />

    <FontAwesomeIcon icon="coffee"/>
 {VilkenVy}


</div>
  )
}

const mapStateToProps = (state, ownProps) => ({
    AppView: state.memoryApi.applicationView
})




export default connect(mapStateToProps)(App)