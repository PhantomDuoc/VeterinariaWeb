$(document).ready(function() {
    $('#btnSend').click(function() {
        let errores = '';

        //validar nombre
        if ($('#nombre').val() == '') {
            errores += '<p>Escriba un nombre</p>'
            $('#nombre').css("border-bottom-color", "#F14B4B")
        } else {
            $('#nombre').css("border-bottom-color", "#d1d1d1")
        }

        //validar correo
        if ($('#email').val() == '') {
            errores += '<p>Escriba un email válido</p>'
            $('#email').css("border-bottom-color", "#F14B4B")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        //validar telefono
        if ($('#telefono').val() == '') {
            errores += '<p>Escriba un telefono válido</p>'
            $('#telefono').css("border-bottom-color", "#F14B4B")
        } else {
            $('#telefono').css("border-bottom-color", "#d1d1d1")
        }

        //validar mensaje
        if ($('#mensaje').val() == '') {
            errores += '<p>Escriba un mensaje válido</p>'
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        //enviar mensaje
        if (errores == '' == false) {
            let mensajeModal = '<div class="modal-warp">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' + errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'
            $('body').append(mensajeModal)
        }
        //cerrar modal
        $("#btnClose").click(function() {
            $('.modal_wrap').remove();
        })
    })

    $("#formulario").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            telefono: {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 9
            },
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 25,
                maxlength: 250
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
                minlength: "El largo de tu teléfono deben ser 9 caracteres",
                maxlength: "El largo de tu teléfono deben ser 9 caracteres"
            },
            email: {
                required: "Por favor escribe tu correo",
                email: "El email debe estar en el formato: abc@domain.com"
            },
            textarea: {
                required: "Por favor escribe tu mensaje",
                minlength: "Tu mensaje debe ser de al menos 25 caracteres",
                maxlength: "Tu mensaje no debe tener más de 250 caracteres"
            }
        }
    });
});

function enviar_datos_ajax() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("textarea").value;

    let url = "procesar_datos.php";

    $.ajax({
        type: "post",
        url: url,
        data: {
            nombre: nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje
        },
        success: function(data) {
            $("#mostrardatos").html(data);
        }
    })
}