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

const Adam = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5":"bg-primary p-5 text-white"}>
            <div className={darkMode?"ps-5 text-warning":"bg-primary text-white"}>Advanced Diploma in Automotive Mechatronics</div>
            <div className={darkMode?"ps-5 pt-3 text-warning":"bg-primary ps-5 pt-3 text-white"}><h2>ADAM</h2></div>
          </div>
          <div>
            <div className={darkMode?"d-flex personcontainer3 bg-dark border-top border-1 border-primary":"d-flex personcontainer3"}>
               <div  className="rulecontainer3">
                    <div className={darkMode?"mb-3 text-success":"mb-3 text-primary"}>Advanced Diploma in Automotive Mechatronics (ADAM)</div>
                    <div className={darkMode?"mb-3 text-info tcontainer":"mb-3 tcontainer"}>
                        <p>Mercedes -Benz India Private Ltd is wholly owned subsidiary of Daimler AG, Germany with its headquarters in Pune, Maharashtra, India.</p><br />
                        <p>Mercedes-Benz has been associated with India for more than 50 years. Presently, Mercedes-Benz India’s engagement in India covers several domains:</p>
                    </div>
                    <div className={darkMode?"mb-3 listdiv2 text-info":"mb-3 listdiv2"}>
                        <ul>
                            <li className="mb-3">Local assembly & import of Mercedes-Benz cars.</li>
                            <li className="mb-3">Global sourcing of auto components.</li>
                            <li className="mb-3">Captive automotive technology research and development.</li>
                        </ul>
                    </div>
                    <div className={darkMode?"mb-3 text-info tcontainer":"mb-3 tcontainer"}><p>Advanced Diploma in Automotive Mechatronics (ADAM) course is one of the social-oriented programs initiated by Mercedes-Benz India in collaboration with prestigious Government Institutions across India.</p></div>
                    <div className={darkMode?"mb-3 text-success mt-5":"mb-3 text-primary mt-5"}><h4>Syllabus for the ADAM Entrance Examination</h4></div>
                    <div className={darkMode?"text-white":"text-success"}>
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
                    <div className={darkMode?"w-50 ms-5 mb-5 linkcontainerhover border border-1 border-white":"w-50 ms-5 mb-5 linkcontainerhover"}>
                      <div className="bg-dark p-4 text-center">
                        <div className={darkMode?"mb-3 text-info":"mb-3 text-white"}><h6><a href="https://drive.google.com/file/d/1jaImxN7frJI8l1Y2QpprQ3F9_jHGn51O/view?usp=sharing">Notification</a></h6></div>
                        <div className={darkMode?"mb-3 text-info":"mb-3 text-white"}><h6><a href="https://drive.google.com/file/d/1ejKJk3bXnW_WPv7Yj0qCB_1HZuhQPbRJ/view?usp=sharing">More Details</a></h6></div>
                        <div className={darkMode?"mb-3 text-info":"mb-3 text-white"}><h6><a href="https://drive.google.com/file/d/1NKM_BAjq8BbpgAfS6iv7rJrRHmUOJo9O/view?usp=sharing">Sample Questions</a></h6></div>
                      </div>
                    </div>
               </div>
               <div className={darkMode?"bg-dark p-4 border-1 border-white border":"bg-dark p-4"}>
                    <div className="mb-3 text-white">Department Contact Info</div>
                    <div className="mb-3 text-success">ADAM</div>
                    <div className="mb-3 text-white">GEC <br />Barton Hill <br />Thiruvananthapuram, Kerala.</div>
                    <div className="mb-3 text-white">
                        <div className="mb-2">+1-2345-5432-45</div>
                        <div>mail@gecbh.ac.in</div>
                    </div>
                    <div className="mb-3 text-success">Mon – Fri 9:00A.M. – 5:00P.M.</div>
                    <div className="mb-3 text-white">Social Info</div>
                    <div className="mb-3 text-success"><a href="https://www.thehindubusinessline.com/companies/mercedes-benz-celebrates-10-years-of-adam-course-in-kerala/article67849094.ece"> The Hindu businessline</a></div>
                    <div className="mb-3 text-success"><a href="https://www.thehindu.com/sci-tech/technology/gadgets/mercedes-benz-and-gecbh-celebrate-10-years-of-adam-course/article67852714.ece">The Hindu</a></div>
                    <div className="mb-3 text-success"><a href="https://www.financialexpress.com/business/express-mobility-mercedes-benz-india-gecbh-complete-10-years-of-advanced-mechatronics-course-milestone-3395641/">Financial Express</a></div>
                    <div className="mb-3 text-success"><a href="https://www.autocarpro.in/news/mercedes-benz-india-and-government-engineering-college-barton-hill-kerala-celebrate-10-years-of-automotive-mechatronics-course-119220">Autocar Professional</a></div>
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

