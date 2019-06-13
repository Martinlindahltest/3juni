
const initState  = {
    apiData: [
        {id: 1, apiData: 'ej från api'},
    ]
}


const memoryApiReducer = (state = initState, action) => {
    const newState = {...state}
    if(action.type === 'DATABAS'){
        //console.log(action.payload)
        newState.posts[0].body = action.payload
        //console.log(newState.posts[0].body)
        console.log('nu körs project reducer ', newState)

    }

    return newState
}

export default memoryApiReducer