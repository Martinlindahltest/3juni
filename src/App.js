import 'bootstrap/dist/css/bootstrap.css';
import Spelplan from './components/Spelplan/Spelplan'
import React from 'react'
import { connect } from 'react-redux'

import Valkommen from './components/Valkommen/Valkommen'
import Grattis from './components/Grattis'



 function App(props) {

  let VilkenVy = <Valkommen />


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

 {VilkenVy}
</div>
  )
}

const mapStateToProps = (state, ownProps) => ({
    AppView: state.memoryApi.applicationView
})




export default connect(mapStateToProps)(App)