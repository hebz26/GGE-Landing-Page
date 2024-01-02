function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "---------",
    Password: "--------",
    To: "---------",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
