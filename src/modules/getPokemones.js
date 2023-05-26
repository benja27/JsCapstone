const getPokemones = () => {
  let url = "https://pokeapi.co/api/v2/pokemon/";

  let config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let resources = [];
  let fetchPromises = [];

  for (let i = 1; i <= 10; i++) {
    fetchPromises.push(
    fetch(`${url}${i}`, config)
      .then((response) => response.json())
      .then((data) => {
        let pokemon = {
          name: data.name,
          picture: data.sprites.back_default,
          id: data.id
        };
        resources.push(pokemon);        
      })
      .catch((error) => {
        console.log(error);
      })
      )
    };
    
    Promise.all(fetchPromises)
      .then(() => {
        // console.log(resources);
      })
      .catch((error) => {
        console.log(error);
      });      
    return resources
    
  }
    
    

export default getPokemones;
