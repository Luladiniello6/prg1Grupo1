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

    
    
