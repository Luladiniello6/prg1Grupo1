<<<<<<< HEAD
fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let listaRecetas = document.querySelector(".lista-recetas");
    
        contenido = "";

        for (let i = 0; i < data.length; i++) {
            contenido += `
                <article>
                    <a href="./category.html?id=${data[i]}">${data[i]}</a>
                </article>
            `
        };

        listaRecetas.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error("Error: ", error);

    });
=======
>>>>>>> 50ceeabe50af38a32b6ee219771c44799e13a9a1
