<?php
// Set session cookie parameters
session_set_cookie_params(60 * 60, '/', '', false, true); // 60 minutes
session_start();

include('db_connection.php');

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

$response = array();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['adminUsername'];
    $password = $_POST['adminPassword'];

    // Query to get admin details
    $stmt = $conn->prepare("SELECT id, username, email, password FROM admin WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($adminId, $adminUsername, $adminEmail, $hashedPassword);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            // Authentication successful

            $_SESSION['adminId'] = $adminId;
            $_SESSION['adminUsername'] = $adminUsername;

            // Generate and return a session identifier
            // After successful login
            $sessionId = session_id();
            setcookie('adminSessionId', $sessionId, 0, '/', '', true, true);

            $response = array('status' => 'success', 'message' => 'Login successful', 'sessionId' => $sessionId);
        } else {
            // Invalid password
            $response = array('status' => 'error', 'message' => 'Invalid password');
        }
    } else {
        // Admin not found
        $response = array('status' => 'error', 'message' => 'Admin not found');
    }

    $stmt->close();
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request method.');
}

echo json_encode($response);
?>
