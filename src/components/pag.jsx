import React, { useState } from 'react';
import Chatbot from "../components/chatbot.jsx";

const Pag = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleBtn, setIsVisibleBtn] = useState(true);
    const toggleChatbot = () => {
        setIsVisible(!isVisible);
        setIsVisibleBtn(!isVisibleBtn)
    };

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center">
            <h1 className="titulo text-medium-orange pt-8">Demostración chatbot</h1>
            <div className="boxImg w-3/6 mx-aut">
                <img className="img object-contain w-full h-full" src='../../public/img/robot.jpg' alt="robot"/>
            </div>
            </div>
            {isVisibleBtn && (
                <button 
                onClick={toggleChatbot}
                className=" btn bg-medium-orange w-16 h-16 rounded-full fixed bottom-4 right-4 flex items-center justify-center cursor-pointer border-medium-orang hover:border-dark-orange hover:bg-dark-orange focus:outline-none">
                    <i className='bx bxs-bot fas fa-heart text-4xl' style={{color:'#f3f0f0'}}></i>
                </button>
            )}
            {isVisible && (
                <div className="fixed bottom-10 right-5 w-[400px] bg-white shadow-[0_0px_12px_rgba(0,0,0,0.1)] p-4 rounded-lg z-10 animate-custom-bounce">
                    <Chatbot onClose={toggleChatbot} />
                </div>
            )}
            <script type="module" src="/src/main.jsx"></script>
        </div>
    )
}
export default Pag