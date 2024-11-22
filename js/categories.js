fetch('https://dummyjson.com/recipes/tags')
    .then(function (response){
        return response.json
    })
    .then(function(data){
        
        let tags = data. /*que va?*/
        let listaRecetas = document.querySelector(".lista-recetas");
        
        for (let i = 0; i < tags.length; i++){
            let categorias = "";
            categorias +=`
                <article>
                       <img src= ${tags[i].image} alt=''>
                        <h1> <a href="./category.html?id=${tags[i].id}"> Name: ${tags[i].name} </a> </h1>
                        <p>Status:${tags[i].status} </p>
                 </article>
            `
        }
        console.log(data);
            listaRecetas.innerHTML = categorias
    })
    .catch(function(error){
        console.log("error: ", error);
        
    })
    