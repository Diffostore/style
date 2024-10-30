


<script>
  // Initialize EmailJS with your public key
  emailjs.init("your_public_key");

  function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs
      .send("service_id", "template_id", templateParams)
      .then(
        () => alert("Email sent successfully!"),
        (error) => alert("Failed to send email: " + JSON.stringify(error))
      );
  }
</script>