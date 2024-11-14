function displayRecipeDetail() {
    const recipeDetailSection = document.querySelector("#recipe-detail");
    
    if (window.opener && window.opener.selectedRecipe) {
      const recipe = window.opener.selectedRecipe;
      
      recipeDetailSection.innerHTML = `
        <img src="${recipe.thumbnail}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p><strong>Dificultad:</strong> ${recipe.difficulty || "Desconocida"}</p>
        <p><strong>Ingredientes:</strong> ${recipe.ingredients ? recipe.ingredients.join(", ") : "No disponible"}</p>
        <p><strong>Instrucciones:</strong> ${recipe.instructions || "No disponible"}</p>
      `;
    } else {
      recipeDetailSection.innerHTML = "<p>No se pudo cargar la receta.</p>";
    }
  }
  
  // Llamar a la función al cargar la página
  displayRecipeDetail();
  
  