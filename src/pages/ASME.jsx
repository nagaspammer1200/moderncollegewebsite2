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

const ASME = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>American Society of Mechanical Engineers</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3">
                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b>ASME</b></h3></div>
                <div className={darkMode?"mb-5 text-secondary text-info ps-3 textcontainer4":"mb-5 text-secondary ps-3 textcontainer4"}><p>ASME GECBH is the official student chapter of the American Society of Mechanical Engineers (ASME), in Government Engineering College, Barton Hill. ASME is deeply rooted in its strong and rich history of accomplishment, impact and passion for its mission to advance the field of engineering for the benefit of humankind. At ASME GECBH, we try to live up to international standards and bring in an integrated approach into our college activities, combining both engineering command and practical know how through numerous events, workshops, competition, classes and so on.</p></div>
                <div className="mb-5 asmeimage"><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/asme1.jpg?alt=media&token=fa47d39a-7a94-40a5-8039-0a3afd589fd0" width="450px" height="350px" alt="ASME Meeting" /></div>
                <div className="mb-5 p-3 text-primary"><h3><b>Contact Info:</b></h3></div>
                <div className="mb-5 p-3 d-flex gap-5 asmecontactcontainer">
                  <div className={darkMode?"text-info bg-dark border-white border border-1 p-3 mb-5 textcontainer4":"text-black bg-success rounded p-3 mb-5 textcontainer4"}><p><b>Sreekiran S</b> <br /><br />Chairman, ASME GECBH<br /><br />+91 85473 24352 <br /><br /></p></div>
                  <div className={darkMode?"text-info bg-dark p-3 mb-5 border-white border border-1 textcontainer4":"text-black bg-warning p-3 mb-5 rounded textcontainer4"}><p><b>Prajeesh P</b><br /><br />Vice Chairman, ASME GECBH<br /><br />+91 90614 57867</p></div>
                </div>
                <div className="mb-5 asmeimage"><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/asme2.jpg?alt=media&token=fdfa4683-4080-42f6-9e88-71c454980f29" width="85%" alt="ASME Project Members" /></div>
             
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default ASME

