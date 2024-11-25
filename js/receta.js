const params = new URLSearchParams(window.location.search);
const recetaId = params.get("id");

fetch(`https://dummyjson.com/recipes/${recetaId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("nombre-receta").textContent = data.title;
        document.getElementById("imagen-receta").src = "https://via.placeholder.com/400";
        document.getElementById("instrucciones").textContent = data.instructions || "No hay instrucciones disponibles.";
        document.getElementById("tiempo-coccion").textContent = `Tiempo de cocción: ${data.cookingTime || "No especificado"}`;
    })
    .catch(error => console.error("Error al cargar la receta:", error));

