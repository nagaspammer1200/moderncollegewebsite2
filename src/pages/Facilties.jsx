import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Facilities = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Campus Facilities</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL - FACILITIES</h3></div>
                <div>
                    <ul className="p-3 list-unstyled spacelist text-dangers">
                        <div className="mb-3 text-danger"><li><a href="/centrallibrary"><i class="bi bi-link-45deg"></i>Central Library</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/centralcomputingfacility"><i class="bi bi-link-45deg"></i>Central Computing Facility</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/womenscell"><i className="bi bi-link-45deg"></i>Women Cell</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/cce"><i className="bi bi-link-45deg"></i>Continuing Education Cell</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/campuswifi"><i className="bi bi-link-45deg"></i>Campus Wi-Fi</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/cerd"><i className="bi bi-link-45deg"></i>CERD</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/languagelab"><i className="bi bi-link-45deg"></i>Language Lab</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/tbi"><i className="bi bi-link-45deg"></i>Technology Business Incubator</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/iiic"><i className="bi bi-link-45deg"></i>Industry Institute Interaction</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/video"><i className="bi bi-link-45deg"></i>Video Conferencing</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/QEEE"><i className="bi bi-link-45deg"></i>QEEE</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/hostel"><i className="bi bi-link-45deg"></i>College Hostel</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/bus"><i className="bi bi-link-45deg"></i>College Bus</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/canteen"><i className="bi bi-link-45deg"></i>Canteen</a></li></div>
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

export default Facilities

