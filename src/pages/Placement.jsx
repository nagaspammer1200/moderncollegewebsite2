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

const Placement = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>The Career Guidance & Placement Unit (CGPU)</h2></div>
          <div className={darkMode?"d-flex personcontainer2 border-top border-1 border-primary bg-dark":"d-flex personcontainer2"}>
            <div className={darkMode?"nsscontainer p-2 text-info":"nsscontainer p-2"}>
                <div className="textcontainer4"><p><b>The Career Guidance & Placement Unit (CGPU) committee comprises of the Principal, the Coordinator, Faculty Members and Student representatives. Prof. Ramesh S, Associate Professor (ME) is the coordinator (TPO) who can be reached at remeshnair2000@gmail.com (Ph. 9895342277). <br /><br />The raison d’etre of the Career Guidance and Placement Unit (CGPU) is the overall development of the individual student and providing a platform to launch their careers. Specifically, each student graduating from GECB should</b><br /><br />1. Have a positive and winning attitude<br />2. Be a professional who is able to work synergistically as part of a team and collective <br />3. Be able to appreciate diverse <br />4. Have it in them to dedicate time and wholehearted effort to the task at hand <br />5. Be capable of expressing oneself lucidly in a variety of interactions – be it a presentation, an interview or a discussion <br /><br />The Career Guidance and Placement Unit (CGPU) of the college actively organizes campus recruitments and training programmes for students. Our college has hosted some of the best and most trusted for campus placement. The institution being the choice of meritorious students in the state, employers have found it a major talent pool for students across branches.</p></div>
                    <div className="m-5"><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/placement.jpg?alt=media&token=2a2f8cf8-b9f0-405f-a732-e42b99f69bb0" width="400px" height="300px" alt="Placement Session" /></div>
                    <div className="mb-5 textcontainer4"><p>The CGPU also focuses on developing industry-readiness in the students. Placement-oriented training as well as training programs on other technical and non-technical topics are organized on a regular basis. Continual motivation and support is provided for students interested in pursuing higher studies as well as for those aspiring to enter the Civil Services and other such careers. <br /><br />Interaction with industry experts and alumni are facilitated and encouraged through on-campus sessions, networking opportunities, social media, and mentoring. The CGPU also plays a key role in developing a favorable ecosystem for nurturing startups and similar student ventures.</p></div>
                <div className={darkMode?"bg-warning text-dark p-5 mb-5 textcontainer4":"bg-primary text-white p-5 mb-5 textcontainer4"}>
                    <div><h6>Contact CGPU</h6></div>
                    <div><p><b>Dr. Rakesh P</b> <br /><br />Associate Professor<br /><br />Mechanical Engineering Department <br /><br /><b>Phone : +91-9497574370</b> <br /><br />Email : placements@gecbh.ac.in</p></div>
                </div>
                <div className="m-5 placementimg"><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/placement2.jpg?alt=media&token=b1417904-e75b-4a2c-8b4f-bb45741d1c5e" width="400px" height="700px" alt="Placement Companies" /></div>
                <div className="table-responsive tablecontainer">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="3" className="text-center">Placement Status - 2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">Total offers</th>
                                <td className="p-3">450</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Electronics & Communication Engineering</th>
                                <td className="p-3">130</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Information Technology Engineering</th>
                                <td className="p-3">143</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Electrical & Electronics Engineering</th>
                                <td className="p-3">80</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Mechanical Engineering</th>
                                <td className="p-3">49</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Civil Engineering</th>
                                <td className="p-3">18</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">MTech</th>
                                <td className="p-3">30</td>&nbsp;
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={darkMode?"bg-warning text-dark p-5 mb-5":"bg-primary text-white p-5 mb-5"}>
                    <div><h6>This year's Recruiters</h6></div>
                    <div><p><b>InApp | EY | Algomox | IBS | Quest | UST | TCS Ninja | TCS Digital | Wipro(Offcampus) | Experion | Marlabs | QBurst | Envestnet-BSA | Envestnet-PD | Cognizant GenC | Cognizant GenC Next | Cognizant GenC Elevate | Zia Semiconductors | Virtusa(Offcampus) | Travancore Analytics | Speridian | IBM | IBM | Capegemini(Offcampus) | Mettle Networks | Infosys(Offcampus) | Tata Elxsi | Zaffin | appveen | ECS Fin | Federal Bank | SADA |</b></p></div>
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

export default Placement

