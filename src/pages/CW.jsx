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

const CW = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Campus Wi-Fi</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="mb-2">
                <div className={darkMode?"mb-2  ms-3 mt-3 text-info":"mb-2  ms-3 mt-3"}><p>The college is a member of the National Knowledge Network (NKN) which is a high-speed network backbone interconnecting major educational and research institutions. NKN is maintained by National Informatics Network (NIC), Government of India. NKN provides a bandwidth of 1000 Mbps (1 Gbps) to the college. In addition, a 16 Mbps internet connection has been taken from BSNL. This connection is being maintained as a backup to be used in the rare event of an NKN connection failure. <br /><br />The network traffic between the college intranet and the internet is monitored and controlled through a firewall. Cisco routers and switches are used at the backbone level of the intranet. A fiber-optic backbone has been laid to provide connectivity to various parts of the campus. <br /><br />The campus is completely connected by WiFi. A Ruckus ZoneDirector 3000 WiFi controller kept in the server room manages the WiFi access. Access points have been deployed throughout the campus so that online facilities like e-journals (which are provided on IP-based access) can be accessed from anywhere within the college premises.</p></div>
                <div className={darkMode?"mb-2 ms-3 text-info":"mb-2 ms-3"}><p>TWi-Fi access will be available for all staff, students, guests</p></div>
                <div className={darkMode?"mb-3 text-info ms-3":"mb-3 text-dark ms-3"}><p>The various departments/sections covered under Wi-Fi are:</p></div>
                <div className={darkMode?"mb-3 listdiv2 text-info":"mb-3 listdiv2"}>
                    <ul>
                        <div className="ms-2 mb-2"><li>Main Administrative building (All 7 floors including Library)</li></div>
                        <div className="ms-2 mb-2"><li>Mechanical Lab Block (including ADAM, CADD Lab, PG Labs)</li></div>
                        <div className="ms-2 mb-2"><li>New Drawing Hall & proposed CADD Room (Civil) over the Mech Lab Block</li></div>
                        <div className="ms-2 mb-2"><li>EC/IT Block (All floors including the new IT Labs at 2nd floor)</li></div>
                        <div className="ms-2 mb-2"><li>Mechanical Workshop</li></div>
                        <div className="ms-2 mb-2"><li>New Computer Lab/CADD Lab (EEE dept)</li></div>
                        <div className="ms-2 mb-2"><li>Old Server Room and Labs (IT Department)</li></div>
                        <div className="ms-2 mb-2"><li>Proposed English Language Lab (Near old office)</li></div>
                        <div className="ms-2 mb-2"><li>MTech Class Rooms (old office)</li></div>
                        <div className="ms-2 mb-2"><li>PTA Building (All floors)</li></div>
                        <div className="ms-2 mb-2"><li>Mini Auditorium</li></div>
                        <div className="ms-2 mb-2"><li>Ladies Hostel (Lobby)</li></div>
                        <div className="ms-2 mb-2"><li>All main outdoor areas in campus including Canteen, NSS Room etc.</li></div>
                    </ul>
                </div>
                <div className={darkMode?"mb-5 p-3 ms-5 text-white border-bottom border-warning border-3":"mb-5 p-3 ms-5 text-success border-bottom border-success border-3"}><h5>As part of a Cyber Agreement entered between our institution and Govt. of India, to make available high-speed internet connectivity (1000 Mbps, NKN connection) in campus, it is necessary that all user activities will have to be monitored, logged and recorded.</h5></div>
                <div className={darkMode?"mb-5 p-3 ms-3 text-success":"mb-5 p-3 ms-3 text-dark"}><h3>Frequently Asked Questions</h3></div>
                <div className="mb-5">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How to get a Wi-Fi/ Internet Account for a student
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body bg-dark text-info":"accordion-body"}>
                                A student desirous of getting a Wi-Fi/Internet account will have to register for the same. Copy of the Registration Form is available in the college website and at Students’ Facilitation Centre. <br /><br />The filled-up Registration Form, duly recommended by the Staff Advisor, should be submitted at the IT Lab, EC/IT Block, on any working day. <br /><br />On accepting an application, the student will receive an email from itsupport@gecbh.ac.in requesting him/her to forward his/her username and password (for WI-Fi / Internet access), by return mail. <br /><br />On receipt of username/password as above, the student will be intimated about activation of his/her Wi-Fi/ Internet account through his/her registered e-mail ID.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How to get a Wi-Fi/Internet Account for a Staff?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body bg-dark text-info":"accordion-body"}>
                                A staff desirous of getting a Wi-Fi / Internet account shall send a request by mail from his/her e-mail ID (as given in the Information Bulletin)with particulars of his/her Name, Designation and Department, addressed to itsupport@gecbh.ac.in. Any change in one’s mail-ID from that listed in Information Bulletin shall be intimated in advance before sending the request. <br /><br />He/she will then receive a mail from itsupport@gecbh.ac.in requesting to forward his/her username and password (for WI-Fi / Internet access), by return mail. Thereafter, the concerned staff will be intimated about activation of his/her Wi-Fi/ Internet account through mail.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How to Login
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body bg-dark text-info":"accordion-body"}>
                                The details on how to activate a Wi-Fi / Internet account on receipt of a username and password will also be intimated through mail.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5 p-3 ms-3"></div>
                <div className={darkMode?"text-success mb-5":"text-primary mb-5"}><h3>Usage Policy</h3></div>
                <div className={darkMode?"mb-5 p-3 ms-3 text-info":"mb-5 p-3 ms-3"}><p>Wi-Fi will be available on Laptops, Desktops and in all devices (other than running Android application).<br />Wi-Fi will be active in campus from 8.00 AM to 6.00 PM on all days.<br />In Ladies Hostel (lobby area), Wi-Fi will be active only from 6.00 AM to 8.00 AM and from 4.00 PM to 10 PM.<br />All social media and networking sites are currently blocked. However, such sites will be open for limited usage from 12 Noon to 1.00 PM and from 4.00 PM to 5.00 PM on all days.</p></div>
                <div className={darkMode?"mb-5 p-3 ms-5 text-white border-bottom border-warning border-3":"mb-5 p-3 ms-5 text-success border-bottom border-success border-3"}><h6>In the light of introduction of a user account system for Wi-Fi / Internet connectivity in campus, it is essential that all students/staff obtaining a WiFi / Internet account, leaving the institution, should report the IT department (Server Room) to surrender their account.</h6></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default CW

