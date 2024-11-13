let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let menuLinks = document.querySelectorAll('.navlist a');

// Toggle the menu on menu icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Close the menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// Close the menu when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});

document.getElementById("en-venta").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    // Desplazamiento suave hacia la sección con ID 'productos'
    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("novedades").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    // Desplazamiento suave hacia la sección con ID 'productos'
    document.getElementById("selling").scrollIntoView({
        behavior: "smooth"
    });
});

// Referencias
let userIcon = document.querySelector('.ri-user-line');
let authModal = document.getElementById('auth-modal');
let authClose = document.getElementById('auth-close');
let registerLink = document.getElementById('register-link');
let loginLink = document.getElementById('login-link');
let loginForm = document.getElementById('login-form');
let registerForm = document.getElementById('register-form');

// Función para reiniciar el formulario al estado inicial (mostrar inicio de sesión)
function resetAuthModal() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}

// Mostrar el modal y reiniciar al hacer clic en el icono de usuario
userIcon.onclick = () => {
    resetAuthModal(); // Reinicia el formulario antes de mostrarlo
    authModal.style.display = 'flex';
};

// Cerrar el modal al hacer clic en la 'x'
authClose.onclick = () => {
    authModal.style.display = 'none';
};

// Cambiar a formulario de registro
registerLink.onclick = (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
};

// Cambiar a formulario de inicio de sesión
loginLink.onclick = (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
};

// Ocultar modal al hacer clic fuera del contenido
window.onclick = (event) => {
    if (event.target == authModal) {
        authModal.style.display = 'none';
    }
};
