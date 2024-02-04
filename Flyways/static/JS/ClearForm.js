
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Clear Form" button
    var clearFormBtn = document.getElementById('clearFormBtn');
    if (clearFormBtn) {
        clearFormBtn.addEventListener('click', function() {
            // Get the form element and reset it
            var form = document.querySelector('form');
            if (form) {
                form.reset();
            }
        });
    }
});

