$(document).ready(function() {
    $("#formulario").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            telefono: {
                required: true,
                number: true,
                minlength: 9
            },
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 25
            }
        },
        messages: {
            name: {
                required: "Por favor escribe tu nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            telefono: {
                required: "Por favor ingresa un número de teléfono",
                number: "Por favor ingresa solo números.",
                minlength: "El largo de tu teléfono deben ser 9 caracteres"
            },
            email: {
                required: "Por favor escribe tu correo",
                email: "El email debe estar en el formato: abc@domain.com"
            },
            textarea: {
                required: "Por favor escribe tu mensaje",
                minlength: "Tu mensaje debe ser de al menos 25 caracteres"
            }
        }
    });
});