document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de entrada de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar si el usuario y la contraseña son válidos (puedes agregar tu lógica de autenticación aquí)
    if (username === 'admin' && password === 'password') {
      alert('Inicio de sesión exitoso')
      // Redirigir a otra página o realizar la acción deseada tras el inicio de sesión exitoso
      window.location.href = '/ASSETS/Home/home.html';
    } else {
      alert('Nombre de usuario o contraseña no válidos');
    }
  });8
});
document.getElementById('registerBtn').addEventListener('click', redirectToRegistration);
document.getElementById('forgotPasswordBtn').addEventListener('click', redirectToForgotPassword);

function redirectToRegistration() {
  window.location.href = '/ASSETS/crear usuario/Crear_Usuario.html';
}

function redirectToForgotPassword() {
  window.location.href = '/ASSETS/Olvidaste tu Contraseña/Olvidaste_Contraseña.html';
}



