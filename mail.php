<?php
$nombre = $_POST["name"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$textarea = $_POST["textarea"];

$body = "Nombre: " . $nombre
. "<br>Correo: " . $correo
. "<br>Telefono: " . $telefono
. "<br> Mensaje: " . $textarea;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer\PHPMailer.php';
require 'PHPMailer\SMTP.php';
require 'PHPMailer\Exception.php';



//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'veterinariacola@gmail.com';                     //SMTP username
    $mail->Password   = 'potito123H';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('veterinariacola@gmail.com', 'Test');
    $mail->addAddress('veterinariacola@gmail.com');     //Add a recipient

   //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Asunto';
    $mail->Body    = 'Prueba';
    $mail->send();
    echo '<script>
    alert("El mensaje se envió correctamente");
    window.history.go(-1)
    </script>';
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
}