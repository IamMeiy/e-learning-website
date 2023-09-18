<?php
// Include the database connection script
include('db_connection.php');

// Enable CORS for specific origins (replace '*' with your allowed origins)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

// Set the Content-Type header
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data safely using filter_input
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $name = filter_input(INPUT_POST, 'uname', FILTER_SANITIZE_STRING);
    $mobile = filter_input(INPUT_POST, 'mobile', FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    $confirmPassword = filter_input(INPUT_POST, 'confirmPassword', FILTER_SANITIZE_STRING);

    // Perform form validation
    if (empty($email) || empty($name) || empty($mobile) || empty($password) || empty($confirmPassword)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    if ($password !== $confirmPassword) {
        echo json_encode(["status" => "error", "message" => "Passwords do not match."]);
        exit;
    }

    // Check if the user already exists
    $sqlCheckUserEmail = "SELECT id FROM users WHERE email = ?";
    $sqlCheckUserMobile = "SELECT id FROM users WHERE mobile = ?";
    
    $stmtCheckUserEmail = $conn->prepare($sqlCheckUserEmail);
    $stmtCheckUserEmail->bind_param("s", $email);
    $stmtCheckUserEmail->execute();
    $stmtCheckUserEmail->store_result();

    $stmtCheckUserMobile = $conn->prepare($sqlCheckUserMobile);
    $stmtCheckUserMobile->bind_param("s", $mobile);
    $stmtCheckUserMobile->execute();
    $stmtCheckUserMobile->store_result();

    if ($stmtCheckUserEmail->num_rows > 0 && $stmtCheckUserMobile->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Both email and mobile number are already registered."]);
        exit;
    } elseif ($stmtCheckUserEmail->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Email is already registered."]);
        exit;
    } elseif ($stmtCheckUserMobile->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Mobile number is already registered."]);
        exit;
    }

    // Hash the password for security
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into the database
    $sqlInsertUser = "INSERT INTO users (email, name, mobile, password) VALUES (?, ?, ?, ?)";
    $stmtInsertUser = $conn->prepare($sqlInsertUser);
    $stmtInsertUser->bind_param("ssss", $email, $name, $mobile, $hashedPassword);

    if ($stmtInsertUser->execute()) {
        echo json_encode(["status" => "success", "message" => "Signup successful."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error occurred while signing up."]);
    }

    $stmtCheckUserEmail->close();
    $stmtCheckUserMobile->close();
    $stmtInsertUser->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
// Close the database connection
$conn->close();
?>
