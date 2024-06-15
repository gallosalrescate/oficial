document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-aportacion').addEventListener('submit', function (event) {
        event.preventDefault(); // Detener el envío del formulario por defecto

        // Redirigir a la página de confirmación
        window.location.href = './check.html';
    });
});
