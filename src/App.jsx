import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pag from "./components/pag.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pag></Pag>

    </>
  )
}

export default App
