const categoryRecipesSection = document.querySelector(".lista-recetas");
const categoryTitle = document.getElementById("titulo");

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("tag");

let recipesHTML = "";

if (category) {
    const API_URL = https//dummyjson.com/recipes/tag/${category};

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) throw new Error("Error al conectar con la API");
            return response.json();
        })
        .then(function (data) {
            console.log("Recetas recibidas:", data);

            categoryTitle.textContent = `Recetas para la categoría: ${category}`;

            if (data.recipes && data.recipes.length > 0) {
                data.recipes.forEach(function (recipe) {
                    recipesHTML += `
                        <div class="recipe-card">
                            <img src="${recipe.image || 'ruta/de/imagen/por/defecto.jpg'}" alt="${recipe.name}" class="recipe-card-img">
                            <div class="recipe-card-content">
                                <h1>${recipe.name}</h1>
                                <p>Dificultad: ${recipe.difficulty}</p>
                                <a href="./index.html?id=${recipe.id}" class="detalleHover">Detalle de la receta</a>
                            </div>
                        </div>
                    `;
                });
            } else {
                recipesHTML = "<p>No se encontraron recetas en esta categoría.</p>";
            }

            categoryRecipesSection.innerHTML = recipesHTML;
        })
        .catch(function (error) {
            console.error("Error al obtener las recetas:", error);
            categoryRecipesSection.innerHTML = "<p>Error al cargar las recetas. Por favor, intenta más tarde.</p>";
        });
} else {
    categoryTitle.textContent = "Categoría no especificada";
    categoryRecipesSection.innerHTML = "<p>Por favor, selecciona una categoría válida.</p>";
}
    
    
