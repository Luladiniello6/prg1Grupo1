let qs = location.search;
let qsObj = new URLSearchParams(qs);
let IDreceta = qsObj.get('categoria');

let detailContainer = document.querySelector(".recipe-detail");


fetch('https://dummyjson.com/recipes/tag/${IDreceta}')
    .then (function(response){
        return response.json();
    })

    .then(function(data){
        
        if (!detailContainer) {
            console.error("El elemento con la clase .recipe-detail no existe.");
            return;
        }
        let contenido = "";
        for (let recipe of data.recipes) { // Asegúrate de que 'data.recipes' sea el formato correcto
            contenido += `
                <h1>${recipe.name}</h1>
                <img src="${recipe.image}" alt="${recipe.title}" class="detail-image" />
                <p><strong>Nivel de dificultad:</strong> ${recipe.difficulty}</p>
                <p><strong>Ingredientes:</strong> ${recipe.ingredients.join(", ")}</p>
                <p><strong>Preparación:</strong> ${recipe.instructions}</p>
            `;
        }
        detailContainer.innerHTML = contenido;
    })

    .catch(function (error) {
        console.error("Error: ", error);
    });

    
    
