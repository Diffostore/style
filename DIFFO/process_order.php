<?php
// process_order.php

// Database connection
$servername = "localhost"; // or your server name
$username = "rot"; // your database username
$password = ""; // your database password
$dbname = "order"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$location = $_POST['location'];
$cartDetails = $_POST['cartDetails'];
$paymentMethod = $_POST['paymentMethod'];

// Insert into orders table
$sql = "INSERT INTO orders (first_name, last_name, email, phone, location, cart_details, payment_method)
        VALUES ('$firstName', '$lastName', '$email', '$phone', '$location', '$cartDetails', '$paymentMethod')";

if ($conn->query($sql) === TRUE) {
    echo "Order placed successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
