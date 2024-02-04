document.addEventListener('DOMContentLoaded', function() {
    var checkoutBtn = document.getElementById('checkoutBtn');
    var popupShown = false;

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (!popupShown) {
                // Generate a random 6-digit ID
                var confirmationID = Math.floor(100000 + Math.random() * 900000);

                // Store the confirmation ID in localStorage
                localStorage.setItem('confirmationID', confirmationID);

                // Display a popup message
                alert('Your flight has been booked! Confirmation ID: ' + confirmationID);

                // Set the flag to true to indicate that the message has been shown
                popupShown = true;

                // Redirect to the home page
                window.location.href = "/";
            }
        });
    }
});
