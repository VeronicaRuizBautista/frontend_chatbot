import React, { useState } from 'react';

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: 'user',       // ID del usuario
          message: userMessage,
        }),
      });

      // Procesar la respuesta del bot
      const data = await response.json();
      const botMessage = data[0]?.text;
      setBotResponse(botMessage);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Escribe un mensaje"
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
      {botResponse && <div><strong>Bot:</strong> {botResponse}</div>}
    </div>
  );
};

export default ChatBot;
