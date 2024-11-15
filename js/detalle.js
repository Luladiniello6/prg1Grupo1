function mostrarDetalleReceta() {
  const seccionDetalleReceta = document.querySelector("#detalle-receta");
  
  if (window.opener && window.opener.recetaSeleccionada) {
    const receta = window.opener.recetaSeleccionada;
    
    seccionDetalleReceta.innerHTML = `
      <img src="${receta.thumbnail}" alt="${receta.title}">
      <h2>${receta.title}</h2>
      <p><strong>Dificultad:</strong> ${receta.difficulty || "Desconocida"}</p>
      <p><strong>Ingredientes:</strong> ${receta.ingredients ? receta.ingredients.join(", ") : "No disponible"}</p>
      <p><strong>Instrucciones:</strong> ${receta.instructions || "No disponible"}</p>`;
  } else {
    seccionDetalleReceta.innerHTML = "<p>No se pudo cargar la receta.</p>";
  }
}

mostrarDetalleReceta();

  
  