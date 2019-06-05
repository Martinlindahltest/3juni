const initState  = {
    posts: [
        {id: 1, title: 'tata1', body: 'baba 1'},
        {id: 2, title: 'tata2', body: 'baba 2'},
        {id: 3, title: 'tata3', body: 'baba 3'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer