import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Video = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Video Conferencing Facility</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="d-flex mb-5 gap-5 nsscontainer1 ms-3">
                    <div className="mb-5 p-3"><p>The video conferencing facility was officially inaugurated by Sri. K. Muraleedharan, MLA on 27th March 2015.This room is equipped with LifeSize VC module, LED TV sets, LCD projectors, Audio Mixers, Microphones and Speakers.The Video Conferencing room facilitate Direct Video conferencing with 3 centers at a time with seating capacity 72 and IP based dedicated VC units.</p></div>
                    <div><img src="src/images/video.jpg" width="250px" height="200px" alt="Video Conference Hall" /></div>
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

export default Video

