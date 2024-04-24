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

const Staff = () => {

    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
      setDarkMode(localStorage.getItem("darkModeValue"))
    }, []);
    
    return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Administrative Staff</h2></div>
          <div className={darkMode?"d-flex hodcontainer border-top border-primary border-1 p-5 bg-dark text-info":"d-flex hodcontainer p-5 mt-3"}>
            <div>
                {staffList.map((movie) => (
                <div className="mb-5">
                        <PersonDetails personimage={movie.img} personname={movie.name}  personnumber={movie.pnum} personemail={movie.email} persondesignation={movie.desig2} />
                        <PersonDetails personimage="default.png" personname="Sri. Anas S" personnumber="9633633094" personemail="e2@gecbh.ac.in"  persondesignation="ESTABLISHMENT" />
                        <PersonDetails personimage="default.png" personname="Sri. Arun G R" personnumber="9037697769" personemail="arungr.18@gmail.com"  persondesignation="Driver Grade-II" />
                        <PersonDetails personimage="default.png" personname="Sri Murugan C" personnumber="8281960255" personemail="c4@gecbh.ac.in"  persondesignation="ACADEMIC" />
                        <PersonDetails personimage="default.png" personname="Dr. Shiny G" personnumber="9400006408" personemail="principal@gecbh.ac.in"  persondesignation="PRINCIPAL'S OFFICE" />
                        <PersonDetails personimage="default.png" personname="Smt. Sanooja S" personnumber="9544592657" personemail="b1@gecbh.ac.in"  persondesignation="TRANSPORTATION" />
                        <PersonDetails personimage="default.png" personname="Sri. Shajahan S" personnumber="9446218625"   persondesignation="TRANSPORTATION" />
                        <PersonDetails personimage="default.png" personname="Smt. SIndhu B S" personnumber="9497848564" personemail="h1@gecbh.ac.in"  persondesignation="HOSTEL" />
                </div>
                ))}
            </div>
                <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Staff

