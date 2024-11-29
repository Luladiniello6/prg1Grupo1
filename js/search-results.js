let params = new URLSearchParams(window.location.search);
let query = params.get("buscador");
console.log("query:", query);


document.getElementById("titulo-resultados").textContent = `Resultados de búsqueda para: "${query}"`;

fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        
    })
        let resultados = document.getElementById("resultados");
        if (data.recipes.length === 0) {
            resultados.textContent = "No se encontraron resultados.";
        } else {
            data.recipes.forEach(receta => {
                let recetaHTML = `
                    <div class="receta">
                        <img src="https://via.placeholder.com/200" alt="${receta.title}">
                        <h3>${receta.title}</h3>
                        <a href="receta.html?id=${receta.id}">Ver receta</a>
                    </div>
                `;
                resultados.innerHTML += recetaHTML;
            });
        }
    .catch (function(error){
        console.log("Error: ", errror);
        
    })