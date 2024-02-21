//solicitud por autor y obtener la lista de libros
async function obtenerLibrosPorAutor(autor) {
    try {
      const url = `http://openlibrary.org/search.json?author=${encodeURIComponent(autor)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error("Error al obtener la lista de libros:", error);
      return null;
    }
  }
  
  // lista de libros de un autor en consola
  function mostrarLibrosDeAutor(autor, libros) {
    if (!libros || libros.length === 0) {
      console.log(`No se encontraron libros para el autor ${autor}.`);
      return;
    }
  
    console.log(`Libros del autor ${autor}:`);
    for (const libro of libros) {
      const titulo = libro.title ? libro.title : "Título desconocido";
      const fechaPublicacion = libro.publish_date ? libro.publish_date[0] : "Fecha de publicación desconocida";
      console.log(` - ${titulo} (${fechaPublicacion})`);
    }
  }
  
  // Nombre del autor para buscar 
  const autor = "asimov";
  
  //  mostrar la lista de libros del autor
  obtenerLibrosPorAutor(autor)
    .then((libros) => mostrarLibrosDeAutor(autor, libros))
    .catch((error) => console.error("Error al obtener la lista de libros:", error));
  