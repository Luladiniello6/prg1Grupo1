let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString); 
let id = queryStringObj.get("id"); 
let url = `https://dummyjson.com/recipes/${id}`; 


fetch(url)
  .then(function (response) {
    return response.json(); 
  })
  .then(function (data) {
    let titulo = document.querySelector(".tituloReceta"); 
    let descripcion = document.querySelector(".descripcionReceta"); 
    let ingredientes = document.querySelector(".ingredientesReceta"); 
    let instrucciones = document.querySelector(".instruccionesReceta"); 
    let imagen = document.querySelector(".imagenReceta"); 

   
    titulo.innerText = `Nombre de la receta: ${data.title}`;
    descripcion.innerText = `Descripción: ${data.description}`;
    ingredientes.innerText = `Ingredientes: ${data.ingredients.join(", ")}`;
    instrucciones.innerText = `Instrucciones: ${data.instructions}`;
    imagen.src = data.image;

    
    console.log(data.title);
    console.log(data.description);
    console.log(data.ingredients);
    console.log(data.instructions);
    console.log(data.image);
  })
  .catch(function (error) {
    console.error("Error al cargar los detalles de la receta:", error); 
  });

  
  