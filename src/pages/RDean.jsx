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

const RDean = () => {
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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Research Dean Dean</h2></div>
          <div className={darkMode?"d-flex gap-1 personcontainer pt-3 text-info bg-dark border-top border-primary border-1":"d-flex  pt-3 gap-1 personcontainer"}>
            <PersonDetails personimage="src/images/people/dinesh.jpg" personname="Dr.Dinesh Gopinath" persondepartment="Professor, Dept. of Electrical & Electronics Engineering" personnumber="+91-&nbsp;8547550783" persondesignation="Professor,Department of Electrical and Electronics Govt.Engineering College Barton Hill, Thiruvanathapuram" personprofile="http://gecbh.ac.in/media/docs/Profile_for_website_GECBH_3.docx" />
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default RDean

