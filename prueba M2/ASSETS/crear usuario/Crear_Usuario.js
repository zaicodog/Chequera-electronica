document.getElementById('form-usuario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
  
    if (nombre && correo && contrasena) {
      alert(`¡Usuario ${nombre} creado exitosamente!`);
      // Aquí puedes agregar la lógica para guardar el usuario en la base de datos o realizar otras acciones necesarias
      document.getElementById('form-usuario').reset();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  });
  