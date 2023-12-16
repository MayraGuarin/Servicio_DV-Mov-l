<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');

$params= json_decode($json);
$id = $_GET['id'];
require("../conexion.php");


//$editar = "UPDATE into soporte(Nombre, Correo, inquietudes) values('prueba2', 'prueba2@gmail.com',  'Administrador')";

$editar = "UPDATE soporte SET Nombre='$params->Nombre', Correo='$params->Correo', inquietudes='$params->inquietudes'  WHERE id_soporte=$id";
mysqli_query($conexion, $editar) or die('no edito');


class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
?>
