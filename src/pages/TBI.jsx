import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const TBI = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Technology Business Incubation Centre</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>TBI</h3></div>
                <div className="mb-5 p-3"><p>Proposals invited from eligible students and alumni of Government Engineering College Bartonhill, Thiruvananthapuram for becoming technology business incubators.</p></div>
                <div className="mb-5 p-3"><p>As part of skill development initiatives of Technology Business Incubation Centre, Government Engineering College Barton Hill, help students to acquire the latest technical skills, so that they can take up industrially relevant projects effectively and to enhance their career.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default TBI

