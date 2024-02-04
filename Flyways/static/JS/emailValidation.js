var emailContact = document.getElementById("email");
var errorMessage3 = document.getElementById("error-message3");

//Exception for email-Contact
emailContact.addEventListener("blur", function() {
  // Regular expression to match a valid email format
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var enteredEmail = emailContact.value;
  if (!emailPattern.test(enteredEmail)) {
    emailContact.style.border = "2px solid red";
    errorMessage3.style.display = "block";
  } else {
    emailContact.style.border = "";
    errorMessage3.style.display = "none";
  }
});
