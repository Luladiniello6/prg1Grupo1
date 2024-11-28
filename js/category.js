<<<<<<< HEAD
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('categoria');
let url = `https://dummyjson.com/recipes/tag/${id}`
let listaRecetas = document.querySelector(".recipe-detail");

    fetch(url)
        .then (function(response){
            return response.json();
    })

        .then(function (data) {
            console.log(data);

            if (!data.recipes || data.recipes.length === 0) {
                listaRecetas.innerHTML = `<p>No se encontraron recetas para la categoría seleccionada.</p>`;
                return;
            }
=======
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

>>>>>>> 50ceeabe50af38a32b6ee219771c44799e13a9a1


            
            let contenido = "";
            for (let i = 0; i < data.recipes.length; i++) { // Itera sobre las recetas dentro de "data.recipes"
                contenido += `
                <div class="recipe-item">
                    <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}" class="recipe-image">
                    <h2>${data.recipes[i].name}</h2>
                    <p><strong>Dificultad:</strong> ${data.recipes[i].difficulty}</p>
                    <a href="./recipe.html?id=${data.recipes[i].id}" class="recipe-link">Ver Detalle</a>
                </div>
                    `;
        }

            listaRecetas.innerHTML = contenido;
    })
        .catch(function (error) {
            console.error("Error: ", error);
            listaRecetas.innerHTML = `<p>Ocurrió un error al cargar las recetas. Intenta nuevamente más tarde.</p>`;

    });

    
    
