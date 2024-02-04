var emailContact = document.getElementById("emailSearch");
var errorMessage3 = document.getElementById("error-message3");

// Exception for email-Contact
emailContact.addEventListener("blur", function() {
  // Regular expression to match a valid email format
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var enteredEmail = emailContact.value;

  if (!enteredEmail) {
    // If the email field is empty, show an error message
    emailContact.style.border = "2px solid red";
    errorMessage3.style.display = "block";
    errorMessage3.innerHTML = "Email address is required.";
  } else if (!emailPattern.test(enteredEmail)) {
    // If the entered email doesn't match the pattern, show an error message
    emailContact.style.border = "2px solid red";
    errorMessage3.style.display = "block";
    errorMessage3.innerHTML = "Invalid email format.";
  } else {
    // If the email is valid, reset the appearance and hide the error message
    emailContact.style.border = "";
    errorMessage3.style.display = "none";
    errorMessage3.innerHTML = "";
  }
});
