let formulario = document.querySelector(".formLogin");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

/* NO VA PORQUE ME PIDE MOSTRAR LOS ERRORES MEDIANTE ALERTS, ESTO SE USA CUANDO LO DEBO MOSTRAR A TRAVES DE DIVS
let errorEmail = document.querySelector(".email");
let errorPassword = document.querySelector(".password");
*/

let emptyEmail = "Por favor complete el campo email";
let emptyPassword = "Por favor complete el campo contraseña";


let validacion = true;
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (email.value == "") {
        alert(emptyEmail)
        validacion = false;
    }
    if (password.value == "") {
        alert(emptyPassword) 
        validacion = false;
    }
    if (validacion == true) {
        this.submit();
    }
     
    
})
      


  
  
