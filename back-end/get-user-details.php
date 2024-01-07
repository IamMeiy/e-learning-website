<?php
// Include your database connection code
include('db_connection.php');


header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Credentials: true");


// Fetch user details
$sql = "SELECT id, email, name, mobile FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $userDetails = array();

    while ($row = $result->fetch_assoc()) {
        $userDetails[] = $row;
    }

    echo json_encode(['userDetails' => $userDetails]);
} else {
    echo json_encode(['userDetails' => []]);
}

$conn->close();
?>
