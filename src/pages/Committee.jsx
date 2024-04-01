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
          <div className="personcontainer4">
            <div>
                <div className="m-5 p-5 shadow text-success">
                    <div className="mb-3"><a href="/pta">Parent-Teacher Association</a></div>
                    <div className="mb-3"><a href="/ipr">Intellectual Property Right Cell</a></div>
                    <div className="mb-3"><a href="/antiragging">Anti-Ragging Committee</a></div>
                    <div className="mb-3"><a href="grievancecell">Grievance Cell</a></div>
                    <div className="mb-3"><a href="/disciplinaryaction">Disciplinary Action</a></div>
                    <div className="mb-3"><a href="/internalcomplaints">Internal Complaints</a></div>
                    <div className="mb-3"><a href="/studentswelfare">Student Welfare</a></div>
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

