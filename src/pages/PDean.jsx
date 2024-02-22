import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"

const PDean = () => {
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex gap-1 personcontainer">
            <PersonDetails personimage="src/images/people/itdean.jpg" personname="Dr. Vijayanand K. S." persondepartment="Professor, Dept. of Information Technology" personnumber="+91-&nbsp;9447865892" personemail="ksvijayanand@gmail.com" persondesignation="Professor, Department of Information Technology, Government Engineering College, Bartonhill, Trivandrum." personphd="– PhD in Security in Cloud Computing, Anna University"
            personmtech="– M.Tech ,Computer Science, Anna University " personbtech="– B.Tech IT , CUSAT" personresearch=", Research Area: Cloud Computing" personprofile="http://gecbh.ac.in/media/docs/Faculty_Profile-Dr.Vijayanand_K_S-with_foto.pdf" />
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default PDean

