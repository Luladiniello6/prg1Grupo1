formRegistro = document.querySelector(".form-registro")

let fullName = document.querySelector("#nombre");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#rePassword");

let errorFullName = document.querySelector(".divNombre");
let errorEmail = document.querySelector(".divEmail");
let errorPhone = document.querySelector(".divTelefono");
let errorPassword = document.querySelector(".divPass");
let errorRePassword = document.querySelector(".divRe");

let emptyErrorMessage = "Por favor complete el campo";
let validacion = true
formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();
    if (fullName.value == "") {
      errorFullName.style.display = "block";
      errorFullName.style.color = "red"
      errorFullName.innerText = emptyErrorMessage;
      validacion = false;
    } else {
      errorFullName.style.display = "none";
      validacion = true;
    }
    if (email.value == "") {
      errorEmail.style.display = "block";
      errorEmail.style.color = "red"
      errorEmail.innerText = emptyErrorMessage;
      validacion = false;
    } else {
      errorEmail.style.display = "none";
      validacion = true;
    }
    if (password.value == "") {
      errorPassword.style.display = "block";
      errorPassword.style.color = "red"
      errorPassword.innerText = emptyErrorMessage;
      validacion = false;
    } else {
      errorPassword.style.display = "none";
      validacion = true;
    }
  
    if (validacion == true) {
      this.submit();
    }
  });
