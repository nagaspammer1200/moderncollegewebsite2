import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter.jsx'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"

const Head = () => {

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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Head of Departments</h2></div>
          <div className={darkMode?"d-flex hodcontainer border-top border-primary border-1 p-3 bg-dark text-info":"d-flex hodcontainer p-3"}>
            <div>
                <div className="mb-4">
                        <PersonDetails personimage="default.png" personname="Sheeba G" personnumber="9847541300" personemail="sheebaben97@gmail.com"  persondesignation="Assistant Professor in Mathematics" persondept="Department of Applied Science"/>
                        <PersonDetails personimage="default.png" personname="Dr. Thulaseedharan V" personnumber="9567896655" personemail="thulaseedharanv@gmail.com"  persondesignation="Professor" persondept="Department of Civil Engineering"/>
                        <PersonDetails personimage="default.png" personname="Dr. Hari R" personnumber="9447725443" personemail="harir@gecbh.ac.in"  persondesignation="Professor" persondept="Department of Electronics and Communications Engineering"/>
                        <PersonDetails personimage="default.png" personname="Dr.Francis M Fernandez" personnumber="9074866202" personemail="francis@gecbh.ac.in"  persondesignation="Professor" persondept="Department of Electrical and Electronics Engineering"/>
                        <PersonDetails personimage="default.png" personname="Dr. Haripriya A. P" personnumber="+91 9446084495" personemail="haripriya.ap@gecbh.ac.in"  persondesignation="Associate Professor " persondept="Department of Information Technology"/>
                        <PersonDetails personimage="default.png" personname="Dr. K Bindu Kumar" personnumber="8129401020" personemail="profkbk@gecbh.ac.in"  persondesignation="Professor" persondept="Department of Mechanical Engineering"/>
                        <PersonDetails personimage="default.png" personname="Dr. Rana Prathap AO" personnumber="944743646469" personemail="ranaprathap.ao@gecbh.ac.in"  persondesignation="Assistant Professor" persondept="Department of Physical Education"/>
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

export default Head

