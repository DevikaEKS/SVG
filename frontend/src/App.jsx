import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Herosection from './Herosection/Herosection'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Services/Services';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Mission from './Mission/Mission';
import ParticlesBackground from './ParticlesBackground';
import OverlayCards from './OverlayCards';

function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={[<Navbar/>,<Herosection/>,<Mission/>,<OverlayCards/>,<Footer/>]}/>
  <Route path="/services" element={<Services/>}/>
 </Routes>
 </BrowserRouter>
    
    
       
  
    
    </>
  )
}

export default App
