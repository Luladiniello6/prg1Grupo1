<<<<<<< HEAD
fetch('https://dummyjson.com/recipes')

function validarFormulario(event) {
    const campoBusqueda = document.getElementById('busqueda');
    const mensajeError = document.getElementById('error');

    mensajeError.textContent = '';

    if (campoBusqueda.value.trim() === '') {
        mensajeError.textContent = 'El campo no puede estar vacío.';
        return false;
    }
    if (campoBusqueda.value.trim().length < 3) {
        mensajeError.textContent = 'La búsqueda debe tener al menos 3 caracteres.';
        return false;
    }
    return true;
=======
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

>>>>>>> eda1bd61bf5a8abf71c319109316421e42488eb0
