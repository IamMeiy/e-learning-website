<?php

include('db_connection.php');
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['adminUsername'];
    $password = $_POST['adminPassword'];

    // Prepare SQL statement to retrieve admin information from the database
    $sql = "SELECT id, username, password FROM admin WHERE username = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        // Log error and exit
        error_log("Error in preparing SQL statement: " . $conn->error);
        exit(json_encode(['status' => 'error', 'message' => 'Internal server error.']));
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();

    if ($stmt->error) {
        // Log error and exit
        error_log("Error in executing SQL statement: " . $stmt->error);
        exit(json_encode(['status' => 'error', 'message' => 'Internal server error.']));
    }

    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Admin with the provided username exists
        $stmt->bind_result($adminId, $adminUsername, $hashedPassword);
        $stmt->fetch();

        // Verify the provided password against the stored hashed password
        if (password_verify($password, $hashedPassword)) {
            // Authentication successful
            $jwtPayload = array(
                'adminId' => $adminId,
                'adminUsername' => $adminUsername,
                'exp' => time() + (30 * 60), // Token expiration time (30 minutes)
            );
        
            $jwtSecret = 'qwertyuiopasdfghjklzxcvbnm'; // Replace with a secure secret key
            $jwtToken = JWT::encode($jwtPayload, $jwtSecret, 'HS256');

            $response = array('status' => 'success', 'message' => 'Login successful', 'token' => $jwtToken);
        } else {
            // Invalid password
            $response = array('status' => 'error', 'message' => 'Invalid password');
        }
    } else {
        // Admin with the provided username does not exist
        $response = array('status' => 'error', 'message' => 'Invalid username');
    }

    $stmt->close();
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request method.');
}

echo json_encode($response);
?>
