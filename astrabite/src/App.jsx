import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrowserRouter, { Router, Routes } from 'react-router-dom'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<About/>} />
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
