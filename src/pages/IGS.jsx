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

const IGS = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Indian Geotechnical Society</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3">
                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>IGS</h3></div>
                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The Indian Geotechnical Society, formerly known as The Indian National Society of Soil Mechanics and Foundation Engineering, was established in the year 1948. It intends to foster technical and nontechnical skills among engineers for the advancement in the fields of soil mechanics, foundation engineering, engineering geology, rock mechanics, and allied fields. It acts as a common forum for academicians, research workers, designers, construction engineers, equipment manufacturers and others interested in geotechnical activities.</p></div>
                <div className="mb-5 ms-3"><img src="src/images/igs/igs.jpg" width="85%" height="60%" alt="IGS Members" /></div>
                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The IGS Student Chapter was set in motion in the college in November 2019. Proff. Nileena Suresh Kumar presented the IGS logo to the then student coordinator, Ms. Fathima Alfina A. Under the guidance of the staff co-ordinator ,Dr. Raji M, IGS has notched a unique spot for itself in the track record of the college. The Executive Committee, with the efficient group effort of its competent members spearheads the developmental and initiative aspects of the student chapter.</p></div>
                <div className="mb-5 ms-3"><img src="src/images/igs/igs1.jpg" width="85%" height="60%" alt="IGS Members" /></div>
                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The higher education system is primarily skill based and experience oriented. The exposure during the span of the course would enhance a person's ability to act efficiently as a professional and IGS has its root commitments inspired from this. The student chapter, over its short span of existence, has organized several events that provided exposure for the students in various arenas. <br />The students along with the members of the student chapter heavily benefited from the field visits and workshops, which gave an onsite exposure and hands on experience. <br /> Furthermore, the student chapter had successfully conducted numerous discussions and interactive sessions with eminent professionals from various domains and their expertise in the subject gave the students a reliable source of knowledge.</p></div>
                <div className="d-flex mb-5 gap-5 nsscontainer1 ms-3">
                    <div><img src="src/images/igs/igs2.jpg" width="250px" height="200px" alt="NSS Introduction" /></div>
                    <div><img src="src/images/igs/igs3.jpg" width="250px" height="200px" alt="NSS Introduction" /></div>
                </div>
                <div className={darkMode?"mb-4 text-center text-info":"mb-4 text-center text-primary"}><b>To know more about us, visit our official website</b></div>
                <div className={darkMode?"text-center text-warning":"text-center text-success"}><a href="https://www.igsgecb.com/">Click Here</a></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default IGS

