import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import "../assets/Home.css"
import "../assets/About.css"
import AnnouncementsBar from '../components/AnnouncementsBar'

const RDean = () => {
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex gap-1 personcontainer">
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

