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
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL - DEPARTMENTS</h3></div>
                <div>
                    <ul className="p-3 list-unstyled spacelist">
                        <div className="mb-3 text-danger"><li><a href="/informationtechnology"><i className="bi bi-link-45deg"></i>Information Technology</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/mechanicalengineering"><i className="bi bi-link-45deg"></i>Mechanical Engineering</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/electronicsandcommunication"><i className="bi bi-link-45deg"></i>Electronics & Communication Engineering</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/electricalandelectronics"><i className="bi bi-link-45deg"></i>Electrical & Electronics Engineering</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/civilengineering"><i className="bi bi-link-45deg"></i>Civil Engineering</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/generalscience"><i className="bi bi-link-45deg"></i>General Science</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/physicaleducation"><i className="bi bi-link-45deg"></i>Physical Education</a></li></div>                    
                    </ul>
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

