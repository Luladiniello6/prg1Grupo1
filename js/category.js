fetch('https://dummyjson.com/recipes/tag/Pakistani')
    .then(function(response){
        return response.json();

    })
    .then(function(data){
        console.log(data);
        let recetas = data.recipes; 
            let listaRecetas = document.querySelector(".lista-recetas");

            if (!listaRecetas) {
                console.error("El elemento con la clase .lista-recetas no existe.");
                return;
            }

            let contenido = ""; 

            for (let i = 0; i < recetas.length; i++) {
                contenido += `
                    <article>
                        <img src="${recetas[i].image}" alt="${recetas[i].title}">
                        <h1>${recetas[i].title}</h1>
                        <p>Nivel de dificultad: ${recetas[i].difficulty}</p>
                        <a href="./detalle.html?id=${recetas[i].id}">Ver detalle</a>
                    </article>
                `;
            }

            listaRecetas.innerHTML = contenido;

        let tituloCategoria = document.querySelector("#category-title");
            if (tituloCategoria) {
                tituloCategoria.textContent = `Categoría: Pakistani`;
            }
    })
    .catch(function (error) {
        console.log("Error :", error);
    });

