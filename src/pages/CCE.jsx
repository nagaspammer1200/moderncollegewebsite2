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

const CCE = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Continuing Education Cell </h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3 ms-4">
                <div className={darkMode?"mb-5 text-white":"mb-5"}><b>1. Regular Course Offered Under CCE</b></div>
                <div className={darkMode?"mb-5 ms-4 text-info":"mb-5 ms-4"}><p><div className="text-success"><a href="/adam">Advanced Diploma In Automative Mechatronics(ADAM)</a></div> In Collaboration With Mercedes Benz, Germany</p></div>
                <div className={darkMode?"mb-5 text-white":"mb-5"}><b>2. Courses/Coaching Classes Undertaken By The CCE</b></div>
                <div className={darkMode?"mb-5 ms-4 text-info":"mb-5 ms-4"}><p>Coaching Classes for Gate Examination for Civil, Mechanical, Electronics & Communication. Etc.Short Term Courses for Soil Testing, AUTOCAD , Surveying Etc. (Under Civil Department) Short Term Courses For Piping Engineering (Under Mechanical)</p></div>
                <div className={darkMode?"mb-5 text-white":"mb-5"}><b>3. Testing Facilities</b></div>
                <div>
                    <div className={darkMode?"mb-5 text-white":"mb-5"}>Civil Engineering</div>
                    <div className={darkMode?"p-2 text-info":"p-2"}>
                      <div className={darkMode?"text-warning ms-3":"text-success ms-3"}><p><i className="bi bi-suit-diamond-fill me-3"></i>Strength Of Concrete,Cement <br /><i className="bi bi-suit-diamond-fill me-3"></i>Steel Reinforcement Test <br /><i className="bi bi-suit-diamond-fill me-3"></i>Mixed Design <br /><br /></p></div>
                    </div>
                </div>
                <div>
                    <div className={darkMode?"mb-5 text-white":"mb-5"}>Mechanical Engineering</div>
                    <div className={darkMode?"p-2 text-info":"p-2"}>
                      <div className={darkMode?"text-warning ms-3":"text-success ms-3"}><p><i className="bi bi-suit-diamond-fill me-3"></i>Computerised Material Test Sytem(UTM)</p></div>
                    </div>
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

export default CCE

