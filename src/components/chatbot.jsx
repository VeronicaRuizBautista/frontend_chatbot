import React, { useState, useEffect, useRef } from 'react';
import {MessageBox} from './messageBox.jsx';
import { Loading } from './loading.jsx';

const ChatBot = ({ onClose }) => {
  const [userMessage, setUserMessage] = useState('');
  const [allMessages, setAllMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const hasSentInitialMessage = useRef(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => {
    scrollToBottom();
  }, [allMessages, isLoading]);

  const sendMessage = async () => {
    try {
      setAllMessages((prevMessages) => ({
        ...prevMessages,
        [`user-${Date.now()}-${Math.random()}`]: userMessage
      }))
      setUserMessage('')
      setIsLoading(true)
      const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: 'user',
          message: userMessage,
        }),
      });
      console.log(userMessage)
      const data = await response.json();

      data.forEach(item => {
        setAllMessages((prevMessages) => ({
          ...prevMessages,
          [`bot-${Date.now()}-${Math.random()}`]: item.text
        }))
      });
      setIsLoading(false)
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  useEffect(() => {

    if (!hasSentInitialMessage.current) {
      const initialMessage = 'Hola';

      const sendInitialMessage = async () => {
        try {
          const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sender: 'user',
              message: initialMessage,
            }),
          });
          const data = await response.json();

          // Agregar la respuesta del bot al estado (después de enviar "Hola")
          data.forEach(item => {
            setAllMessages((prevMessages) => ({
              ...prevMessages,
              [`bot-${Date.now()}-${Math.random()}`]: item.text
            }));
          });
        } catch (error) {
          console.error('Error al enviar mensaje inicial:', error);
        }
      };

      sendInitialMessage();
      hasSentInitialMessage.current = true;
    }
  }, []);

  useEffect(() => {
    console.log("Mensajes actualizados:", allMessages);
  }, [allMessages]);
  
  return (
    <div className='font-poppins bg-gray-100 max-w-[100%] h-[500px] flex flex-col'>
      <div className='h-[20%] w-[100%] bg-white flex items-center px-5'>
        <img src="img/robot.jpg" alt="" className='h-[50px] w-[50px] bg-black rounded-full'/>
        <div>
          <h3 className='text-left text-xl font-medium ml-6'>Solvo Ai Chat</h3>
          <h4 className='text-left ml-6'>Support Agent</h4>
        </div>
        <i onClick={onClose} className='bx bx-x ml-auto bx-lg text-medium-orange cursor-pointer hover:text-dark-orange'></i>
      </div>
      <div className='h-[68%] overflow-hidden overflow-y-scroll py-7 px-5 flex flex-col gap-5'>
        {Object.entries(allMessages).map(([key, value]) => {
          return (<MessageBox key={key} sender={key.includes("user") ? "user" : "bot"} message={value} />)  
        })}
        {isLoading ? 
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <Loading />
        </div> : ""}
        <div ref={messagesEndRef}/>
      </div>
      <div className='h-[12%] w-[100%] bg-white flex justify-between items-center px-5'>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          placeholder="Escribe un mensaje"
          className='text-lg outline-none w-[90%]'
        />
        <i onClick={sendMessage} className='bx bxs-send bx-md text-medium-orange cursor-pointer hover:text-dark-orange'></i>
      </div>
    </div>
  );
};

export default ChatBot;
