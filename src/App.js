import 'bootstrap/dist/css/bootstrap.css';
import Spelplan from './components/Spelplan/Spelplan'
import React from 'react'
import { connect } from 'react-redux'

import Valkommen from './components/Valkommen/Valkommen'
import Grattis from './components/Grattis'

let VilkenVy = <Spelplan />

if(true){
  VilkenVy = <Spelplan />
}
if(false){
  VilkenVy = <Valkommen />
}
if(false){
  VilkenVy = <Grattis />
}

 function App(props) {
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