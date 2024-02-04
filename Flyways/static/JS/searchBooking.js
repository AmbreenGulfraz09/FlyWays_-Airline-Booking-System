document.addEventListener('DOMContentLoaded', function() {
    // Get the user input field, search button, and error message element
    var searchInput = document.getElementById('order_id');
    var searchBtn = document.getElementById('src-btn');
    var errorMessage = document.getElementById('error-message');

    // Add an event listener to the search button
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Get the user-entered ID
            var userInputID = searchInput.value;

            // Check if the entered value is a number
            if (!/^\d+$/.test(userInputID)) {
                // If not a number, update the appearance, show an error message, and stop further execution
                searchInput.style.border = '2px solid red';
                errorMessage.innerHTML = 'Enter a valid ID like: 832737';
                return;
            } else {
                // If a number, reset the input field appearance and clear the error message
                searchInput.style.border = '';
                errorMessage.innerHTML = '';
            }

            // Retrieve the stored confirmation ID from localStorage
            var storedConfirmationID = localStorage.getItem('confirmationID');

            // Check if the user-entered ID matches the stored confirmation ID
            if (userInputID === storedConfirmationID) {
                // Display a message indicating the booking is in process
                alert('Your Booking is in process.');

                // Reset the form after displaying the alert
                document.getElementById('searchForm').reset();
            } else {
                // Display a message indicating no matching booking found
                alert('No matching booking found.');
            }
        });
    }
});
