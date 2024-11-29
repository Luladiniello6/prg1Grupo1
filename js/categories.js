fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

<<<<<<< HEAD

        let listaRecetas = document.querySelector(".lista-recetas");
   
=======
        let listaRecetas = document.querySelector(".categorias");
    
>>>>>>> 5f15022c13b83ff3b56bd92a13d3bb7ee0e73024
        contenido = "";


        for (let i = 0; i < data.length; i++) {
            contenido += `
                <article>
                    <a href="./category.html?category-recipe=${data[i]}">${data[i]}</a>
                </article>
            `
        };
    
        listaRecetas.innerHTML = contenido;
    })
    .catch(function (error) {
        console.error("Error: ", error);
<<<<<<< HEAD


=======
>>>>>>> 5f15022c13b83ff3b56bd92a13d3bb7ee0e73024
    });


