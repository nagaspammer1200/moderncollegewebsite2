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

const PDean = () => {
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
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>PG Dean</h2></div>
          <div className={darkMode?"d-flex gap-1 personcontainer pt-3 text-info bg-dark border-top border-primary border-1":"d-flex  pt-3 gap-1 personcontainer"}>
            <PersonDetails personimage="src/images/people/itdean.jpg" personname="Dr. Vijayanand K. S." persondepartment="Professor, Dept. of Information Technology" personnumber="+91-&nbsp;9447865892" personemail="ksvijayanand@gmail.com" persondesignation="Professor, Department of Information Technology, Government Engineering College, Bartonhill, Trivandrum." personphd="– PhD in Security in Cloud Computing, Anna University"
            personmtech="– M.Tech ,Computer Scie nce, Anna University " personbtech="– B.Tech IT , CUSAT" personresearch=", Research Area: Cloud Computing" personprofile="http://gecbh.ac.in/media/docs/Faculty_Profile-Dr.Vijayanand_K_S-with_foto.pdf" />
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default PDean

