import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import "../assets/Home.css"
import "../assets/About.css"
import AnnouncementsBar from '../components/AnnouncementsBar'

const SIADean = () => {
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex gap-1 personcontainer">
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

