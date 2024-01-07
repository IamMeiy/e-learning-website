<?php
session_start();

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

$response = array();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Clear admin-related session data
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    $response['status'] = 'success';
    $response['message'] = 'Logout successful';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
