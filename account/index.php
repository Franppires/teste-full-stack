<?php
//erro de CORS 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Max-Age: 3600");

// Inclua o arquivo de conexão
include('../index.php');

// Array para armazenar a resposta
$response = array();

// Recupere os dados do formulário e faça a validação 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $password = $_POST["password"];
  $confirm = $_POST["confirm"];

  // Verifique se o nome ou e-mail já estão cadastrados
  $checkQuery = "SELECT * FROM users WHERE name = '$name' OR email = '$email'";
  $result = mysqli_query($mysql, $checkQuery);

  if (mysqli_num_rows($result) > 0) {
    $response["status"] = "error";
    $response["message"] = "Nome ou e-mail já cadastrados. Por favor, escolha outros dados.";
  } else {
    // Inserção de dados 
    $query = "INSERT INTO users (name, email, phone, password, confirm) VALUES ('$name', '$email', '$phone', SHA2('$password', 256), SHA2('$confirm', 256))";

    // Salva dados no banco de dados 
    if (mysqli_query($mysql, $query)) {
      $response["status"] = "success";
      $response["message"] = "Cadastro realizado com sucesso.";
    } else {
      $response["status"] = "error";
      $response["message"] = "Erro ao cadastrar. Por favor, tente novamente.";
    }
  }
}

// Saída da resposta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
