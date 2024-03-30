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
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL - PROGRAMMES</h3></div>
                <div>
                    <ul className="p-3 list-unstyled spacelist text-dangers">
                        <div className="mb-3 text-danger"><li><a href="/btech"><i className="bi bi-link-45deg"></i>Bachelor of Technology (Under Graduate Programme)</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/mtech"><i className="bi bi-link-45deg"></i>Master of Technology (Post Graduate Programme)</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="http://www.tplc.gecbh.ac.in/"><i className="bi bi-link-45deg"></i>Translational research and Professional Leadership centre (TPLC)</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/adam"><i className="bi bi-link-45deg"></i>Advanced Diploma in Automotive Mechatronics (ADAM)</a></li></div>
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

export default Programmes

