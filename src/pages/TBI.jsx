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

const TBI = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Technology Business Incubation Centre</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark text-info border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3 ms-4">
                <div className="mb-2"><p>Proposals invited from eligible students and alumni of Government Engineering College Bartonhill, Thiruvananthapuram for becoming technology business incubators.</p></div>
                <div className="mb-5"><p>As part of skill development initiatives of Technology Business Incubation Centre, Government Engineering College Barton Hill, help students to acquire the latest technical skills, so that they can take up industrially relevant projects effectively and to enhance their career.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default TBI

