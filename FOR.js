// Función para obtener un número aleatorio 
function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 898) + 1;
  }
  
  //  obtener un Pokémon aleatorio
  async function obtenerPokemonAleatorio() {
    try {
      const numeroPokemon = obtenerNumeroAleatorio();
      const url = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el Pokémon:", error);
      return null;
    }
  }
  
  //  tipos del Pokémon en consola
  function mostrarTiposPokemon(pokemon) {
    if (!pokemon) {
      console.log("No se pudo obtener el Pokémon.");
      return;
    }
  
    console.log(`Nombre del Pokémon: ${pokemon.name}`);
    console.log("Tipos:");
    for (const tipo of pokemon.types) {
      console.log(` - ${tipo.type.name}`);
    }
  }
  
  //  mostrar el Pokémon aleatorio
  obtenerPokemonAleatorio()
    .then((pokemon) => mostrarTiposPokemon(pokemon))
    .catch((error) => console.error("Error al obtener el Pokémon:", error));
  