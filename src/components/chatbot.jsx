import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [socket, setSocket] = useState(null);

        useEffect(() => {
        // Conectar al servidor WebSocket
        const socketConnection = io("ws://localhost:5005");
        console.log("hii")
        socketConnection.on("connect", () => {
            console.log("Conectado al WebSocket");
    });

    socketConnection.on("message", (data) => {
        console.log("Respuesta de Rasa:", data)
        setMessages((prevMessages) => [...prevMessages, data]);
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect(); // Desconectar cuando el componente se desmonte
    };
    }, []);

    const handleSendMessage = () => {
        if (input) {
            socket.emit("message", { message: input });
            setMessages((prevMessages) => [...prevMessages, { text: input, sender: "user" }]);
            setInput("");
        }
    };

    return (
    <div>
        <h2>Chatbot</h2>
        <div className="chat-box">
            {messages.map((msg, index) => (
                <div key={index} className="message">
                {msg.text || msg}
                </div>
            ))}
        </div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
    </div>
    );
};

export default ChatBot;
