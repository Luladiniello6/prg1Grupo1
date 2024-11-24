const params = new URLSearchParams(window.location.search);
const query = params.get("query");

document.getElementById("titulo-resultados").textContent = `Resultados de búsqueda para: "${query}"`;

fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
        const resultados = document.getElementById("resultados");
        if (data.recipes.length === 0) {
            resultados.textContent = "No se encontraron resultados.";
        } else {
            data.recipes.forEach(receta => {
                const recetaHTML = `
                    <div class="receta">
                        <img src="https://via.placeholder.com/200" alt="${receta.title}">
                        <h3>${receta.title}</h3>
                        <a href="receta.html?id=${receta.id}">Ver receta</a>
                    </div>
                `;
                resultados.innerHTML += recetaHTML;
            });
        }
    })
    .catch(error => console.error("Error al buscar recetas:", error));