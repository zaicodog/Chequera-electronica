// Simulación de datos del usuario
let usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan@example.com',
    transacciones: [
        'Compra en Amazon: $100',
        'Pago de factura de luz: $50'
        // Agrega más transacciones aquí
    ]
};

// Rellenar los campos con los datos del usuario
document.getElementById('nombre').value = usuario.nombre;
document.getElementById('correo').value = usuario.correo;

const listaTransacciones = document.getElementById('transacciones');
usuario.transacciones.forEach(transaccion => {
    const li = document.createElement('li');
    li.textContent = transaccion;
    listaTransacciones.appendChild(li);
});

