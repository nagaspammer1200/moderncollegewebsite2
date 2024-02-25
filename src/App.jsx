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
import Service from './pages/Service';
import Budget from './pages/Budget';
import Committee from './pages/Committee';
import PTA from './pages/pta';
import IPR from './pages/IPR';
import Rag from './pages/Rag';
import AICTE from './pages/AICTE';
import TEQIP from './pages/TEQIP';
import Download from './pages/Download';
import Btech from './pages/Btech';
import Mtech from './pages/Mtech';
import Adam from './pages/Adam';

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
        <Route path="/service" element={<Service/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/com" element={<Committee/>}/>
        <Route path="/pta" element={<PTA/>}/>
        <Route path="/ipr" element={<IPR/>}/>
        <Route path="/antiragging" element={<Rag/>}/>
        <Route path="/aicte" element={<AICTE/>}/>
        <Route path="/teqip" element={<TEQIP/>}/>
        <Route path="/download" element={<Download/>}/>
        <Route path="/btech" element={<Btech/>}/>
        <Route path="/mtech" element={<Mtech/>}/>
        <Route path="/adam" element={<Adam/>}/>
      </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App
