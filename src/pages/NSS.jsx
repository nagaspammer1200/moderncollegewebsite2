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

const NSS = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>National Service Scheme</h2></div>
          <div className={darkMode?"d-flex personcontainer2 bg-dark border-top border-1 border-primary":"d-flex personcontainer2"}>
            <div className="nsscontainer p-2">
                <div className={darkMode?"text-success mb-3":"text-primary mb-3"}><h3>NSS</h3></div>
                <div className={darkMode?"mb-5 text-secondary text-info":"mb-5 text-secondary"}><p><b>National Service Scheme</b> is a student – centered programme and it is complementary to education. It is a noble experiment in academic extension. It inculcates the spirit of voluntary work among students and teachers through sustained community interaction. It brings our academic institutions closer to the society. It is a link between the campus and community, the college and village, knowledge and action. The overall aim of NSS is the Personality Development of students through community service. It gives an extension dimension to Higher Education system and orients the student youth to community service.</p></div>
                <div className="mb-5"><img src="src/images/nss/nss1.jpg" width="700px" height="500px"alt="NSS Members" /></div>
                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                    <div className={darkMode?"mb-5 text-secondary text-info":"mb-5 text-secondary"}><p>National Service Scheme, NSS, was formally launched on 24th September, 1969, the birth centenary of the Father of the Nation. Starting with an enrolment of 40000 students in 37 Universities covering all states, the coverage of NSS students increased to about 26.6 lakhs (2006-07) in 198 Universities, 9117 colleges,1196 Technical Institutions, 7542 Plus Two Schools and 41 Plus Two Vocational Higher Secondary Directorates. During its 39 years of fruitful existence more than 2.7crore students have so far benefited from this largest student-volunteer ship programme in the world.</p></div>
                    <div><img src="src/images/nss/nss2.jpg" width="250px" height="200px" alt="NSS Introduction" /></div>
                </div>
                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"gap-1 nsscontainer1"}>
                    <div className={darkMode?"mb-5 text-secondary text-info":"mb-5 text-secondary"}><p>The N.S.S. Unit No: 120 of Govt. Engineering College, Barton Hill has always been there for the integrated development of the college as well as the society. In the present academic year the Unit has decided to contribute a lot with its regular and other activities. Many new programs have been introduced under the guidance of our N.S.S. Programme Officer Prof.Deepa Devi ,AP, Mathematics Department.</p></div>
                    <div><img src="src/images/nss/nss3.jpg" width="250px" height="200px" alt="NSS Activities" /></div>
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

export default NSS

