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

const ISTE = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Indian Society for Technical Education</h2></div>
          <div className={darkMode?"d-flex personcontainer2 bg-dark border-top border-1 border-primary ps-5":"d-flex personcontainer2 ps-5"}>
            <div className="p-3">
                <div className={darkMode?"text-success mb-5":"text-primary mb-5"}><h3><b>ISTE SB (Branch Code : KE-66)</b></h3></div>
                <div className="mb-3 text-center asmeimage"><img src="src/images/iste/iste.jpg" width="500px" height="450px" alt="ISTE Members" /></div>
                <div className={darkMode?"mb-5 text-secondary text-info textcontainer4":"mb-5 text-secondary textcontainer4"}><p>ISTE is a national professional body consisting of nearly 40,000 engineering teachers and academicians. Our College ISTE chapter is functioning with more than 400 student members. The ISTE student chapter is the most vibrant and active chapter in the campus. <br /> It organizes Talks by experts, Quiz, Paper presentation, Mock Interviews, Robotics Contest, Hands-on events etc. The club was open to students of all branches. Student Teacher Program was yet another undertaking to familiarize the students in engineering aspects that are beyond the scope of syllabus.</p></div>
                <div className="mb-2 text-primary"><h6>Events Organized by ISTE GECBH Students Chapter</h6></div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p><div className={darkMode?"text-white":"text-dark"}><b>Student Teacher Programme:</b></div> A weeklong coding workshop held as part of the student teacher program under Bartonoidz which saw a footfall of 30+ Students. <br /> The workshop covered portions like Datatypes control structures, file management, Arduino programming etc.</p></div>
                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                    <div>
                        <div className="textcontainer4"><p><div className={darkMode?"text-white":"text-dark"}><b>ASK- Alternative for Sharing Knowledge: </b></div>ASK was held by ISTE GEC students chapter to encourage technical and general knowledge sharing among the students of our college. The prelims was conducted on April 7, 2017 and about 25 teams participated among which 5 teams were finalized and the finals of the competition was held on 13 April 2017.</p></div>
                        <div className="mb-1 textcontainer4"><p><div className={darkMode?"text-white":"text-dark"}><b>Bot-TECH Workshop :</b></div> BOT-TECH was organized exclusively for Bartonoidz members. The workshop was meant to be an interest development session which included dancing humanoids, Zumo robot wrestling and mini Quadcopters.</p></div>
                    </div>
                    <div><img src="src/images/iste/iste1.jpg" width="250px" height="200px" alt="ISTE Meeting" /></div>
                </div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p><div className={darkMode?"text-white":"text-dark"}><b>Mechatronics system workshop:</b></div>A 3 Day workshop on Mechatronic Systems was conducted such that the participants get a clear idea on which all sensors and actuators are available for specific applications.</p></div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p><div className={darkMode?"text-white":"text-dark"}><b>Nikola Tesla Scholarship:</b></div>Nikola Tesla Scholarship is an event conducted to provide Financial aid to meritorious 1st The event was divided into Written Prelims, Group Discussion and Final Interview.</p></div>
                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                    <div>
                        <div><p><div className={darkMode?"text-white":"text-dark"}><b>MINI QUADCOPTER WORKSHOP: </b></div>Bartonoidz conducted a two day workshop on Mini Quadcopter where the theory session dealt with theoretical aspects of flying bodies, basic aerodynamics, the components used in Quadcopters as well as balancing of drones.</p></div>
                        <div className="mb-1"><p><div className={darkMode?"text-white":"text-dark"}><b>Bart-Ex- Technical Expo :</b></div> Bartonoidz and ISTE GEC students’ chapter organized a technical exhibition during Aagneya, the techno cultural fest of GEC Barton Hill with the projects made by the students. There were about 30 projects from the students and other projects made individually by the seniors were also exhibited.</p></div>
                    </div>
                    <div><img src="src/images/iste/iste2.jpg" width="250px" height="200px" alt="ISTE Meeting" /></div>
                </div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p><div className={darkMode?"text-white":"text-dark"}><b>Codify with Mayank Bhura: </b></div>A two day workshop on General Programming was organized by Mayank Bhura,software engineer at Google,Hyderabad. Topics such as introduction to basic algorithm and simplification methods,advanced coding methods, introduction to python coding and JAVA coding. A one hour interactive session was also conducted in which participants had an opportunity to clear their doubts about python and simplified algorithm building techniques.</p></div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p><div className={darkMode?"text-white":"text-dark"}><b>Digital India Quiz: </b></div>A Quiz programme on “Digital India”for the Engineering College Students of Kerala was held at Government Engineering College, Barton hill, Trivandrum and attractive cash prizes and certificates were offered for the winners.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default ISTE

