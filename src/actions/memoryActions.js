

export const fetchAsync = (input) => {
    //jedi = input
    console.log('nu körs FECHAsync action', input)
    return {type: 'FETCH', payload: input}
}



export const apiFetch = () => {
    return dispach => {
        console.log('nu körs FECH sync action')
        

        fetch('https://swapi.co/api/people/1')
        .then(function(response) {
            return response.json()})
        .then(function(myJsonVariabel) {
      
      console.log(myJsonVariabel.name);
      dispach(fetchAsync(myJsonVariabel.name))
  })

    }
}