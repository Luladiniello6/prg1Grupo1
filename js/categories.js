fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(JSON.stringify(data,null,4))

        let tags = data;

        let listaRecetas = document.querySelector(".lista-recetas");

        if (!listaRecetas) {
            console.error("El elemento con la clase .lista-recetas no existe.");
            return;
        }

        let contenido = "";

        for (let i = 0; i < tags.length; i++) {
            contenido += `
                <article>
                    <a href="./category.html?id=${tags[i].id}">${tags[i]}</a>
                </article>
            `
        };

        listaRecetas.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error("Error: ", error);
    });
