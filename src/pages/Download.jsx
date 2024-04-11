import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter.jsx'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Download = () => {

  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue2"))
  }, []);
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>News and Announcements</h2></div>
          <div className={darkMode?"personcontainer4 bg-dark border-top border-primary border-1":"personcontainer4"}>
            <div>
              <div className={darkMode?"m-5 p-4 text-info":"m-5 p-4 shadow text-success"}>
                <div className="mb-3 listanimation"><a href="https://gecbh.ac.in/uploads/APPLICATION%20FOR%20BUS%20CONCESSION.pdf">Application for Bus Concession</a></div>
                <div className="mb-3 listanimation"><a href="https://gecbh.ac.in/uploads/Application%20Format-GECBH%20Modified%20C3%20%20C2.pdf">Application for Certificates from College Office</a></div>
                <div className="mb-3 listanimation"><a href="https://gecbh.ac.in/uploads/Medical-Certificate-1.pdf">Medical Certificate</a></div>
                <div className="mb-3"><a href="https://gecbh.ac.in/uploads/Final%20Condonation%20format%20new.pdf">EOA Condonation Form</a></div>
                <div className="mb-3"><a href="https://gecbh.ac.in/uploads/RAIL-SEASON-TICKET.pdf">Application for Railway Season Ticket</a></div>
                <div className="mb-3"><a href="https://gecbh.ac.in/uploads/Semester%20&%20Course%20registration%20form.pdf">Semester and Course Registration</a></div>
                <div className="mb-3"><a href="https://docs.google.com/document/d/1LRDKM43Yp7a1NitlGOWbGXsq3J3TOxhp/edit">EOA FORM FOR SEMESTER & COURSE REGISTRATION</a></div>
                <div className="mb-3"><a href="https://gecbh.ac.in/uploads/EOA%20Report%20AICTE%202020-21.pdf0">Duty Leave Application - Student</a></div>
                <div className="mb-3"><a href="https://docs.google.com/document/d/1av1X6kO7XNAUiLDzm6eLvxys11umbi2r/edit#heading=h.gjdgxs">Wi - Fi form</a></div>
                <div className="mb-3"><a href="https://gecbh.ac.in/uploads/Property%20Nil.pdf">Property Statement - Nil</a></div>
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

export default Download

