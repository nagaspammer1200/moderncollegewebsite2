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

const Rag = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Anti-ragging</h2></div>
          <div className={darkMode?"d-flex personcontainer3 bg-dark border-top border-1 border-primary":"d-flex personcontainer3"}>
            <div className="rulecontainer3">
                <div className="d-flex flex-column text-center">
                    <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>Ragging in any form is prohibited and any incidence of indulging in ragging will be reported to the police. Ragging is a non-bailable offence.</p>
                    </div>
                    <div className="mb-5 d-flex gap-3 raggingimage">
                        <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>Ragging may also attract punishment as per section 4 of the “The Kerala Prohibition of Raggig Act 1998” which leads to imprisonment, for a term of maximum 2 years and a fine for ten thousand rupees in conviction.</p>
                        </div>
                        <div className="ptaimage">
                            <img src="src/images/rag.png" width="300px" height="300px"alt="Anti Ragging Logo" /> 
                        </div>
                    </div>
                    <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>A workshop was organized by IPR cell GEC Barton Hill, on 26-10-2017. The workshop was inaugurated by Dr. Rajasree R., Principal GEC, Barton Hill. In her speech she emphasized the importance of IPR. IP creation and its protection play a vital role in gaining an advantageous position in technological game for achieving economic growth. After her speech, next session was handled by Shri. Safikh S., Technical officer IPR cell Kerala. The students from ECE, EEE, IT and civil branches participated in the workshop.</p>
                    </div>
                    <div className="mb-5 text-primary text-start">
                        <h5>Ragging constitutes one or more of any of the following acts:</h5>
                    </div>
                    <div className={darkMode?"mb-5 text-warning text-start listdiv":"mb-5 text-secondary text-start listdiv"}>
                        <ul>
                            <li className="mb-2 p-2">Any conduct by any student or students whether by words spoken or written or by an act which has the act of teasing, treating or handling with rudeness to a fresher or any other student.</li>
                            <li className="mb-2 p-2">Indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student.</li>
                            <li className="mb-2 p-2">Asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student.</li>
                            <li className="mb-2 p-2">Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher.</li> 
                            <li className="mb-2 p-2">Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students.</li>
                            <li className="mb-2 p-2">Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students.</li>
                            <li className="mb-2 p-2">Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person.</li>
                            <li className="mb-2 p-2">Any act or abuse by spoken words, emails, posts, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student.</li>
                            <li className="mb-2 p-2">Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing of power, authority or superiority by a studentover any fresher or any other student.</li>
                        </ul>
                    </div>
                    <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>A “Fresher” means a student who has been admitted to an institution and who is undergoing his/her first year of study in such institution.</p>
                    </div>
                    <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>Actions will be taken against students for indulging and abetting ragging depending upon the nature and gravity of the offence as established .The possible punishments for those found guilty of ragging at the institution level are any one or any combination of the following:</p>
                    </div>
                    <div className={darkMode?"mb-5 text-success p-2 text-start":"mb-5 text-secondary shadow p-2 text-start"}>
                        <ol>
                            <li className="mb-5">Cancellation of admission</li>
                            <li className="mb-5">Suspension from attending classes</li>
                            <li className="mb-5">Withholding/withdrawing scholarship/fellowship and other benefits</li>
                            <li className="mb-5">Debarring from appearing in any test/examination or other evaluation process</li>
                            <li className="mb-5">Withholding results</li>
                            <li className="mb-5">Debarring from representing the institution in any regional, nationalorinternational meet, tournament, youth festival, etc.</li>
                            <li className="mb-5">Suspension/expulsion from the hostel</li>
                            <li className="mb-5">Rustication from the institution for period ranging from 1 to 4 semesters</li>
                            <li className="mb-5">Expulsion from the institution and consequent debarring from admission to any other institution.</li>
                            <li className="mb-5">Collective punishment: when the persons committing or abetting the crime of ragging are not identified, the institution shall resort to collective punishment as a deterrent to ensure community pressure on the potential raggers.</li>
                        </ol>
                    </div>
                    <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>In case of ragging, you may directly contact in person or over phone to your staff advisor or any one of the following persons:</p>
                    </div>
                    <div className={darkMode?"mb-5 text-warning text-start":"mb-5 text-secondary text-start"}>
                        <div className="mb-2"><h6><b>Principal : Dr. Shiny G.</b></h6></div>
                        <div className="mb-2"><h6><b>HoD -EC : Dr. Hari R.</b></h6></div>
                        <div className="mb-2"><h6><b>HoD -IT : Dr. Haripriya A.P.</b></h6></div>
                        <div className="mb-2"><h6><b>HoD -ME : Dr. K Bindu Kumar</b></h6></div>
                        <div className="mb-2"><h6><b>HoD -EEE : Dr. Francis M Fernandez</b></h6></div>
                        <div className="mb-2"><h6><b>HoD -CE : Dr. Thulaseedharan V</b></h6></div>
                    </div>
                    <div className="mb-5 p-3 text-secondary text-center border border-success border-5">
                        <div className={darkMode?"m-3 text-warning":"m-3"}><p>24 HOURS HELP-LINE</p></div>
                        <div className="m-3 text-primary"><h4><b>TOLL FREE NUMBER : 1800-180-5522</b></h4></div>
                        <div className="m-3 text-primary"><h4><b>HELPLINE NUMBER : 9895855239</b></h4></div>
                        <div className={darkMode?"m-3 text-warning":"m-3"}><p>District Legal Service : 0471 2595173, 0471 3257335</p></div>
                        <div className={darkMode?"m-3 text-warning":"m-3"}><p>E-mail : helpline@antiragging.net</p></div>
                    </div>
                    <div className="mb-5 text-primary text-start">
                        <h4>Anti-ragging Committee</h4>
                    </div>
                    <div className={darkMode?"mb-5 d-flex text-info text-start":"mb-5 d-flex text-secondary bg-white text-start"}>
                        <div>
                            <ul  className="list-unstyled">
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Chairperson</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Convener</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Representative of faculty members</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Representative of Parents	</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Representative of Students</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Representative of fresh students</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Representative of students in hostel	</li>
                                <li className={darkMode?"mb-3 mt-3 p-2 text-info":"mb-3 mt-3 p-2 text-dark"}>Representative of Non Teaching Staff	</li>
                            </ul>
                        </div>
                        <div> 
                            <ul  className="list-unstyled">
                            <li className="mb-3 mt-3 p-2">Principal</li>
                            <li className="mb-3 mt-3 p-2">Dr. Ranaprathap A.O Asst Professor in Physical Education</li>
                            <li className="mb-3 mt-3 p-2">All HODs, PTA Secretary 1st Year Senior Staff Advisers from each branch</li>
                            <li className="mb-3 mt-3 p-2">PTA Vice President</li>
                            <li className="mb-3 mt-3 p-2">Union Chairman</li>
                            <li className="mb-3 mt-3 p-2">1st year representative</li>
                            <li className="mb-3 mt-3 p-2">College Hostel Warden,</li>
                            <li className="mb-3 mt-3 p-2">Administrative Assistant</li>
                            </ul>
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

export default Rag

