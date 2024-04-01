import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Departments = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Departments</h2></div>
          <div className="personcontainer4">
            <div>
              <div className="m-5 p-4 shadow text-success">
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/informationtechnology">Information Technology</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/mechanicalengineering">Mechanical Engineering</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/electronicsandcommunication">Electronics & Communication Engineering</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/electricalandelectronics">Electrical & Electronics Engineering</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/civilengineering">Civil Engineering</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/generalscience">General Science</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/physicaleducation">Physical Education</a></div>
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

export default Departments

