<?php
$db_host = "localhost";       // MySQL server hostname
$db_user = "meiy";    // MySQL username
$db_pass = "meiy@1234"; // MySQL password
$db_name = "e_learning_website";   // Database name

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
