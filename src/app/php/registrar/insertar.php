<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");


// Verificar si el USUARIO ya existe
$sqlVerificar = "SELECT * FROM usuario WHERE usuario = '$params->usuario'";
$resultadoVerificar = $conexion->query($sqlVerificar);

//sin ya existe el usuario sale este error:
if ($resultadoVerificar->num_rows > 0) {
    http_response_code(400);
    echo json_encode
    ("El usuario ya existe");
    exit();
}
//$ins = "INSERT INTO usuario (nombre, usuario, clave, celular, )
        //values('prueba22', 'prueba22@gmail.com', sha1('123456'), '123456789' )";

$ins = "insert into usuario(nombre, usuario, clave, celular, tipo_usuario) values('$params->nombre', '$params->usuario', sha1('$params->clave'), '$params->celular', '$params->tipo_usuario' )";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
