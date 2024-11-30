let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('category-recipe');
let url = `https://dummyjson.com/recipes/tag/${categoria}`
let listaRecetas = document.querySelector(".lista-recetas");

    fetch(url)
        .then (function(response){
            return response.json();
    })
        .then(function (data) {
            console.log(data);

            let contenido = "";
            for (let i = 0; i < data.recipes.length; i++) { // Itera sobre las recetas dentro de "data.recipes"
                contenido += `
                <div class="recipe-item">
                    <h2>${data.recipes[i].name}</h2>
                    <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}" class="recipe-image">
                    <p class="difi" ><strong>Dificultad:</strong> ${data.recipes[i].difficulty}</p>
                    <a href="./receta.html?id=${data.recipes[i].id}" class="recipe-link">Ver Detalle</a>
                </div>
                    `;
            }
            listaRecetas.innerHTML = contenido;        
    })
        .catch(function (error) {
            console.log("Error: ", error);
    });

    
    
