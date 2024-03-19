document.addEventListener('DOMContentLoaded', function() {
    // Agregar un evento de escucha al formulario de depósito
    document.getElementById('checkbookForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener los valores del formulario
        var accountNumber = document.getElementById('accountNumber').value;
        var banco = document.getElementById('banco').value;
        var tipoCuenta = document.getElementById('tipo-cuenta').value;
        var amount = parseFloat(document.getElementById('amount').value); // Convertir el monto a un número

        // Obtener la fecha y hora actual
        var now = new Date();
        var date = now.toLocaleDateString();
        var time = now.toLocaleTimeString();

        // Obtener el saldo actual del elemento HTML
        var saldoActual = parseFloat(document.getElementById('saldo').textContent.replace('$', '').replace(',', ''));

        // Verificar si hay suficiente saldo para realizar el depósito
        if (saldoActual >= amount) {
            // Restar el monto del depósito al saldo actual
            var nuevoSaldo = saldoActual - amount;
            // Actualizar el saldo en la página HTML
            document.getElementById('saldo').textContent = '$' + nuevoSaldo.toFixed(2); // Mostrar el saldo con 2 decimales

            // Crear un nuevo elemento para mostrar la transacción
            var transactionElement = document.createElement('div');
            transactionElement.classList.add('transaction');
            transactionElement.innerHTML = `
                <div class="transaction-info">
                    <p>Cuenta: ${tipoCuenta}: ${accountNumber}</p>
                    <p>Banco: ${banco}</p>
                    <p>Monto: $${amount}</p>
                    <p>Fecha: ${date}</p>
                    <p>Hora: ${time}</p>
                </div>
                <div class="transaction-action">
                    <button class="cancel-transaction">Cancelar</button>
                </div>
            `;
            document.querySelector('.transaction-list').appendChild(transactionElement);

            // Ajustar el padding del contenedor de la lista de transacciones
            adjustPadding();
            
            // Mostrar un mensaje de confirmación
            alert('Se realizó el depósito correctamente.');

            // Limpiar el formulario
            document.getElementById('checkbookForm').reset();
        } else {
            // Mostrar un mensaje indicando que no hay suficiente saldo
            alert('No hay suficiente saldo para realizar el depósito.');
        }
    });

    // Agregar dinero
    document.getElementById('addMoneyForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        var addAmount = parseFloat(document.getElementById('addAmount').value); // Obtener el monto a agregar
        var saldoElement = document.getElementById('saldo'); // Seleccionar el elemento del saldo
        var saldoActual = parseFloat(saldoElement.textContent.replace('$', '').replace(',', '')); // Obtener el saldo actual
        var nuevoSaldo = saldoActual + addAmount; // Calcular el nuevo saldo
        saldoElement.textContent = '$' + nuevoSaldo.toFixed(2); // Actualizar el saldo en la página HTML

        // Obtener la fecha y hora actual
        var now = new Date();
        var date = now.toLocaleDateString();
        var time = now.toLocaleTimeString();

        // Crear un nuevo elemento para mostrar la transacción
        var transactionElement = document.createElement('div');
        transactionElement.classList.add('transaction');
        transactionElement.innerHTML = `
            <div class="transaction-info">
                <p>Depósito</p>
                <p>Monto: $${addAmount}</p>
                <p>Fecha: ${date}</p>
                <p>Hora: ${time}</p>
            </div>
            <div class="transaction-action">
                <button class="cancel-transaction">Cancelar</button>
            </div>
        `;
        document.querySelector('.transaction-list').appendChild(transactionElement);

        // Ajustar el padding del contenedor de la lista de transacciones
        adjustPadding();
        
        // Mostrar un mensaje de confirmación
        alert(`Se agregaron $${addAmount.toFixed(2)} a su saldo.`);

        // Limpiar el formulario
        document.getElementById('addMoneyForm').reset();
    });

    // Cancelar una transacción
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('cancel-transaction')) {
            var transactionElement = event.target.closest('.transaction');
            var amountNode = transactionElement.querySelector('.transaction-info p:nth-child(3)').textContent;
            var amount = parseFloat(amountNode.replace('Monto: $', ''));
            var saldoElement = document.getElementById('saldo'); // Seleccionar el elemento del saldo
            var saldoActual = parseFloat(saldoElement.textContent.replace('$', '').replace(',', '')); // Obtener el saldo actual
            var nuevoSaldo = saldoActual + amount;
            saldoElement.textContent = '$' + nuevoSaldo.toFixed(2); // Actualizar el saldo
            transactionElement.remove();
            adjustPadding(); // Ajustar el padding del contenedor de la lista de transacciones
            alert('Transacción cancelada.');
        }
    });

    // Función para ajustar el padding del contenedor de la lista de transacciones
    function adjustPadding() {
        var transactionList = document.querySelector('.transaction-list');
        var totalHeight = transactionList.scrollHeight;
        transactionList.style.paddingBottom = totalHeight + 'px';
    }
});
