$(document).ready(function() {
    var chatbox = $('#chatbox');
    var toggleChat = $('#toggle-chat');
    var userInput = $('#user-input');
    var sendBtn = $('#send-btn');
    var chatBody = $('#chat-body');

    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

    toggleChat.click(function() {
        chatbox.toggleClass('minimized');
        if (chatbox.hasClass('minimized')) {
            toggleChat.text('+');
        } else {
            toggleChat.text('-');
        }
    });

    function sendMessage() {
        var userMessage = userInput.val().trim();
        if (userMessage !== "") {
            addMessage("You", userMessage);
            userInput.val("");

            // Call the OpenAI API to get a response from ChatGPT
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt: `User: ${userMessage}\nChatbot:`,
                    max_tokens: 50
                })
            })
            .then(response => response.json())
            .then(data => {
                const chatbotResponse = data.choices[0].text;
                addMessage("Chatbot", chatbotResponse);
            })
            .catch(error => console.error(error));
        }
    }

    sendBtn.click(function() {
        sendMessage();
    });

    userInput.on('keydown', function(event) {
        if (event.keyCode === 13) { // Enter key
            sendMessage();
        }
    });

    function addMessage(sender, message) {
        var messageElement = $('<div class="message"></div>');
        messageElement.text(sender + ": " + message);
        chatBody.append(messageElement);
    }
});
