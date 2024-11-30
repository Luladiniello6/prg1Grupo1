let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let recetaId = queryStringObj.get('recetaId');
console.log("receta id: ",recetaId);

fetch(`https://dummyjson.com/recipes/${recetaId}`)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        
        let receta = data;

        let nombre = document.querySelector(".nombre-receta");
        let instrucciones = document.querySelector(".instrucciones");
        let tiempoCoccion = document.querySelector(".tiempo-coccion");
        let foto = document.querySelector(".imagen-receta");
        let categorias = document.querySelector(".categoria");

        nombre.innerText = `${receta.name}`;
        instrucciones.innerText = `Instrucciones: ${receta.instructions}`;
        tiempoCoccion.innerText = `Tiempo_de_coccion: ${receta.prepTimeMinutes}`;
        foto.src = receta.image;

        if (receta.tags && receta.tags.length > 0){
            categorias.innerHTML = `Categorias: ${receta.tags.join(",")}`;
        } else {
            categorias.innerHTML = "Categoria: no especificada";
        }


        
    })
    .catch(function(error){
        console.log("error: ", error);
    })

