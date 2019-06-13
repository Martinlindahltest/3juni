
const initState  = {
    apiData: [
        {id: 1, apiData: 'ej från api'},
    ],
    apiFetchKlar: false,
    applicationView: 'valkommen', 
    hurMangaPar: 4
}


const memoryApiReducer = (state = initState, action) => {
    const newState = {...state}
    if(action.type === ''){
        

    }

    return newState
}

export default memoryApiReducer