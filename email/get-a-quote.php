<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    /*
    Note: 1. Change the email where you want to receive the form data at line number 13 ($sendTo)
          2. Change the email at line number 31 (This email should match your domain name. You can put any email like noreply@saansud.com)
    */
    // Get form data
    $fName = $_POST['firstName'];
    $lName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $location = $_POST['location'];
    $sendTo = 'info@saansud.com';
    $subject = 'Saansud - Quote Form';
    //$message = 'Sender email: ' . $email;
    $message = "
    Hello,

    You have received a new submission. Below are the details:

    First Name: $fName
    Last Name: $lName
    Email: $email
    Phone: $phone
    Location: $location

    Best regards,
    Your Website Team
    ";
    // Set up email headers
    $headers = "From: noreply@pixelwise.studio"; // Replace with your sender email (should be match with the site domain Ex: noreply@example.com)

    // Send the email
    $result = mail($sendTo, $subject, $message, $headers);

    // Check if the email was sent successfully
    if ($result) {
        echo "Thank you. The form is sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>