function sendmail(event) {
    // Prevent the default form submission
    event.preventDefault();

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_4ziknno", "template_w9blpb4", parms)
        .then(response => {
            Swal.fire({
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'Okay'
            });
            console.log(response);
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: "Failed to send email: " + error.text,
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            console.error("Error sending email:", error); // More detailed logging
        });
}
