<?php
//erro de CORS 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Max-Age: 3600");

// Inclua o arquivo de conexão
include('../index.php');

// Recupere os dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Consulta para verificar se o email e senha correspondem a um registro no banco de dados
  $query = "SELECT * FROM users WHERE email = '$email' AND password = SHA2('$password', 256)";
  $result = mysqli_query($mysql, $query);

  if (mysqli_num_rows($result) > 0) {
    // Login bem-sucedido
    $response = array("status" => "success", "message" => "Login bem-sucedido");
    echo json_encode($response);
  } else {
    // Login falhou
    $response = array("status" => "error", "message" => "Email ou senha incorretos");
    echo json_encode($response);
  }
}
?>
