fetch('https://dummyjson.com/recipes/tags')
.then(function (response) {
    return response.json();
})
.then( function (data){
    console.log(data);
    let tags = data;
    let listaRecetas = document.querySelector(".lista-recetas");
    
    if (!listaRecetas) {
        console.error("El elemento con la clase .lista-recetas no existe.");
        return;
    }

    let categorias = "";
    
        for (let i = 0; i <tags.length; i ++){
            categorias +=`
                <article>
                    <img src= ${tags[i].image} alt=''>
                    <h1> <a href="./category.html?id=${tags[i].id}"> name: ${tags[i].name} </a> </h1>
                    <p> Status:${tags[i].status} </p>
                </article>
            `
        }
        
        listaRecetas.innerHTML = categorias
    })
.catch(function(error) {
    console.log("error: ", error);    
})
    