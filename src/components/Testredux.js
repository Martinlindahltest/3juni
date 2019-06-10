import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from "../actions/actions"

 function Testredux(props) {
     //console.log('props kommer in i testaredux', props)
     //props.deletePosts('från testredux')

     props.hämtafråndatabas();


    const propstojsx = props.projectPosts.map(obj => {
        return <p key={obj.id}>{obj.body}</p>
    })
    

    return (
        <div>
            testredux
            {propstojsx}
        </div>
    )
}

const mapStateToProps = (state) => ({
    projectPosts: state.project.posts
})


const mapDispatchToProps = (dispatch) => {
    return {
        hämtafråndatabas: (input) => {
            dispatch(actionCreator.databas('hejhej'))
        }
    }    
}




export default connect(mapStateToProps, mapDispatchToProps)(Testredux)