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
    $sessionId = $_COOKIE['adminSessionId'] ?? null;

    if ($sessionId && session_id() === $sessionId) {
        // Admin is authenticated, fetch user-related data
        $adminId = $_SESSION['adminId'] ?? null;
        $adminUsername = $_SESSION['adminUsername'] ?? null;

        if ($adminId && $adminUsername) {
            // Return user-related data
            $response['status'] = 'success';
            $response['adminId'] = $adminId;
            $response['adminUsername'] = $adminUsername;
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Missing user-related data.';
        }
    } else {
        // Invalid session identifier
        $response['status'] = 'error';
        $response['message'] = 'Invalid session identifier.';
        $response['receivedSessionId'] = $sessionId; // Include received session ID in the response for debugging
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
