document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById("chat-body");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    // Event listener for sending user messages
    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage("sent", userMessage);
            processUserMessage(userMessage);
            userInput.value = "";
        }
    });

    // Function to add a message to the chatbox
    function addMessage(type, text) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${type}`;
        messageElement.textContent = text;
        chatBody.appendChild(messageElement);

        // Scroll to the bottom to show the latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Function to simulate bot responses (replace with actual chatbot logic)
    function processUserMessage(userMessage) {
        // Simulate a bot response (replace this with actual chatbot logic)
        setTimeout(function () {
            const botResponse = "I received your message: " + userMessage;
            addMessage("received", botResponse);
        }, 1000);
    }
});
