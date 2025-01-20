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
      console.log(userMessage)
      setUserMessage('')
      console.log(userMessage)
      // Procesar la respuesta del bot
      const data = await response.json();

      // Verificar si hay múltiples respuestas
      let botMessage = '';
      data.forEach(item => {
        if (item.text) {
          botMessage += item.text + ' ';
        }
      });

      setBotResponse(botMessage.trim());
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };


  return (
    <div className='bg-gray-100 w-[500px] h-[500px] border flex flex-col'>
      <div className='h-[20%] w-[100%] bg-white flex items-center px-10'>
        <img src="" alt="" className='h-[50px] w-[50px] bg-black rounded-full'/>
        <h3 className='text-xl font-medium ml-6'>Solvo Ai Chat</h3>
      </div>
      <div className='h-[68%]'>
        {botResponse && <div><strong>Bot:</strong> {botResponse}</div>}
      </div>
      <div className='h-[12%] w-[100%] bg-white flex justify-between items-center px-5'>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Escribe un mensaje"
          className='text-lg'
        />
        <button onClick={sendMessage} className='bg-transparent'><i className='bx bxs-send bx-md'></i></button>
      </div>
    </div>
  );
};

export default ChatBot;
