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

const Facilities = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Campus Facilities</h2></div>
          <div className={darkMode?"personcontainer4 bg-dark border-top border-primary border-1":"personcontainer4"}>
            <div>
              <div className={darkMode?"m-5 p-4 text-info":"m-5 p-4 shadow text-success"}>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/centrallibrary">Central Library</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/centralcomputingfacility">Central Computing Facility</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/womenscell">Women Cell</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/cce">Continuing Education Cell</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/campuswifi">Campus Wi-Fi</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/cerd">CERD</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/languagelab">Language Lab</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/iiic">Industry Institute Interaction</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/tbi">Technology Business Incubator</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/video">Video Conferencing</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/QEEE">QEEE</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/hostel">College Hostel</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/hostel">Duty Leave Application - Student</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/bus">College Bus</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/canteen">Canteen</a></div>
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

export default Facilities

