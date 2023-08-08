
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import MaintainancePg from './components/MaintainancePg';
const App = () => {

  const isUnderMaintenance = true;

  
  if (isUnderMaintenance) {
    return <MaintainancePg />;
  }

  return (
    
      <div>
        <Navbar />
        <div id='aboutlink'>
          <About id='aboutlink' />
        </div>
        <div id='homelink'>
          <Home id='homelink' />
        </div>
        <div id='teamlink'>
          <OurTeam id='teamlink' />
        </div>
        <div id='servicelink'>
          <Services id='servicelink' />
        </div>
        <div id='contactlink'>
          <Contact id='contactlink' />
        </div>
      </div>
    


  )
}

export default App
