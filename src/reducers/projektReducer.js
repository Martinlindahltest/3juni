//import firebase from '../fbConfig'

//onsole.log(firebase)

const initState  = {
    posts: [
        {id: 1, title: 'tata1', body: 'mamama 1'},
        {id: 2, title: 'tata2', body: 'baba 2'},
        {id: 3, title: 'tata3', body: 'baba 3'}
    ]
}

//initState.posts[0].body = 'jag har ändrat i projekt reducer'

//const db = firebase

const projektReducer = (state = initState, action) => {
    const newState = {...state}
    if(action.type === 'DATABAS'){
        //console.log(action.payload)
        newState.posts[0].body = action.payload
        //console.log(newState.posts[0].body)
        console.log('nu körs project reducer ', newState)

    }

    return newState
}

export default projektReducer