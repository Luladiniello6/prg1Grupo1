fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let recetas = data

    let facil = document.querySelector("#facil");
    let medium = document.querySelector("#intermedio");
    let dificil = document.querySelector("#dificil");

    let listaRecetas = document.querySelector(".lista-recetas");

    function mostrarRecetasPorCategoria(dificultad) {
      listaRecetas.innerHTML = "";  
      let recetasFiltradas = recetas.filter(
        receta => receta.difficulty.toLowerCase() === dificultad
      );

      let contenido = "";
      recetasFiltradas.forEach(receta => {
        contenido += `
          <article class="cadaReceta">
            <img src=${receta.image} alt="Imagen de receta"></img>
            <h1>${receta.name}</h1>
            <p>${receta.difficulty}</p>
            <a href="/recipes/${receta.id}">Ver más</a>
          </article>
        `;
      });

      // Mostrar recetas en el contenedor
      listaRecetas.innerHTML = contenido;

      if (recetasFiltradas.length === 0) {
        listaRecetas.innerHTML = `<p>No hay recetas para esta categoría.</p>`;
      }
    }

    // Eventos para los botones
    btnFacil.addEventListener("click", function () {
      mostrarRecetasPorCategoria("easy");
    });
    btnIntermedio.addEventListener("click", function () {
      mostrarRecetasPorCategoria("medium");
    });
    btnDificil.addEventListener("click", function () {
      mostrarRecetasPorCategoria("hard");
    });
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
