import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Committee = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex personcontainer2">
            <div className="rulecontainer2">
                <div className="d-flex flex-column text-center">
                    <div className="mb-5 mt-3">
                        <div className="text-primary"><a href="/pta"><h6>Parent-Teacher Association</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="/ipr"><h6>Intellectual Property Right Cell</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="/antiragging"><h6>Anti-Ragging Committee</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="/grievancecell"><h6>Grievance Cell</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="/disciplinaryaction"><h6>Disciplinary Action</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="/internalcomplaints"><h6>Internal Complaints</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="/studentswelfare"><h6>Student Welfare</h6></a></div>
                    </div>
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

export default Committee

