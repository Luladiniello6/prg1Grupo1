
const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('.input-field[type="email"]');
const passwordInput = document.querySelector('.input-field[type="password"]');
const registerLink = document.querySelector('.register-link');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`Bienvenido, ${email}!`);
       
    }
});

registerLink.addEventListener('click', function(event) {
    if (!confirm('¿Quieres ir a la página de registro?')) {
        event.preventDefault();
    }
});
