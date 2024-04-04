import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"

const UDean = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => {
    const darkModeValue2 = localStorage.getItem("darkModeValue");
    setDarkMode(darkModeValue2)
  }, []);
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>UG Dean</h2></div>
          <div className={darkMode?"d-flex gap-1 personcontainer pt-3 text-info bg-dark border-top border-primary border-1":"d-flex  pt-3 gap-1 personcontainer"}>
            <PersonDetails personimage="src/images/people/ugdean.jpg" personname="Dr. Bijulal D." persondepartment="Professor, Dept. of Mechanical Engineering" personnumber="9645357434" personemail="bijulal.d@gecbh.ac.in"  personphd="– PhD, IIT Bombay - Industrial Engineering & Operations Research"
            personmtech="– M.Tech. - Industrial Engineering & Management, IIT Kharagpur" personbtech="– B.Tech. - Mechanical Engineering" personresearch="Research Area: Operations Reserach, IPR, General Management, Supply Chain Management, System Simulation, Metal Composites" personprofile="http://gecbh.ac.in/media/docs/DBLProfile_-single_page_2021.pdf" personspec="Specialization: Industrial Engineering & Operations Research"/>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default UDean

