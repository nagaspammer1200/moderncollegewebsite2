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

const SIADean = () => {
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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Student Dean and International Affairs</h2></div>
          <div className={darkMode?"d-flex gap-1 personcontainer pt-3 text-info bg-dark border-top border-primary border-1":"d-flex  pt-3 gap-1 personcontainer"}>
            <PersonDetails personimage="src/images/people/shan.jpeg" personname="Dr. Shamna H. R." persondepartment="Professor, Dept. of Information Technology" personnumber="+91 9446422003" personemail="shamna.hr@gecbh.ac.in" persondesignation="Professor , Department of Information Technology, Government Engineering College, Bartonhill, Trivandrum." personphd="– Ph.D from NIT Calicut"
            personmtech="– ME in CSE" personbtech="– B.Tech in IT" personprofile="http://gecbh.ac.in/media/docs/Shamna_CV_New.pdf" />
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default SIADean

