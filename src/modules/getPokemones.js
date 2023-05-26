// const getPokemones = async () => {
//   const config = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   const resources = [];

//   for (let i = 1; i <= 10; i += 1) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//     try {
//       const response = await fetch(url, config);
//       const data = await response.json();
//       const pokemon = {
//         name: data.name,
//         picture: data.sprites.back_default,
//         id: data.id,
//         mov1: data.abilities[0].ability.name,
//         mov2: data.abilities[1].ability.name,
//         height: data.height,
//       };
//       resources.push(pokemon);
//     } catch (error) {
//       return 'Error al obtener los datos del Pokémon';
//     }
//   }

//   return resources;
// };

// export default getPokemones;

const getPokemones = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resources = [];
  const promises = [];

  for (let i = 1; i <= 10; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(
      fetch(url, config)
        .then((response) => response.json())
        .then((data) => {
          const pokemon = {
            name: data.name,
            picture: data.sprites.back_default,
            id: data.id,
            mov1: data.abilities[0].ability.name,
            mov2: data.abilities[1].ability.name,
            height: data.height,
          };
          resources.push(pokemon);
        })
        .catch(() => {
          throw new Error('Error al obtener los datos del Pokémon');
        }),
    );
  }

  await Promise.all(promises);
  const resources2 = resources.sort((a, b) => a.id - b.id);
  return resources2;
};

export default getPokemones;
