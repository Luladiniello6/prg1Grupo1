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