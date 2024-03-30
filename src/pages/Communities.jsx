import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Communities = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Campus Communities</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL - COMMUNITIES</h3></div>
                <div>
                    <ul className="p-3 list-unstyled spacelist text-dangers">
                        <div className="mb-3 text-danger"><li><a href="/ieee"><i className="bi bi-link-45deg"></i>IEEE Student Branch</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/iste"><i className="bi bi-link-45deg"></i>ISTE Student Chapter</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/nss"><i className="bi bi-link-45deg"></i>National Service Scheme</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/csi"><i className="bi bi-link-45deg"></i>Computer Society Of India</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/iedch"><i className="bi bi-link-45deg"></i>IEDC</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/cerd"><i className="bi bi-link-45deg"></i>CERD</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="igs"><i className="bi bi-link-45deg"></i>Indian Geotechnical Society</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/asme"><i className="bi bi-link-45deg"></i>ASME</a></li></div>
                        <div className="mb-3 text-danger"><li><a href="/staffclub"><i className="bi bi-link-45deg"></i>Staff Club</a></li></div>
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

export default Communities

