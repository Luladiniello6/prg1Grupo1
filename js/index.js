fetch("https://dummyjson.com/recipes")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log (data)
    let recetas = data.recipes
    let receta = " "
    let listaRecetas = document.querySelector('.lista-recetas');
    
      for (let i = 0; i < recetas.length; i++) {
        receta += `
                  <article class="cadaReceta">
                    <img src=${recetas[i].image} alt="" ></img>
                    <h1> ${recetas[i].name}</h1>
                    <p> ${recetas[i].difficulty}</p>
                    <a href="/recipes/${recetas[i].id}"></a>
                  </article>
        `
      }
      
      console.log(receta);
      listaRecetas.innerHTML = receta
  })

  .catch(function(error){
    console.log("error;",error)
  });

  let re = document.querySelector(".cadaReceta");
    re.style.flexWrap = "wrap";