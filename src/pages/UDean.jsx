import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import "../assets/Home.css"
import "../assets/About.css"
import AnnouncementsBar from '../components/AnnouncementsBar'

const UDean = () => {
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex gap-1 personcontainer">
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

