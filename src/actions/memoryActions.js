
export const changeArray = (input) => {
    console.log('nu körs changeArray action', input)
    return {type: 'CHANGE_ARRAY', payload: input}
}

export const fetchAsync = (input) => {
    console.log('nu körs FECHAsync action', input)
    return {type: 'FETCH', payload: input}
}



export const apiFetch = () => {
    return (dispach) => {
        fetchFunction(dispach, 'https://swapi.co/api/people/1')
        fetchFunction(dispach, 'https://swapi.co/api/people/2')
        fetchFunction(dispach, 'https://swapi.co/api/people/3')
        fetchFunction(dispach, 'https://swapi.co/api/people/4')
        fetchFunction(dispach, 'https://swapi.co/api/people/5')
        fetchFunction(dispach, 'https://swapi.co/api/people/6')
        fetchFunction(dispach, 'https://swapi.co/api/people/7')
        fetchFunction(dispach, 'https://swapi.co/api/people/8')

    }
}


function fetchFunction(dispach, apiurl) {
    console.log('nu körs FECH sync action')
        fetch(apiurl)
        .then(function(response) {
            return response.json()})
        .then(function(api1) {
      
      console.log(api1.name);
      dispach(fetchAsync(api1.name))
  })
}