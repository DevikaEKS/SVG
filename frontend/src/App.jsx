import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Herosection from './Herosection/Herosection'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Footer/Footer';
import Mission from './Mission/Mission';
import ParticlesBackground from './ParticlesBackground';
import OverlayCards from './OverlayCards';
import CoreValues from './CoreValues/CoreValues';
import { Services } from './Services/Services';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={[< Navbar />,<Homepage/>,<Mission/>,<CoreValues/>,<OverlayCards/>,<Footer/>]}/>
  <Route path="/services" element={[<Services/>,<Footer/>]}/>
  <Route path="/contact" element={<ParticlesBackground/>}/>

 </Routes>
 </BrowserRouter>
    
    
       
  
    
    </>
  )
}

export default App
