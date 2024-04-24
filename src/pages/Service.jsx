import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter.jsx'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Service = () => {

    
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
      setDarkMode(localStorage.getItem("darkModeValue"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Service</h2></div>
          <div className={darkMode?"personcontainer4 bg-dark border-top border-primary border-1":"personcontainer4"}>
            <div>
              <div className={darkMode?"m-5 p-4 text-info":"m-5 p-4 shadow text-success"}>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1qjWxX_eY3qNq3BV6_l1bViFx2fczFQk6/view?usp=drive_link">The Kerala Account Code Volume III</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1W5EV-YhJPLDbE6zVhnUix-aX-R7wxj33/view?usp=drive_link">Kerala Budget Manual</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1LeolyZqJlSriYIb0F0x9N_CnIepCz2Rq/view?usp=drive_link">Kerala Civil Services (Classification, Control & Appeal) Rules 1960</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1KpkgC4DG6z8yWlgvUdDVRBaBl07yLoxb/view?usp=sharing">Government Servants Conduct Rule 1960</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1VUS4TI0uNB8TeiU0wthOQQudlbr9ze50/view?usp=sharing">DTE Handbook</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1McEsMrmu80wS8agNy_nIaqYW2WF-39kb/view?usp=drive_link">The Kerala Financial Code Volume I</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1EnVw4SFxTb0qsJqbye_gCRQSe5tIqNPB/view?usp=drive_link">The Kerala Financial Code Volume II</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1BtdqSfy5p9HfXf7Rn2N-uMbPqJKqKCKj/view?usp=sharing">Handbook on Guidelines, Government Orders & Circulars Issued for According Administrative Sanction for Plan Schemes by the Working Group/Special Working Group</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1L648svXr2Hx_Qh3C67uCuDbHcqn7-LVd/view?usp=sharing">KSR I</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1CHuNTpOjVH_QWEKw-O8gUnI0KHyO7XDl/view?usp=sharing">KSR II</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1HvtCyeu_wHI93cznYOgAyUjtAmHO9xqW/view?usp=sharing">Manual of Office Procedures</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1ehrMscfV1t116bwgn7CACliod_4LXPqS/view?usp=drive_link">The Kerala Service Rules Volume I</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1mpQFoTRPPI59-j6PPc4jTJWkg2RyF8Bq/view?usp=sharing">Kerala Service Rules</a></div>
                <div className="mb-3"><a href="https://keralaservice.org/ksr">Kerala Service Rules Website</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1uiN0pXOL32URCGsq_nV222I1hqdDArxI/view?usp=drive_link">Kerala State and Subordinate Service Rules 1958</a></div>
                <div className="mb-3"><a href="https://drive.google.com/file/d/1nKRgw_EXxxuahh4olz427CN5GcDVupMr/view?usp=drive_link">Kerala State & Subordinate Service Rules 1958</a></div>
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

export default Service

