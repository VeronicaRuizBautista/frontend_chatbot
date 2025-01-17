import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chatbot from "./components/chatbot.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Solvo chatbot</h1>
        <Chatbot />
      </div>
    </>
  )
}

export default App
