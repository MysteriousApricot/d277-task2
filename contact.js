document.addEventListener("DOMContentLoaded", function() {
    const email1 = document.getElementById("email1");
    const email2 = document.getElementById("email2");
    const message = document.getElementById("message");
  
    email2.addEventListener("keyup", function() {
      if (email1.value === email2.value) {
        message.textContent = "Emails match!";
        message.style.color = "green";
      } else {
        message.textContent = "Emails do not match.";
        message.style.color = "red";
      }
    });
  });