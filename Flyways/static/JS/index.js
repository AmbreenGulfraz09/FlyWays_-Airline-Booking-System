// Get the input field element by its ID
var emailInput = document.getElementById("email-signIn");
var emailLogin = document.getElementById("email-login");
var errorMessage = document.getElementById("error-message");
var errorMessage2 = document.getElementById("error");


//Exception for email-signIn
emailInput.addEventListener("blur", function() {
  // Regular expression to match a valid email format
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var enteredEmail = emailInput.value;
  if (!emailPattern.test(enteredEmail)) {
    emailInput.style.border = "2px solid red";
    errorMessage.style.display = "block";
  } else {
    emailInput.style.border = "";
    errorMessage2.style.display = "none";
  }
});
//Exception for email-Login
emailLogin.addEventListener("blur", function() {
  // Regular expression to match a valid email format
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var enteredEmail = emailLogin.value;
  if (!emailPattern.test(enteredEmail)) {
    emailLogin.style.border = "2px solid red";
    errorMessage2.style.display = "block";
  } else {
    emailLogin.style.border = "";
    errorMessage2.style.display = "none";
  }
});