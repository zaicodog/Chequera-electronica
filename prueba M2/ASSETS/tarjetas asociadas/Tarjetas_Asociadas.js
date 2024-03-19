// Crear arreglos vacíos para almacenar las cuentas
const cuentasPersonales = [];
const cuentasTerceros = [];

// Función para mostrar las cuentas en la página
function mostrarCuentas(listaId, cuentas) {
  const lista = document.getElementById(listaId);
  lista.innerHTML = ''; // Limpiar la lista antes de agregar las cuentas
  
  cuentas.forEach((cuenta) => {
    const listItem = document.createElement('li');
    listItem.textContent = cuenta;
    listItem.className = 'list-group-item';
    lista.appendChild(listItem);
  });
}

// Escuchar el evento de envío del formulario de tarjetas
document.getElementById('form-tarjetas').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtener los valores del formulario
  const tipo = document.getElementById('Cuenta').value;
  const numero = document.getElementById('numero-tarjeta').value;
  
  // Verificar que se hayan ingresado valores válidos
  if (tipo && numero) {
    // Crear una cadena con el formato "tipo: número"
    const cuenta = `Cuenta: ${tipo}, Numero: ${numero}`;
    
    // Agregar la cuenta al arreglo correspondiente
    cuentasPersonales.push(cuenta);
    
    // Si hay más de 1 cuentas personales, eliminar la más antigua
    if (cuentasPersonales.length > 5) {
      cuentasPersonales.shift();
    }
    
    // Mostrar las cuentas personales en la página
    mostrarCuentas('lista-tarjetas-personales',cuentasPersonales);
    
    // Reiniciar el formulario
    document.getElementById('form-tarjetas').reset();
  } else {
    alert('Por favor, complete todos los campos.');
  }
});

// Escuchar el evento de envío del formulario de cuentas de terceros
document.getElementById('form-cuentas').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtener los valores del formulario
  const banco = document.getElementById('banco').value;
  const tipoCuenta = document.getElementById('tipo-cuenta').value;
  const numeroCuenta = document.getElementById('numero-cuenta').value;
  
  // Verificar que se hayan ingresado valores válidos
  if (banco && tipoCuenta && numeroCuenta) {
    // Crear una cadena con la información de la cuenta
    const cuenta = `Banco: ${banco},Cuenta: ${tipoCuenta}, Número de Cuenta: ${numeroCuenta}`;
    
    // Agregar la cuenta al arreglo correspondiente
    cuentasTerceros.push(cuenta);
    
    // Si hay más de 5 cuentas de terceros, eliminar la más antigua
    if (cuentasTerceros.length > 5) {
      cuentasTerceros.shift();
    }
    
    // Mostrar las cuentas de terceros en la página
    mostrarCuentas('lista-cuentas-terceros', cuentasTerceros);
    
    // Reiniciar el formulario
    document.getElementById('form-cuentas').reset();
  } else {
    alert('Por favor, complete todos los campos.');
  }
});
