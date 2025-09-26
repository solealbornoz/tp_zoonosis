// Elementos del DOM
const accountBtn = document.getElementById('accountBtn');
const modal = document.getElementById('authModal');
const closeBtn = document.querySelector('#authModal .close');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Abrir modal al hacer clic en "Mi Cuenta"
accountBtn.onclick = function() {
  modal.style.display = 'flex';
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
};

// Cerrar modal al hacer clic en la X
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Mostrar formulario de registro
showRegister.onclick = function(e) {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
};

// Mostrar formulario de login
showLogin.onclick = function(e) {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
};

// Validación simple del formulario de registro
if (registerForm) {
  const form = registerForm.querySelector('form');
  form.addEventListener('submit', function (e) {
    const passwords = form.querySelectorAll('input[type="password"]');
    const password = passwords[0];
    const confirmPassword = passwords[1];

    if (password.value !== confirmPassword.value) {
      e.preventDefault();
      alert('Las contraseñas no coinciden');
    }
  });
}

// Animación para los items del acordeón
document.querySelectorAll('.accordion-item').forEach(item => {
  item.addEventListener('click', () => {
    item.style.transform = 'scale(1.02)';
    setTimeout(() => {
      item.style.transform = 'scale(1)';
    }, 200);
  });
});

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});