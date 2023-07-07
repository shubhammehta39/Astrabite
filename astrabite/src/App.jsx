
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import About from './components/About'
import Home from './components/Home';
import Services from './components/Services';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/services" element={<Services/>} />

      </Routes>  
    </Router>
    </>
  )
}

export default App
