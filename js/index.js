let recipes = []; // Almacenará todas las recetas obtenidas
let displayedRecipes = 0; // Número de recetas actualmente mostradas
const recipesPerPage = 10; // Número de recetas a mostrar por cada clic en "Cargar más"
let selectedRecipe = null; // Variable global para almacenar la receta seleccionada

// Función para obtener recetas y almacenarlas en `recipes`
function fetchRecipes() {
  const fetchResponse = fetch("https://dummyjson.com/recipes");
  
  fetchResponse
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      recipes = data.recipes; // Guardar las recetas
      loadMoreRecipes(); // Mostrar las primeras recetas
    })
    .catch(function(error) {
      console.log("Error al obtener las recetas:", error);
    });
}

// Función para cargar más recetas y mostrarlas en la página
function loadMoreRecipes() {
  const recipeList = document.querySelector("#recipe-list"); // Selección de la lista de recetas
  
  let recipesHTML = ""; // Variable para almacenar el HTML de las recetas
  const limit = displayedRecipes + recipesPerPage; // Límite de recetas a mostrar

  // Ciclo para añadir recetas al HTML
  for (let i = displayedRecipes; i < limit && i < recipes.length; i++) {
    const recipe = recipes[i];
    
    // HTML de cada receta
    recipesHTML += `
      <div class="recipe-card">
        <img src="${recipe.thumbnail}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p>Dificultad: ${recipe.difficulty || "Desconocida"}</p>
        <button onclick="viewRecipe(${i})">Ver detalles</button>
      </div>
    `;
  }

  recipeList.innerHTML += recipesHTML; // Agregar las recetas al contenedor
  displayedRecipes += recipesPerPage; // Incrementar el contador de recetas mostradas
}

// Función para ver los detalles de una receta específica
function viewRecipe(index) {
  selectedRecipe = recipes[index]; // Guardar la receta seleccionada en una variable global
  window.location.href = "detalle.html"; // Redirigir a la página de detalles
}

// Evento para cargar más recetas al hacer clic
document.querySelector("#load-more").addEventListener("click", loadMoreRecipes);

// Obtener las recetas inicialmente
fetchRecipes();
