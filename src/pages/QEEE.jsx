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

const QEEE = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Quality Enhancement in Engineering Education</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="ms-4">
                <div className={darkMode?"mb-5 text-info":"mb-5"}><p>The Committee for Reforms in Technical Education under the chairmanship of Professor Ashok Jhunjhunwala, IIT Madras, has been constituted by the Ministry of Human Resources and Development (MHRD) with a mandate to bring about comprehensive reforms in technical education. <br />This committee has extensively studied the technical education system prevailing at present and identified problem areas in several colleges. One of the important concern areas is that the quality of technical education imparted in many colleges is not at par with the premier institutes. This in turn is because the colleges lack the pedagogical resources in the form of highly qualified teachers, well developed content and good lab infrastructure, that students in the premier institutes take for granted. To address this specific issue, the committee has come up with a program wherein real time and synchronous technology is used to allow for an integration of superior external scholastic inputs into current pedagogical practices.</p></div>
                <div className="mb-3">
                        <div class="gap-1">
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                              <b>Live Class</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                              <b>Coursepack</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                              <b>Live Labs</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                              <b>Bridge Programs</b>
                            </button>
                        </div>
                        <div className="collapse" id="collapseExample1">
                            <div className={darkMode?"textcontainer4 card card-body bg-dark border-white border-1 border text-info":"textcontainer4 card card-body"}><p>IIT faculty deliver live lecture classes to participating colleges. The schedule of lectures are sent to colleges priorly and notifications are provided before start of each session.</p></div>
                        </div>
                        <div className="collapse" id="collapseExample2">
                          <div className={darkMode?"textcontainer4 card card-body bg-dark border-white border-1 border text-info":"textcontainer4 card card-body"}><p>A supplement study material with lecture notes, live class videos, discussion forums, assessment and evaluation tools to serve as a reference material for QEEE courses.</p></div>
                        </div>
                        <div className="collapse" id="collapseExample3">
                            <div className={darkMode?"textcontainer4 card card-body bg-dark border-white border-1 border text-info":"textcontainer4 card card-body"}>
                              <p>To provide virtual hands-on experience to students on experiments undertaken remotely. It creates an opportunity to work on a real lab experiment tailored to suit their syllabus and curriculum.</p>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample4">
                        <div className={darkMode?"textcontainer4 card card-body bg-dark border-white border-1 border text-info":"textcontainer4 card card-body"}>
                              <p>To bridge the gap between the initial skills of individuals and what they need to enter and succeed in postsecondary education and career-path employment.</p>
                            </div>
                        </div>
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

export default QEEE

