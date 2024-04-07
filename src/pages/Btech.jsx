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

const Btech = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Bachelor of Technology</h2></div>
          <div className={darkMode?"d-flex personcontainer3 bg-dark border-top border-1 border-primary":"d-flex personcontainer3"}>
            <div className="rulecontainer3">
               <div className={darkMode?"mb-5 mt-2 text-success":"mb-5 mt-2"}><h6>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL OFFERS FIVE B.TECH DEGREE COURSES:</h6></div>
               <div className={darkMode?"text-info":"text-primary"}>
                    <ol>
                        <li className="mb-3"><h6><a href="/electronicsandcommunication">B.Tech in Electronics and Communication Engineering</a></h6></li>
                        <li className="mb-3"><h6><a href="/electricalandelectronics">B.Tech in Electronics and Electronics Engineering</a></h6></li>
                        <li className="mb-3"><h6><a href="/civilengineering">B.Tech in Civil Engineering</a></h6></li>
                        <li className="mb-3"><h6><a href="/mechanicalengineering">B.Tech in Mechanical Engineering</a></h6></li>
                        <li className="mb-5"><h6><a href="/informationtechnology">B.Tech in Information Technology</a></h6></li>
                    </ol>
               </div>
               <div className={darkMode?"text-success":"text-primary"}>
                    <p>Admission to all the seats are based on the Entrance Examination Conducted by the Commissioner for Entrance Examinations, Government of Kerala which ensures only meritorious students join the institution</p>
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

export default Btech

