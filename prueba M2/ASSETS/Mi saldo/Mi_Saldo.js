document.getElementById('actualizar-saldo').addEventListener('click', function() {
    const nuevoSaldo = obtenerSaldoAleatorio();
    mostrarSaldoConAnimacion(nuevoSaldo);
  });
  
  function obtenerSaldoAleatorio() {
    return (Math.random() * (10000 - 1000) + 1000).toFixed(2);
  }
  
  function mostrarSaldoConAnimacion(saldo) {
    const saldoElement = document.getElementById('saldo');
    saldoElement.style.opacity = '0';
    setTimeout(() => {
      saldoElement.textContent = `$${saldo}`;
      saldoElement.style.opacity = '1';
    }, 300);
  }
  