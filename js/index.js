fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json(); 
  })
  .then(function (data) {
    console.log(data);
    let recetas = data.recipes;
    let listaRecetas = document.querySelector(".lista-recetas"); 
    let recetasMostradas = 0; 
    const recetasPorPagina = 10;

    function cargarRecetas() {
      let receta = "";
      for (let i = recetasMostradas; i < recetasMostradas + recetasPorPagina; i++) {
        if (i >= recetas.length);

        receta += `
          <article class="cadaReceta">
            <img src=${recetas[i].image} alt="Imagen de receta"></img>
            <h1>${recetas[i].name}</h1>
            <p>${'📶'} ${recetas[i].difficulty}</p>
            <a class="detalleHover" href="./receta.html?recetaId=${recetas[i].id}">Detalle de la receta 🍽️</a>
          </article>
        `;

        
      }
      listaRecetas.innerHTML += receta;
      recetasMostradas += recetasPorPagina;

      cargarMenos.innerHTML

      if (recetasMostradas >= recetas.length) {
        botonCargarMas.style.display = "none";
      }
    }
    let botonCargarMas = document.querySelector(".cargar-mas");
    botonCargarMas.addEventListener("click", cargarRecetas);
    cargarRecetas();
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

  