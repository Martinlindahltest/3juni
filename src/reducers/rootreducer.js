const initState  = {
    posts: [
        {id: 1, title: 'tata2', body: 'baba 3'},
        {id: 2, title: 'tata2', body: 'baba 3'},
        {id: 3, title: 'tata2', body: 'baba 3'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    return state
}

export default rootReducer