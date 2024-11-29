let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultado = queryStringObj.get('buscador');
console.log("resultado: ", resultado);

let url = `https://dummyjson.com/recipes/search?q=${resultado}`;
console.log("url: ", url);

let listaRecetas = document.querySelector(".resultados");

let tituloBuscador = document.querySelector("#titulo-resultados");

tituloBuscador.innerText = `Resultados de búsqueda para: ${resultado}`;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let recetas = data.recipes;
            let contenido ="";
        
            for (let i = 0; i< recetas.length; i++){
                contenido +=`
                    <article>
                        <img src="${recetas[i].image}" alt="${recetas[i].name}" style="width:100%;">
                        <h1>${recetas[i].name}</h1>
                        <button><a href="receta.html?id=${recetas[i].id}>VER</a><button>
                    </article>
                `
            }
            listaRecetas.innerHTML= contenido;
        })
        .catch(function(error){
            console.log("error: ", error);
        })