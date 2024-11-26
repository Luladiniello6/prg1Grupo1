let formulario = document.querySelector("form");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errorEmail = document.querySelector(".email-error");
let errorPassword = document.querySelector(".password-error");

let emptyErrorMessage = "El campo no puede estar vacio";
let passwordError =  "Por favor complete el campo contraseña";

email.addEventListener("submit", function (event) {
    event.preventDefault();
    erroresBool = false; 

    if (email.value === "") {
        alert(emptyErrorMessage);
        erroresBool = true;
    }
})

password.addEventListener("submit", function (event) {
    event.preventDefault();
    erroresBool = false;

    if(password.value === ""){
       alert(passwordError);
       erroresBool = true;
    }
    
})