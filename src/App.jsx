import React,{ createContext,useState,useEffect } from 'react'
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
import NSS from './pages/NSS';
import IEEE from './pages/IEEE';
import ISTE from './pages/ISTE';
import CSI from './pages/CSI';
import IEDC from './pages/IEDC';
import CERD from './pages/CERD';
import IGS from './pages/IGS';
import ASME from './pages/ASME';
import Staffclub from './pages/Staffclub';
import Canteen from './pages/Canteen';
import Bus from './pages/Bus';
import TBI from './pages/TBI';
import IIIC from './pages/IIIC';
import Hostel from './pages/Hostel';
import Video from './pages/Video';
import CW from './pages/CW';
import CCE from './pages/CCE';
import WC from './pages/WC';
import FP from './pages/FP';
import SGAC from './pages/SGAC';
import DA from './pages/DA';
import IC from './pages/IC';
import SW from './pages/SW';
import RTI from './pages/RTI';
import CL from './pages/CL';
import CCF from './pages/CCF';
import Admission from './pages/Admission';
import Placement from './pages/Placement';
import GS from './pages/GS';
import PE from './pages/PE';
import IT from './pages/IT';
import ME from './pages/ME';
import EC from './pages/EC';
import EE from './pages/EE';
import CE from './pages/CE';
import BOG from './pages/BOG';
import Scholarships from './pages/Scholarships';
import Tender from './pages/Tender';
import Facilities from './pages/Facilties';
import Communities from './pages/Communities';
import Programmes from './pages/Programmes';
import Departments from './pages/Departments';
import QEEE from './pages/QEEE';
import LT from './pages/LT';
import TPCL from './pages/TPCL';

const App = () => {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div>
      <darkModeContext.Provider value={{darkMode,setDarkMode}}>
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
            <Route path="/nss" element={<NSS/>}/>
            <Route path="/ieee" element={<IEEE/>}/>
            <Route path="/iste" element={<ISTE/>}/>
            <Route path="/csi" element={<CSI/>}/>
            <Route path="/iedc" element={<IEDC/>}/>
            <Route path="/cerd" element={<CERD/>}/>
            <Route path="/igs" element={<IGS/>}/>
            <Route path="/asme" element={<ASME/>}/>
            <Route path="/staffclub" element={<Staffclub/>}/>
            <Route path="/canteen" element={<Canteen/>}/>
            <Route path="/video" element={<Video/>}/>
            <Route path="/bus" element={<Bus/>}/>
            <Route path="/tbi" element={<TBI/>}/>
            <Route path="/iiic" element={<IIIC/>}/>
            <Route path="/hostel" element={<Hostel/>}/>
            <Route path="/campuswifi" element={<CW/>}/>
            <Route path="/cce" element={<CCE/>}/>
            <Route path="/womenscell" element={<WC/>}/>
            <Route path="/formerprincipals" element={<FP/>}/>
            <Route path="/grievancecell" element={<SGAC/>}/>
            <Route path="/disciplinaryaction" element={<DA/>}/>
            <Route path="/internalcomplaints" element={<IC/>}/>
            <Route path="/studentswelfare" element={<SW/>}/>
            <Route path="/righttoinformation" element={<RTI/>}/>
            <Route path="/centrallibrary" element={<CL/>}/>
            <Route path="/centralcomputingfacility" element={<CCF/>}/>
            <Route path="/admission" element={<Admission/>}/>
            <Route path="/placement" element={<Placement/>}/>
            <Route path="/generalscience" element={<GS/>}/>
            <Route path="/physicaleducation" element={<PE/>}/>
            <Route path="/informationtechnology" element={<IT/>}/>
            <Route path="/mechanicalengineering" element={<ME/>}/>
            <Route path="/electronicsandcommunication" element={<EC/>}/>
            <Route path="/electricalandelectronics" element={<EE/>}/>
            <Route path="/civilengineering" element={<CE/>}/>
            <Route path="/boardofgoverners" element={<BOG/>}/>
            <Route path="/scholarships" element={<Scholarships/>}/>
            <Route path="/tenders" element={<Tender/>}/>
            <Route path="/departments" element={<Departments/>}/>
            <Route path="/programmes" element={<Programmes/>}/>
            <Route path="/communities" element={<Communities/>}/>
            <Route path="/facilities" element={<Facilities/>}/>
            <Route path="/QEEE" element={<QEEE/>}/>
            <Route path="/languagelab" element={<LT/>}/>
            <Route path="/tplc" element={<TPCL/>}/>
          </Routes> 
        </BrowserRouter>
      </darkModeContext.Provider>
    </div>
  )
}
export const darkModeContext = createContext();
export default App
