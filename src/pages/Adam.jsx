import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Adam = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-3 text-white">
            <div className="mb-3">Advanced Diploma in Automotive Mechatronics</div>
            <div className="mb-5"><h2>ADAM</h2></div>
          </div>
          <div>
            <div className="personcontainer3">
               <div  className="rulecontainer3">
                    <div className="mb-3 text-primary">Advanced Diploma in Automotive Mechatronics (ADAM)</div>
                    <div className="mb-3">
                        <p>Mercedes -Benz India Private Ltd is wholly owned subsidiary of Daimler AG, Germany with its headquarters in Pune, Maharashtra, India.</p><br />
                        <p>Mercedes-Benz has been associated with India for more than 50 years. Presently, Mercedes-Benz India’s engagement in India covers several domains:</p>
                    </div>
                    <div className="mb-3 listdiv2">
                        <ul>
                            <li className="mb-3">Local assembly & import of Mercedes-Benz cars.</li>
                            <li className="mb-3">Global sourcing of auto components.</li>
                            <li className="mb-3">Captive automotive technology research and development.</li>
                        </ul>
                    </div>
                    <div className="mb-3"><p>Advanced Diploma in Automotive Mechatronics (ADAM) course is one of the social-oriented programs initiated by Mercedes-Benz India in collaboration with prestigious Government Institutions across India.</p></div>
                    <div className="mb-3 text-primary"><h4>Syllabus for the ADAM Entrance Examination</h4></div>
                    <div className="text-success">
                        <div className="mb-3"><h6>Written Test (Total 125 Marks)</h6></div>
                        <div>
                            <ol>
                                <li className="mb-3">Basic Automotive</li>
                                <li className="mb-3">Basic Physics</li>
                                <li className="mb-3">Analytical reasoning</li>
                                <li className="mb-3">Numerical ability</li>
                                <li className="mb-3">Service Aptitude Test</li>
                                <li className="mb-3">Engineering drawing test</li>
                            </ol>
                        </div>
                    </div>
               </div>
               <div className="bg-dark p-2">
                    <div className="mb-3 text-white">Department Contact Info</div>
                    <div className="mb-3 text-success">ADAM</div>
                    <div className="mb-3 text-white">GEC <br />Barton Hill <br />Thiruvananthapuram, Kerala.</div>
                    <div className="mb-3 text-white">
                        <div className="mb-2">+1-2345-5432-45</div>
                        <div>mail@gecbh.ac.in</div>
                    </div>
                    <div className="mb-3 text-success">Mon – Fri 9:00A.M. – 5:00P.M.</div>
                    <div className="mb-3 text-white">Social Info</div>
               </div>
            </div>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Adam

