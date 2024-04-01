import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Programmes = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Programmes</h2></div>
          <div className="personcontainer4">
            <div>
              <div className="m-5 p-4 shadow text-success">
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/btech">Bachelor of Technology (Under Graduate Programme)</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/mtech">Master of Technology (Post Graduate Programme)</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/tplc">Translational research and Professional Leadership centre (TPLC)</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/adam">Advanced Diploma in Automotive Mechatronics (ADAM)</a></div>
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

export default Programmes

