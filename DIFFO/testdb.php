<?php
include 'db.php'; // Make sure to include your db.php file

// Your connection code is already in db.php
// You can perform a simple query to test

$result = $conn->query("SELECT * FROM Users"); // Adjust according to your tables

if ($result->num_rows > 0) {
    // Output data for each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close(); // Close the connection
?>
