<?php
// Include the database connection script
include('db_connection.php'); // Replace with your actual connection script

// Get the email from the request (you may receive this from a form submission)
$email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);

// Prepare and execute a query to retrieve the user's name
$sql = "SELECT name FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->bind_result($name);
$stmt->fetch();
$stmt->close();

// Check if a user with the given email exists
if (!empty($name)) {
    // User found, $name contains the user's name
    echo json_encode(["status" => "success", "name" => $name]);
} else {
    // User not found
    echo json_encode(["status" => "error", "message" => "User not found."]);
}

// Close the database connection
$conn->close();
?>
