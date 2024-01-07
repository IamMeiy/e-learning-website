<?php
// Include your database connection code
include('db_connection.php');

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Credentials: true");


// Fetch doubt list
$sql = "SELECT id, user_id, user_email, course_name, topic, description, status, submitted_date FROM Doubts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $doubtList = array();

    while ($row = $result->fetch_assoc()) {
        $doubtList[] = $row;
    }

    echo json_encode(['doubtList' => $doubtList]);
} else {
    echo json_encode(['doubtList' => []]);
}

$conn->close();
?>
