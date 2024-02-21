import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home';
import About from "./pages/About"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Principal from './pages/Principal';
import PDean from './pages/PDean';
import UDean from './pages/UDean';
import RDean from './pages/RDean';
import SIADean from './pages/SIADean';
import Head from './pages/Head';
import Staff from './pages/Staff';


const App = () => {
  return (
    <div>
    <BrowserRouter> 
      <Routes> 
        <Route Index element={<Home/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/principal" element={<Principal/>}/>
        <Route path="/pgdean" element={<PDean/>}/>
        <Route path="/ugdean" element={<UDean/>}/>
        <Route path="/researchdean" element={<RDean/>}/>
        <Route path="/studentandinternationalaffairdean" element={<SIADean/>}/>
        <Route path="/hods" element={<Head/>}/>
        <Route path="/adminstaff" element={<Staff/>}/>
      </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App
