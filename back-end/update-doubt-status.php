<?php
// Include your database connection code
include('db_connection.php');

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Credentials: true");

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['doubtId']) && isset($input['newStatus'])) {
    $doubtId = $input['doubtId'];
    $newStatus = $input['newStatus'];

    // Update the status in the database
    $updateSql = "UPDATE Doubts SET status = ? WHERE id = ?";
    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param("si", $newStatus, $doubtId);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
}

$conn->close();
?>
