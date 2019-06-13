import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from "../actions/actions"





 function Testredux(props) {
     //console.log('props kommer in i testaredux', props)
     //props.deletePosts('från testredux')



     

    let propstojsx = props.projectPosts.map(obj => {
        return <p key={obj.id}>{obj.body}</p>
    })

console.log('detta ska bli luke', props.projectPosts[0].body)

    
    

    return (
        <div>
            testredux
            {propstojsx}
            <p>{props.projectPosts[0].body}</p>
            <button onClick={() => props.hämtafråndatabas()}></button>

        </div>
    )
}

const mapStateToProps = (state) => ({
    projectPosts: state
})


const mapDispatchToProps = (dispatch) => {
    return {
        hämtafråndatabas: (input) => {
            dispatch(actionCreator.databas(input))
        }
    }    
}




export default connect(mapStateToProps, mapDispatchToProps)(Testredux)