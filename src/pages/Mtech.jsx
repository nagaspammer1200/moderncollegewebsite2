import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Mtech = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Master of Technology</h2></div>
          <div className={darkMode?"d-flex personcontainer3 bg-dark border-top border-1 border-primary":"d-flex personcontainer3"}>
            <div className="rulecontainer3">
               <div className={darkMode?"mb-5 mt-2 text-success textcontainer4":"mb-5 mt-2 textcontainer4"}><h6>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL OFFERS SIX M.TECH DEGREE COURSES:</h6></div>
               <div className={darkMode?"text-info textcontainer6":"text-primary textcontainer6"}>
                    <ol>
                        <li className="mb-3"><h6><b>M.Tech in Network Engineering (IT)</b></h6></li>
                        <li className="mb-3"><h6><b>M.Tech in Signal Processing (ECE)</b></h6></li>
                        <li className="mb-3"><h6><b>M.Tech in Machine Design (ME)</b></h6></li>
                        <li className="mb-3"><h6><b>M.Tech in Power Systems and Control (EE)</b></h6></li>
                        <li className="mb-3"><h6><b>M.Tech in Power Electronics and Drives (EE)</b></h6></li>
                        <li className="mb-5"><h6><b>M.Tech in Translational Engineering (TPLC)</b></h6></li>
                        
                    </ol>
               </div>
               <div className={darkMode?"text-success textcontainer4":"text-primary textcontainer4"}>
                    <p>The duration of the M. Tech programme is two years . As per the AICTE norms, the annual intake of PG course is eighteen. Admission to the PG programme is done through the Centralised Admission Process by the Directorate of Technical Education. All the students need to pay the fees only at the Government rate.</p>
               </div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Mtech

