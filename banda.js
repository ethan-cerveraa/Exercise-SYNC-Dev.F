//  género de una banda deseada
async function obtenerGeneroDeBanda(banda) {
    try {
      const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(banda)}`;
      const response = await fetch(url);
      const data = await response.json();
      const bandaEncontrada = data.artists ? data.artists[0] : null;
      return bandaEncontrada ? bandaEncontrada.strGenre : null;
    } catch (error) {
      console.error("Error al obtener el género de la banda:", error);
      return null;
    }
  }
  
  // Nombre de la banda 
  const bandaDeseada = "coldplay";
  
  // género de la banda
  obtenerGeneroDeBanda(bandaDeseada)
    .then((genero) => {
      if (genero) {
        console.log(`El género de la banda ${bandaDeseada} es: ${genero}`);
      } else {
        console.log(`No se encontró información del género para la banda ${bandaDeseada}.`);
      }
    })
    .catch((error) => console.error("Error al obtener el género de la banda:", error));
  