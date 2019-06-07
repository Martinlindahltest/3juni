import React from 'react'
import { connect } from 'react-redux'

 function Testredux(props) {
     console.log('props kommer in i testaredux', props)
     props.deletePosts('från testredux')

    const propstojsx = props.state.project.posts.map(obj => {
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
    state: state
})


const mapDispatchToProps = (dispatch) => {
    return {
        deletePosts: (input) => {
            dispatch({type: 'CONSOLE_LOG', payload: input})
        }
    }    
}




export default connect(mapStateToProps, mapDispatchToProps)(Testredux)