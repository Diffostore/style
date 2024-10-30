<?php
$servername = "localhost"; // Usually localhost
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "diffo_store"; // Use the database name you created

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: You can also test if the connection was successful
echo "Connected successfully to the database '$dbname'";

// Always remember to close the connection when done
// $conn->close();
?>
