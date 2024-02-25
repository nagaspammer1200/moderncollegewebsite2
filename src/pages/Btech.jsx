import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Btech = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Bachelor of Technology</h2></div>
          <div className="d-flex personcontainer3">
            <div className="rulecontainer3">
               <div className="mb-5 mt-2"><h6>GOVERNMENT ENGINEERING COLLEGE, BARTONHILL OFFERS FIVE B.TECH DEGREE COURSES:</h6></div>
               <div className="text-primary">
                    <ol>
                        <li className="mb-3"><h6>B.Tech in Electronics and Communication Engineering</h6></li>
                        <li className="mb-3"><h6>B.Tech in Electronics and Electronics Engineering</h6></li>
                        <li className="mb-3"><h6>B.Tech in Civil Engineering</h6></li>
                        <li className="mb-3"><h6>B.Tech in Mechanical Engineering</h6></li>
                        <li className="mb-5"><h6>B.Tech in Information Technology</h6></li>
                    </ol>
               </div>
               <div className="text-secondary">
                    <p>Admission to all the seats are based on the Entrance Examination Conducted by the Commissioner for Entrance Examinations, Government of Kerala which ensures only meritorious students join the institution</p>
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

export default Btech

