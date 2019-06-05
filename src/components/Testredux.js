import React from 'react'
import { connect } from 'react-redux'

 function Testredux(props) {
     console.log(props)
     props.deletePosts('från testredux')

    const propstojsx = props.posts.map(obj => {
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