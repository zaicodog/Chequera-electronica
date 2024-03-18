document.getElementById('form-tarjetas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tipo = document.getElementById('tipo-tarjeta').value;
    const numero = document.getElementById('numero-tarjeta').value;
    
    if (tipo && numero) {
      const listItem = document.createElement('li');
      listItem.textContent = `${tipo}: ${numero}`;
      listItem.className = 'list-group-item';
      
      document.getElementById('lista-tarjetas-personales').appendChild(listItem);
      
      document.getElementById('form-tarjetas').reset();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  });
  
  document.getElementById('form-cuentas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const banco = document.getElementById('banco').value;
    const tipoCuenta = document.getElementById('tipo-cuenta').value;
    const numeroCuenta = document.getElementById('numero-cuenta').value;
    
    if (banco && tipoCuenta && numeroCuenta) {
      const listItem = document.createElement('li');
      listItem.textContent = `Banco: ${banco}, Tipo de Cuenta: ${tipoCuenta}, Número de Cuenta: ${numeroCuenta}`;
      listItem.className = 'list-group-item';
      
      document.getElementById('lista-cuentas-terceros').appendChild(listItem);
      
      document.getElementById('form-cuentas').reset();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  });
  