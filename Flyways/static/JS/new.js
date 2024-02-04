function sendMessage() {
    // Get user input from the input field
    var userInput = document.getElementById("user-input").value;

    // Check if the user input is not empty
    if (userInput.trim() === "") {
        return;
    }

    // Send AJAX request to the server
    fetch("/send_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "user_input=" + encodeURIComponent(userInput),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Update chat body with the received messages
        var chatBody = document.getElementById("chat-body");
        if (data && data.chat_body) {
            chatBody.innerHTML += data.chat_body.map(message => `
                <div class="${message.type}-bubble">
                    ${message.type.charAt(0).toUpperCase()}: ${message.content}
                </div>`
            ).join('');
        }

        // Check if there are questions and display them
        if (data && data.chat_body && data.chat_body.some(message => message.is_question)) {
            displayQuestions();
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}
function displayQuestions() {
    // Send AJAX request to the server to get questions
    fetch("/send_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Change the content type
        },
        body: JSON.stringify({ user_input: "show_questions" }),  // Send a JSON payload
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Update chat body with the received questions
        var chatBody = document.getElementById("chat-body");
        if (data && data.chat_body) {
            chatBody.innerHTML += data.chat_body.map(message => `
                <div class="${message.type}-bubble">
                    ${message.type.charAt(0).toUpperCase()}: ${message.content}
                </div>`
            ).join('');
        }
    })
    .catch(error => {
        console.error('Error fetching questions:', error);
    });
}
