/*

export const databasAsync = (input) => {
    //jedi = input
    console.log('nu körs databasAsync action', input)
    return {type: 'DATABAS', payload: input}
}



export const databas = () => {
    return dispach => {
        console.log('nu körs databas sync action')

        fetch('https://swapi.co/api/people/1')
        .then(function(response) {
            return response.json()})
        .then(function(myJsonVariabel) {
      
      console.log(myJsonVariabel.name);
      dispach(databasAsync(myJsonVariabel.name))
  })

    }
}

*/