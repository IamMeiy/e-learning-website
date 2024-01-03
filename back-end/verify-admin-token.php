<?php

require __DIR__ . '/vendor/autoload.php'; // Include the autoload file for JWT

use Firebase\JWT\JWT;

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405); // Method Not Allowed
    exit(json_encode(['status' => 'error', 'message' => 'Invalid request method.']));
}

// Read the token from the request body
$input = file_get_contents('php://input');
$data = json_decode($input);

if (!$data || !isset($data->token)) {
    http_response_code(400); // Bad Request
    exit(json_encode(['status' => 'error', 'message' => 'Invalid token format.']));
}

$token = $data->token;
$jwtSecret = 'your_secret_key'; // Replace with the same secret key used for token generation

try {
    // Attempt to decode the token
    $decoded = JWT::decode($token, $jwtSecret, array('HS256'));

    // Token is valid
    echo json_encode(['status' => 'success', 'message' => 'Token is valid.']);
} catch (Exception $e) {
    // Token is invalid
    http_response_code(401); // Unauthorized
    echo json_encode(['status' => 'error', 'message' => 'Token is invalid.']);
}

?>
