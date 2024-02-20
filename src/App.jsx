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
      </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App
