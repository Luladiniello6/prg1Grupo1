let recetas = []; 
let recetasMostradas = 0; 
const recetasPorPagina = 10; 
let recetaSeleccionada = null; 

function obtenerRecetas() {
  fetch("https://dummyjson.com/recipes")
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      recetas = datos.recipes; 
      cargarMasRecetas(); 
    })
    .catch(function(error) {
      console.log("Error al obtener las recetas:", error);
    });
}

function cargarMasRecetas() {
  const listaRecetas = document.querySelector("#lista-recetas");
  
  let recetasHTML = ""; 
  const limite = recetasMostradas + recetasPorPagina; 

  for (let i = recetasMostradas; i < limite && i < recetas.length; i++) {
    const receta = recetas[i];
    
    recetasHTML += `
      <div class="tarjeta-receta">
        <img src="${receta.thumbnail}" alt="${receta.title}">
        <h2>${receta.title}</h2>
        <p>Dificultad: ${receta.difficulty || "Desconocida"}</p>
        <button onclick="verReceta(${i})">Ver detalles</button>
      </div>
    `;
  }

  listaRecetas.innerHTML += recetasHTML; 
  recetasMostradas += recetasPorPagina; 
}

function verReceta(indice) {
  recetaSeleccionada = recetas[indice]; 
  window.location.href = "detalle.html"; 
}

document.querySelector("#cargar-mas").addEventListener("click", cargarMasRecetas);

obtenerRecetas();

