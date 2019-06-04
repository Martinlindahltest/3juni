import React from 'react'
import { connect } from 'react-redux'

 function Testredux(props) {
     console.log(props)
     props.deletePosts('från testredux')
    return (
        <div>
            testredux
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => {
    return {
        deletePosts: (input) => {
            dispatch({type: 'CONSOLE_LOG', payload: input})
        }
    }    
}




export default connect(mapStateToProps, mapDispatchToProps)(Testredux)