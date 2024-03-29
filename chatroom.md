---
permalink: /chat
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatroom</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #232122;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .chatroom {
            width: 700px;
            height: 600px;
            background-color: #232122;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .chatroom-header {
            background-color: #C13A7F;
            color: #000;
            text-align: center;
            padding: 10px;
            border-bottom: 1px solid #C13A7F;
        }
        .chatroom-messages {
            max-height: 460px;
            min-height: 460px;
            padding: 8px;
            overflow-y: auto;
            background-color: #232122;
            scrollbar-width: thin; /* for Firefox */
            scrollbar-color: #232122 #232122; /* for Firefox */
        }
        .chatroom-messages::-webkit-scrollbar {
            width: 8px; /* for Chrome, Safari, and Opera */
        }
        .chatroom-messages::-webkit-scrollbar-thumb {
            background-color: #C13A7F; /* for Chrome, Safari, and Opera */
        }
        .chatroom-messages div {
            background-color: #C13A7F;
            border-radius: 5px;
            margin: 5px 0;
            padding: 5px;
            word-wrap: break-word;
        }
        .chatroom-input {
            padding: 10px;
            display: flex;
            border-top: 1px solid #FFFFFF;
        }
        input[type="text"] {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #C13A7F;
            color: #FFFFFF;
        }
        button {
            background-color: #C13A7F;
            color: #FFFFFF;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="chatroom">
        <div class="chatroom-header">
            <h1>Chatroom</h1>
        </div>
        <div class="chatroom-messages" id="chatroom-messages">
            <!-- Messages will be displayed here -->
        </div>
        <div class="chatroom-input">
            <input type="text" id="message" placeholder="Type your message" onkeypress="handleKeyPress(event)">
            <button id="send" onclick="sendMessage()">Send</button>
            <button id="toggleModeButton" onclick="toggleMode()">Toggle Mode</button>
        </div>
    </div>
    <script>
        const chatBox = document.getElementById("chatroom-messages");
        const messageInput = document.getElementById("message");
        const backendUrl = "http://127.0.0.1:8918"; // Replace with your backend URL
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message !== '') {
                const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const messageWithTimestamp = `[${timestamp}] ${message}`;
                const messageElement = document.createElement("div");
                messageElement.textContent = messageWithTimestamp;
                chatBox.appendChild(messageElement);
                messageInput.value = '';
                fetch(`${backendUrl}/api/chat/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message: messageWithTimestamp }),
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to send message');
                    }
                })
                .catch((error) => {
                    console.error("Failed to send message to the backend:", error);
                });
            }
        }
        function handleKeyPress(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        }
function displayChat() {
    fetch(backendUrl + '/api/chat/read', {
        method: "GET",
    })
    .then((response) => {
        if (response.ok) {
            return response.json(); // Parse response as JSON
        } else {
            throw new Error('Failed to retrieve chat messages'); // Handle error if necessary
        }
    })
    .then((data) => {
        chatBox.innerHTML = "";
        for (let i = data.length - 1; i >= 0; i--) {
            const messageElement = document.createElement("div");
            messageElement.textContent = data[i].message; // Ensure correct property is accessed
            chatBox.appendChild(messageElement);
        }
    })
    .catch((error) => {
        console.error("Failed to retrieve chat messages:", error);
    });
}
        function toggleMode() {
            const body = document.body;
            const chatroom = document.querySelector('.chatroom');
            const chatroomHeader = document.querySelector('.chatroom-header');
            const chatroomMessages = document.querySelector('.chatroom-messages');
            const input = document.querySelector('input[type="text"]');
            const button1 = document.getElementById('send');
            const toggleButton = document.getElementById('toggleModeButton');
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                chatroom.style.backgroundColor = '#FFC8C5';
                chatroomHeader.style.backgroundColor = '#C13A7F';
                chatroomHeader.style.color = '#000';
                chatroomMessages.style.backgroundColor = '#FFC8C5';
                input.style.backgroundColor = '#C13A7F';
                input.style.color = '#000';
                button1.style.backgroundColor = '#C13A7F';
                button1.style.color = '#FFC8C5';
                toggleButton.style.backgroundColor = '#C13A7F';
                toggleButton.style.color = '#FFC8C5';
                toggleButton.textContent = 'Dark Mode';
            } else {
                body.classList.add('dark-mode');
                chatroom.style.backgroundColor = '#232122';
                chatroomHeader.style.backgroundColor = '#C13A7F';
                chatroomHeader.style.color = '#232122';
                chatroomMessages.style.backgroundColor = '#232122';
                input.style.backgroundColor = '#C13A7F';
                input.style.color = '#232122';
                button1.style.backgroundColor = '#C13A7F';
                button1.style.color = '#232122';
                toggleButton.style.backgroundColor = '#C13A7F';
                toggleButton.style.color = '#232122';
                toggleButton.textContent = 'Light Mode';
            }
        }
        displayChat();
        setInterval(displayChat, 200);
    </script>
</body>
</html>
