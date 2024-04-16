import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Video = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Video Conferencing Facility</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark text-info border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3">
                <div className="d-flex mb-5 gap-5 nsscontainer1 ms-3">
                    <div className="mb-5 p-3"><p>The video conferencing facility was officially inaugurated by <b>Sri. K. Muraleedharan</b>, MLA on <b>27th March 2015</b>.This room is equipped with LifeSize VC module, LED TV sets, LCD projectors, Audio Mixers, Microphones and Speakers.The Video Conferencing room facilitate Direct Video conferencing with 3 centers at a time with seating capacity 72 and IP based dedicated VC units.</p></div>
                    <div><img src="src/images/video.jpg" width="300px" height="250px" alt="Video Conference Hall" /></div>
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

