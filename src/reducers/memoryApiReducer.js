
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
    switch(action.type) {
        case 'FETCH':
          // code block
          newState.apiData[0].apiData = action.payload
          newState.apiFetchKlar = true
          console.log('MEMORY-API-REDUCER-FETCH + ACTION.TYPE', action.type)
          break;
        default:
            console.log('MEMORY-API-REDUCER-DEFAULT ', action.type)
      }

    return newState
}

export default memoryApiReducer