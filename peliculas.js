// obtener un personaje aleatorio
async function obtenerPersonajeAleatorio() {
    try {
      const numeroPersonaje = Math.floor(Math.random() * 82) + 1; // Hay 82 personajes en la API
      const url = `https://swapi.co/api/people/${numeroPersonaje}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el personaje:", error);
      return null;
    }
  }
  
  // películas donde aparece un personaje
  async function obtenerPeliculasDePersonaje(personaje) {
    try {
      const peliculasUrls = personaje.films;
      const peliculasPromesas = peliculasUrls.map(async (url) => {
        const response = await fetch(url);
        return response.json();
      });
      const peliculas = await Promise.all(peliculasPromesas);
      return peliculas.map((pelicula) => pelicula.title);
    } catch (error) {
      console.error("Error al obtener las películas del personaje:", error);
      return [];
    }
  }
  
  // las películas donde aparece
  obtenerPersonajeAleatorio()
    .then(async (personaje) => {
      console.log(`Nombre del personaje: ${personaje.name}`);
      const peliculas = await obtenerPeliculasDePersonaje(personaje);
      if (peliculas.length > 0) {
        console.log("Películas donde aparece:");
        for (const pelicula of peliculas) {
          console.log(` - ${pelicula}`);
        }
      } else {
        console.log("No se encontraron películas donde aparece el personaje.");
      }
    })
    .catch((error) => console.error("Error al obtener el personaje y sus películas:", error));
  