import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Staffclub = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Staff Club</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>Staff Club</h3></div>
                <div className="mb-5 p-3"><p>With the aim of promoting social interaction and to cater the recreational needs of the staff, the staff club was formed in the college. Teaching, non- teaching, office and library staff are the members of the club. Participation in the major events happening in the family of members, organizing lectures on specific topics by experts, health-care programs, celebrating festivals, conducting family tour, annual family get-together etc are some of the activities of the staff club. The staff club also publishes a news letter thanima for circulation among the members.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Staffclub

