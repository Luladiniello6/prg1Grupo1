fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json(); 
  })
  .then(function (data) {
    console.log(data);

    let detalles = data.recipes;
    let listaDetalles = document.querySelector(".detalle-recetas");

    if (detalles && detalles.length > 0) {
      let detalle = "";
      for (let i = 0; i < detalles.length; i++) {
        detalle +=`
          <article class="detalles-1">
            <h1>${detalles[i].name}</h1>
            <img src="${detalles[i].image}" alt="Imagen de receta">
            <p class="dif">Nivel de dificultad: ${detalles[i].difficulty}</p>
            <p class="ing">Ingredientes: ${detalles[i].ingredients.join(", ")}</p>
            <p class="ins">Instrucciones de preparación: ${detalles[i].instructions}</p>
          </article>
        `;
      }
      listaDetalles.innerHTML = detalle;
    } else {
      console.log("No se encontraron recetas.");
    }
  })
    .catch(function (error) {
        console.log("Error:", error);
    });


