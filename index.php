<?php
// conexão com banco
$dbHost = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "beercraft";

$mysql = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($mysql->connect_error) {
  echo "Error: " . $mysql->connect_error;
}  

?>
