import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Mtech = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Master of Technology</h2></div>
          <div className="d-flex personcontainer3">
            <div className="rulecontainer3">
               <div className="mb-5 mt-2"><h6>GGOVERNMENT ENGINEERING COLLEGE, BARTONHILL OFFERS SIX M.TECH DEGREE COURSES:</h6></div>
               <div className="text-primary">
                    <ol>
                        <li className="mb-3"><h6>M.Tech in Network Engineering (IT)</h6></li>
                        <li className="mb-3"><h6>M.Tech in Signal Processing (ECE)</h6></li>
                        <li className="mb-3"><h6>M.Tech in Machine Design (ME)</h6></li>
                        <li className="mb-3"><h6>M.Tech in Power Systems and Control (EE)</h6></li>
                        <li className="mb-3"><h6>M.Tech in Power Electronics and Drives (EE)</h6></li>
                        <li className="mb-5"><h6>M.Tech in Translational Engineering (TPLC)</h6></li>
                        
                    </ol>
               </div>
               <div className="text-secondary">
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

