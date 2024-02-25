import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Canteen = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Collge Canteen</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>Collge Canteen</h3></div>
                <div className="mb-5 p-3"><p>TOur Canteen, an important part of college life, It tends to be the most popular place on campus, not only for physical refreshment but also for students chatting, gossiping, discussion and even work on assignments and projects. <br />The Canteen is a small building with a seating capacity of hundred members have separate area for the staff and students. A variety of refreshments and meals are available here.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Canteen

