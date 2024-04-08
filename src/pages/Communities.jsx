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

const Communities = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Campus Communities</h2></div>
          <div className={darkMode?"personcontainer4 bg-dark border-top border-primary border-1":"personcontainer4"}>
            <div>
              <div className={darkMode?"m-5 p-4 text-info":"m-5 p-4 shadow text-success"}>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/ieee">IEEE Student Branch</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/iste">ISTE Student Chapter</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/nss">National Service Scheme</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/csi">Computer Society Of India</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/iedc">IEDC</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/cerd">CERD</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/igs">Indian Geotechnical Society</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/asme">ASME</a></div>
                <div className="mb-3"><i className="bi bi-link-45deg"></i><a href="/staffclub">Staff Club</a></div>
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

