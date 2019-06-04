import React from 'react'
import { connect } from 'react-redux'

 function Testredux(props) {
     console.log(props.posts)
    return (
        <div>
            testredux
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts
})




export default connect(mapStateToProps)(Testredux)