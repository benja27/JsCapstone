const getPokemones = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resources = [];

  for (let i = 1; i <= 10; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      const pokemon = {
        name: data.name,
        picture: data.sprites.back_default,
        id: data.id,
        mov1: data.abilities[0].ability.name,
        mov2: data.abilities[1].ability.name,
        height: data.height,
      };
      resources.push(pokemon);
    } catch (error) {
      console.log(`Error al obtener los datos del Pokémon ${i}:`, error);
    }
  }
  console.log(resources);
  return resources;
};

export default getPokemones;
