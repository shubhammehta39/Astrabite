
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
function App() {

  return (
    <>
    <Navbar/>
    <div id='aboutlink'>
    <About id='aboutlink'/>
    </div>
    <div id='homelink'>
    <Home id='homelink'/>
    </div>
    <div id='teamlink'>
      <OurTeam id='teamlink'/>
    </div>
    <div id='servicelink'>
    <Services id='servicelink'/>
    </div>
    <div id='contactlink'>
    <Contact id='contactlink'/>
    </div>
    </>
  )
}

export default App
