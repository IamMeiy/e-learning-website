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
    // Check if the request is for signup or login
    if (isset($_POST['signup'])) {
        handleSignup($conn, $_POST);
    } elseif (isset($_POST['login'])) {
        handleLogin($conn, $_POST);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid request data."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
// Close the database connection
$conn->close();

function handleSignup($conn, $formData) {
    // Signup logic here
    $email = filter_var($formData['email'], FILTER_SANITIZE_EMAIL);
    $name = filter_var($formData['uname'], FILTER_SANITIZE_STRING);
    $mobile = filter_var($formData['mobile'], FILTER_SANITIZE_STRING);
    $password = filter_var($formData['password'], FILTER_SANITIZE_STRING);
    $confirmPassword = filter_var($formData['confirmPassword'], FILTER_SANITIZE_STRING);

    // Perform form validation for signup
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

    // Insert data into the database for signup
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
}

function handleLogin($conn, $formData) {
    // Login logic here
    $email = filter_var($formData['email'], FILTER_SANITIZE_EMAIL);
    $password = filter_var($formData['password'], FILTER_SANITIZE_STRING);

    // Perform form validation for login
    if (empty($email) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "Email and password are required for login."]);
        exit;
    }

    // Check if the user exists
    $sqlCheckUser = "SELECT id,password FROM users WHERE email = ?";
    $stmtCheckUser = $conn->prepare($sqlCheckUser);
    $stmtCheckUser->bind_param("s", $email);
    $stmtCheckUser->execute();
    $stmtCheckUser->store_result();

    if ($stmtCheckUser->num_rows === 0) {
        echo json_encode(["status" => "error", "message" => "User not found. Please check your email or sign up."]);
        exit;
    }

    $stmtCheckUser->bind_result($userId, $hashedPassword);
    $stmtCheckUser->fetch();

    // Verify the password
    if (password_verify($password, $hashedPassword)) {
        // Password is correct, you can perform login actions here

        $sqlGetUserName = "SELECT name FROM users WHERE email = ?";
        $stmtGetUserName = $conn->prepare($sqlGetUserName);
        $stmtGetUserName->bind_param("s", $email);
        $stmtGetUserName->execute();
        $stmtGetUserName->bind_result($userName);
        $stmtGetUserName->fetch();

        echo json_encode(["status" => "success", "message" => "Login successful.", "user_id" => $userId, "user_name" => $userName]);
        
        
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid password. Please try again."]);
    }

    $stmtCheckUser->close();
}
?>
