var chatBody = document.getElementById("chat-body");
var previousAnswerBubble = null;

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value.trim();

    if (userMessage === "") {
        return;
    }

    var userBubble = document.createElement("div");
    userBubble.className = "user-bubble";
    userBubble.textContent = userMessage;

    chatBody.appendChild(userBubble);
    userInput.value = "";

    if (userMessage.toLowerCase() === "hello") {
        showWelcomeMessageAndQuestions();
    } else {
        showGenericResponse();
    }
}

function showWelcomeMessageAndQuestions() {
    clearChat();

    var welcomeMessage = "Welcome to the Airline reservation System! ";
    var questions = [
        "What flights are available today?",
        "How do I make a reservation?",
        "What is the baggage allowance?",
        "Can I change my reservation?",
    ];

    displayBotMessage(welcomeMessage);

    questions.forEach(function (question, index) {
        displayQuestion(question);
    });
}

function showGenericResponse() {
    clearChat();

    var genericResponse = "I'm sorry, I didn't understand that. Type 'hello' to start.";
    displayBotMessage(genericResponse);
}

function handleQuestionSelection(selectedQuestion) {
    clearPreviousAnswer();

    // Display an appropriate answer based on the selected question
    var answer;
    switch (selectedQuestion) {
        case "What flights are available today?":
            answer = "We have flights available to various destinations today. Please provide more details, such as your departure city and destination, for accurate information.";
            break;
        case "How do I make a reservation?":
            answer = "To make a reservation, you can visit our website or contact our customer service. Let me know if you need assistance with a specific reservation.";
            break;
        case "What is the baggage allowance?":
            answer = "The baggage allowance varies depending on the airline and ticket class. Could you please specify the airline you are interested in?";
            break;
        case "Can I change my reservation?":
            answer = "Yes, you can typically change your reservation, but it depends on the airline's policy and the type of ticket you purchased. Please provide your reservation details for more information.";
            break;
        default:
            answer = "I'm sorry, I didn't understand that question.";
    }

    displayBotMessage(answer);
}

function clearPreviousAnswer() {
    if (previousAnswerBubble) {
        chatBody.removeChild(previousAnswerBubble);
        previousAnswerBubble = null;
    }
}

function displayBotMessage(message) {
    var botBubble = document.createElement("div");
    botBubble.className = "bot-bubble";
    botBubble.textContent = message;

    chatBody.appendChild(botBubble);
    previousAnswerBubble = botBubble;
}

function displayQuestion(question) {
    var questionBubble = document.createElement("div");
    questionBubble.className = "bot-bubble question-bubble";
    questionBubble.textContent = question;

    // Add a click event listener to handle the user's selection
    questionBubble.addEventListener("click", function (event) {
        handleQuestionSelection(event.target.textContent);
    });

    chatBody.appendChild(questionBubble);
}

function clearChat() {
    while (chatBody.firstChild) {
        chatBody.removeChild(chatBody.firstChild);
    }
    previousAnswerBubble = null;
}
