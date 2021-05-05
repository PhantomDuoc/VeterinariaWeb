document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('Tiene que escribir su nombre');
        document.formulario.nombre.focus();
        return;
    }
    var correo = document.getElementById('correo').value;
    if (correo.length < 6) {
        alert('El correo no es válido');
        return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length != 9) {
        alert('El telefono no es válido');
        return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length < 25) {
        alert('El largo mínimo de su mensaje es de 25 caracteres')
    }
    this.submit();
}