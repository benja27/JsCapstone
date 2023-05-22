const getPokemones = () => {
  let url = "https://pokeapi.co/api/v2/pokemon/"

  let config = {
    method : "GET",
    headers : {
      "Content-Type": "application/json"
    }
  }

  fetch(url,config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error =>{
      console.log(error)
    })

  
}

export default getPokemones