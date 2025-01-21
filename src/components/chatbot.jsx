import React, { useState } from 'react';
import {MessageBox} from './messageBox.jsx';

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
        <div>
          <h3 className='text-left text-xl font-medium ml-6'>Solvo Ai Chat</h3>
          <h4 className='text-left ml-6'>Support Agent</h4>
        </div>
      </div>
      <div className='h-[68%] overflow-hidden overflow-y-scroll py-7 px-5 flex flex-col gap-5'>
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"bot"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
        <MessageBox sender={"user"} message={"Hola"} />
      </div>
      <div className='h-[12%] w-[100%] bg-white flex justify-between items-center px-5'>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Escribe un mensaje"
          className='text-lg outline-none'
        />
        <i onClick={sendMessage} className='bx bxs-send bx-md text-medium-orange cursor-pointer'></i>
      </div>
    </div>
  );
};

export default ChatBot;
