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

const GS = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Department of General Science</h2></div>
          <div className={darkMode?"d-flex personcontainer3 border-top border-1 border-primary p-3 bg-dark":"d-flex personcontainer3 p-3 ms-3"}>
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The Department offers applied science subjects (mathematics, Physics, Chemistry and Humanities for all students of the institution. The institution has one Physics and one Chemistry Laboratory.</p></div>
                <div className={darkMode?"d-flex p-3 text-info bg-dark border border-white border-1 mb-5 departmentcontainer":"d-flex p-3 text-white bg-primary mb-5 departmentcontainer"}> 
                    <div className="mb-5"><img src="src/images/departments/sheeba.jpg" width="150px" height="150px" alt="Sheeba" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Sheeba G</h5></div>
                        <div><p>Assistant Professor</p></div>
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

export default GS

