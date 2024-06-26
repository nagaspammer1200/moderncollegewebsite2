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

const IEDC = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Innovation and Entrepreneurship Development Cell</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div>
                <div className="mb-4">
                    <div class="gap-1">
                        <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                            <b>Board Of Governors 2019-20</b>
                        </button>
                        <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                        <b>Junior Board Of Governors 2019-20</b>
                        </button>
                    </div>
                    <div className="collapse" id="collapseExample1">
                        <div className={darkMode?"card card-body bg-dark border-white border-1 border text-info":"card card-body"}>
                            <div className="ms-3 textcontainer4"><p><b>CEO:</b> Narendran M. | 7994433613</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CFO:</b> Rahul Joshy | 9995440329</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CTO:</b> Midhun S. M. | 9746070559</p></div>
                            <div className="ms-3 textcontainer4"><p><b>COO:</b> Muralee Krishnan Kartha P. U. | 9747644646</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CSO:</b> Arunima R. | 9188219144</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CMO:</b> Mohammed Arshad | 9495781769</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CCO:</b> Amitha M. | 7510752016</p></div>
                        </div>
                    </div>
                    <div className="collapse" id="collapseExample2">
                        <div className={darkMode?"card card-body bg-dark border-white border-1 border text-info":"card card-body"}>
                            <div className="ms-3 textcontainer4"><p><b>CEO:</b> Vyshnav Shenoy P. | 9633910540</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CFO:</b> Anirudh Nair U. | 9446093471</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CTO:</b> Goutham Prakash | 8078144993</p></div>
                            <div className="ms-3 textcontainer4"><p><b>COO:</b> Ann Reji | 8281552709</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CSO:</b> Zulfa R. J. | 8891266994</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CMO:</b> V. Ajay | 7012311881</p></div>
                            <div className="ms-3 textcontainer4"><p><b>CCO:</b> Ahmed Shabeer | 8547656920</p></div>
                            <div className="ms-3 textcontainer4"><p><b>MENTORS:</b> Manu E. Thomas (9495730789), Mohammed Al Irshad M.U. (8589809616)</p></div>
                            <div className="ms-3 textcontainer4"><p><b>VOLUNTEER HEADS:</b> Anjana Vijayan (9995047755), Celesteena C.G. (8330851003)</p></div>
                        </div>
                    </div>
                </div>
                <div className="accordion m-5" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">Annual General Body Meet 2019</div></div>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                    <div className="d-flex p-3 gap-5 nsscontainer1">
                                        <div className={darkMode?"p-3 text-info":"p-3"}><p>The meeting was officially inaugurated by our principal Dr.K Suresh . He spoke to us laying stress on the relevance of developing entrepreneurship skills amongst engineers in the current scenario. <br /><br />IEDC CEO Aravind B presented the Annual report. Our IEDC nodal officer Shijin Knox sir also addressed the gathering. <br /><br />The principal distributed the certificates of merit to the members of the previous BOG.IEDC IAravind B introduced the members of the new Board of Governers to be led by Adith Harikumar and wished them all success in the coming ventures.</p></div>
                                        <div><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/iedc1.jpg?alt=media&token=a4c5628e-a119-4257-8a8a-575b386de0ac" alt="IEDC Members" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"collapsed accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">Startup Stories</div></div>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}><div className={darkMode?"p-3 text-info":"p-3"}><p>IEDC GECBH started " STARTUP STORIES " a series about talented youth who blazed a trail in entrepreneurship. <br /><br />There are hundreds of inspiring and motivational Start up founders and entreprenuers who are changing the world we live in, and we have started this social platform to share their stories with public and promote new ventures. The first episode showcased the success path of Geethu Sivakumar, CEO, Pace Hitech, who opened the doors of enterepreneurship with her never ending efforts. <br /><br />The second episode featured the best success story of the present era, Byju Raveendran , the founder of Byju’s Learning App.</p></div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"collapsed accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">Ad Astra Space Quiz</div></div>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}><div className={darkMode?"p-3 text-info":"p-3"}><p>Prelims of AD ASTRA - Space Quiz, the inaugural event of IEDC Aerospace Community was conducted for the students of GECB on 17 October 2019 in association with _Barton Quiz Club. A total of 14 enigmatic teams participated battling</p></div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"collapsed accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">Notebook Talk Series</div></div>
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}><div className={darkMode?"p-3 text-info":"p-3"}><p>A talk session was conducted by Miss Nanma Gireesh,the cofounder of Nest Abide and the famous TedTalk speaker in connection with the Notebook Talk Series '19. We had an interactive session where the first years got to know the basics of entrepreneurship and the brainstorming session brought out the best ideas within them.Miss Nanma Gireesh was presented with a memento by CEO Adith Harikumar. The event was gifted with a highly attractive freshers of our college. Around 36 students participated in this event.</p></div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">IEDC Summit 2019</div></div>
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}><div className={darkMode?"p-3 text-info":"p-3"}><p>Our team at IEDC Summit 2019, Asia's largest summit for aspiring Entrepreneurs, involved Invited Talks, Startup Exhibition and Activity Hub held at Sahrdaya College of Engineering and Technology, Thrissur on 19th October.</p></div>
                            <div><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/iedc2.jpg?alt=media&token=75b62efa-d621-4fbe-95aa-4f5f75c71cd3" alt="IEDC Meeting" /></div></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"collapsed accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">I’m Startup Studio</div></div>
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                    <div className={darkMode?"p-3 text-info":"p-3"}><p>A talk session was conducted by I AM Startup Studio by channelI'm.com, on 12 Nov 2019, about the importance of entrepreneurship and how a startup works from the scratch idea into a innovative product. It also raised the importance of right media publicity and future expansion of the product. Bleuglades, the startup formed Abhinav and Ramesh, students of GECB shared their experiences while forming the startup. The session saw the involvement of many students into Start-ups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"collapsed accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">Patent And Paper Presentation</div></div>
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                    <div className={darkMode?"p-3 text-info":"p-3"}><p>Taking your paper to the next level of awesomeness is very important! Presentation is the key to change the perspective. <br /><br />Patent and Paper presentation was held at Zoom IT on 20th February. The session saw the input and guidance from Safikh S , Cheif Scientist at Patent Information Centre Kerala.The event was held successfully. All the participants were given insights into Patenting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"collapsed accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <div className="mb-3 d-flex"><i className="bi bi-record-circle"></i><div className="ms-5">AR And VR Designing Workshop</div></div>
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                    <div className={darkMode?"p-3 text-info":"p-3"}><p>A 2 day workshop was conducted by ICFOSS in collaboration with FOSS Cell GECB and IEDC GECB on AR and VR designing on 25th and 26th january 2020 at Government engineering College, Barton Hill. It saw a good number of participants! <br />The session was handled and explained exceptionally well and truly helped in widening the knowledge and skill of participants in the expanding field of AR and VR.</p>
                                    </div>
                                </div>
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

export default IEDC

