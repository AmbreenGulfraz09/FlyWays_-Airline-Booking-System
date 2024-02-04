document.addEventListener('DOMContentLoaded', function() {
    // Get the input fields
    var flyingFromInput = document.getElementById('flyingFrom');
    var flyingToInput = document.getElementById('flyingTo');

    // Add event listeners for the 'blur' event (when the input loses focus)
    flyingFromInput.addEventListener('blur', function() {
        validateInput(flyingFromInput);
    });

    flyingToInput.addEventListener('blur', function() {
        validateInput(flyingToInput);
    });

    function validateInput(inputElement) {
        // Trim leading and trailing whitespaces
        var inputValue = inputElement.value.trim();

        // Check if the length is less than 4 or if the field is empty
        if (inputValue.length < 4 || inputValue === '') {
            // Apply red border
            inputElement.style.border = '2px solid red';
        } else {
            // Remove red border
            inputElement.style.border = '';
        }
    }
});
