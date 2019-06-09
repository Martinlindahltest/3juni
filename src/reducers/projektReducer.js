//import firebase from '../fbConfig'

//onsole.log(firebase)

const initState  = {
    posts: [
        {id: 1, title: 'tata1', body: 'baba 1'},
        {id: 2, title: 'tata2', body: 'baba 2'},
        {id: 3, title: 'tata3', body: 'baba 3'}
    ]
}

//initState.posts[0].body = 'jag har ändrat i projekt reducer'

//const db = firebase





const projektReducer = (state = initState, action) => {
    console.log('nu körs project reducer ')
    if(action.type === 'DATABAS'){
        console.log(action.payload)
    }

    return state
}

export default projektReducer