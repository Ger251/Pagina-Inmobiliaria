<?php
//llamar a los campos por sus name y guardarlos en variables
$nombre = $_POST[ 'first_name'];
$apellido = $_POST[ 'last_name'];
$email = $_POST[ 'email'];
$mensaje = $_POST[ 'message'];

//datos para el correo
$destinatario = "germanjara8@gmail.com";
$asunto = "Le Consulto desde la pagina";
// el Mensaje, configuro

$carta = "De \n $nombre  ";
$carta .= "$apellido \n ";
$carta .= "Correo : $email  \n";
$carta .= "Consulta: \ $mensaje";

//enviardo el mensaje

mail($destinatario, $asunto, $carta);
header('location: index.html');

?>