
const initState  = {
    apiData: [
        {id: 1, apiData: 'ej från api1'},
        {id: 2, apiData: 'ej från api2'},
        {id: 3, apiData: 'ej från api3'},
        {id: 4, apiData: 'ej från api4'},
        {id: 5, apiData: 'ej från api5'},
        {id: 6, apiData: 'ej från api6'},
        {id: 7, apiData: 'ej från api7'},
        {id: 8, apiData: 'ej från api8'},

    ],
    apiDataPushed: [],
    apiFetchKlar: false,
    applicationView: 'valkommen', 
    hurMangaPar: 4
}


const memoryApiReducer = (state = initState, action) => {
    const newState = {...state}
    switch(action.type) {
        case 'FETCH':
          // code block
          //newState.apiData[0].apiData = action.payload
          newState.apiDataPushed.push(action.payload)
          newState.apiFetchKlar = true
          console.log('MEMORY-API-REDUCER-FETCH + ACTION.TYPE', action.type)
          break;
        case 'CHANGE_ARRAY':
            console.log('nu körs change array i reducern')
            for (let i = 0; i < newState.apiData.length; i++) {
                newState.apiData[i].apiData = newState.apiDataPushed[i];
                }
            break;
            case 'CHANGE_APP_VIEW':
            console.log('nu körs CHANGE_APP_VIEW i reducern')
            newState.applicationView = 'spelplan'
            break;
            case 'CHANGE_ANTAL_PAR':
                console.log('nu körs CHANGE_ANTAL_PAR i reducern AP', action.payload)
                newState.hurMangaPar = newState.hurMangaPar + action.payload
                break;
        default:
            console.log('MEMORY-API-REDUCER-DEFAULT ', action.type)
      }

    return newState
}

export default memoryApiReducer