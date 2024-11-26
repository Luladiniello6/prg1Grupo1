fetch(`https://dummyjson.com/recipes/tag/Pakistani`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(JSON.stringify(data, null, 4)); 
        let recipes = data.recipes;
        let detailContainer = document.querySelector(".recipe-detail");

    if (!detailContainer) {
        console.error("El elemento con la clase .recipe-detail no existe.");
        return;
    }
    let contenido =""

    for (let i = 0; i < recipes.length; i++) { 
        contenido +=`
            <h1>${recipes[i].name}</h1>
            <img src="${recipes[i].image}" alt="${recipes[i].title}" class="detail-image" />
            <p><strong>Nivel de dificultad:</strong> ${recipes[i].difficulty}</p>
            <p><strong>Ingredientes:</strong> ${recipes[i].ingredients.join(", ")}</p>
            <p><strong>Preparación:</strong> ${recipes[i].instructions}</p>
        `;
    }
    detailContainer.innerHTML = contenido;
})
    .catch(function (error) {
        console.error("Error: ", error);
});

