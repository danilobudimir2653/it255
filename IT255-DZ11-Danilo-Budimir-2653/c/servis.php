<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');


$servername = "localhost";
$username = "root";
$password = "";
$db = "dz11";
$conn = new mysqli($servername, $username, $password, $db);





if(isset($_POST['proizvodjac']) && isset($_POST['model']) &&  isset($_POST['zapremina']) && isset($_POST['snaga'])) {

    $proizvodjac = $_POST['proizvodjac'];
    $model = $_POST['model'];
    $motor = $_POST['zapremina'];
    $snaga = $_POST['snaga'];

    $stmt = $conn->prepare("INSERT INTO automobili (proizvodjac, model, zapremina,
      snaga) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $proizvodjac, $model, $motor, $snaga);
    $stmt->execute();
    echo "ok";


}
else
{
    echo "eror";
}