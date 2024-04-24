import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import ImageSlider from '../components/ImageSlider'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import PersonDetails from '../components/PersonDetails'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const EE = () => {
    const [readMenuOne,setReadMenuOne] = useState(false);
    const [readMenuTwo,setReadMenuTwo] = useState(false);
    const changeMenuOne  = () => {
        setReadMenuOne(!readMenuOne)
    }
    const changeMenuTwo  = () => {
        setReadMenuTwo(!readMenuTwo)
    }
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Department of Electrical & Electronics Engineering</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 border-top border-1 border-primary bg-dark":"d-flex personcontainer3 p-3"}>
            <div className="p-3">
                <div className="mb-5"><ImageSlider imgone="ee1.jpg" imgtwo="ee2.jpg" imgthree="ee1.jpg" imgfour="ee2.jpg" altone="Lab Work" alttwo="Laboratory" altthree="Lab Work" altfour="Laboratory"/></div>
                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>About the Department</h3></div>
                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The department has a history of producing students who graduate with excellent performance in the Examinations conducted by the University of Kerala and A P J Abdul Kalam Kerala Technological University. Majority of the eligible students are placed in various reputed National and International companies through campus placement drive of Career Guidance and Placement Unit of the college. Several students qualify for PG programs in IITs, NITs IIMs and top ranked foreign universities. <br /><br />The programme curriculum is designed to provide engineering graduates adequate knowledge and skills required for a successful carrier in the field of Electrical and Electronics Engineering. <br /><br />The department takes special efforts in imparting value added technical education to the students. Continuous efforts are also being made to arrange lectures in advanced areas of Electrical and Electronics Engineering by eminent professors from IITs, NITs, IISc, IIST and experienced technical experts from industries like KSEB, KELTRON, VSSC, ER & DC, Electrical Inspectorate, Energy Management Centre etc. Along with the curriculum they are provided with analytical training by introducing different simulation packages like SIMULINK, etap, MiPower etc.<br /><br /><br />The M.Tech. course in Power Systems and Control is aimed at introducing latest development in the field Power Systems with due importance to Control Systems. Developments in smart grid technology, The department also gives emphasis to extracurricular activities of the students by training them for improving their leadership qualities, presentation skills, organizing skills etc from the entry level itself.<br /><br /></p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b><i>VISION</i></b></h3></div>
                        <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p><i>Attain the zenith in Electrical and Electronics Engineering with emphasis on innovative research, design and development for the betterment of the society</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                    <i>and nature.</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer mb-5">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b><i>MISSION</i></b></h3></div>
                        <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p><i>Impart quality education in Electrical and Electronics Engineering to produce outstanding professionals capable of tackling the challenges of the society.</i></p></div>
                        <div>
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}><p><i>Foster a sense of values and ethics to create Electrical and Electronics engineers with integrity. <br /><br />Promote the aptitude for innovation, sustainability and research among students.<br /><br />Collaborate with industries, academic and research centres to expose students to latest technological advances.</i><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                        <div class="gap-1">
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <b>Program Education Objectives(PEOs)</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <b>Program Specific Outcomes (PSOs)</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <b>Program Outcomes (POs)</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                <b>Department Programmes</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                                <b>Department Facilities</b>
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                                <b>Faculty</b>
                            </button>
                        </div>
                        <div className="collapse mb-4" id="collapseExample1">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary "}><h4><i><u>PEO 1</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>The students will become highly productive Electrical and Electronics engineers capable of addressing various technological challenges in the society.</p></div>
                                <div className={darkMode?"text-success":"text-primary "}><h4><i><u>PEO 2</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>The students will be socially committed professional team players with strong ethical sense and communication skills.</p></div>
                                <div className={darkMode?"text-success":"text-primary "}><h4><i><u>PEO 3</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>The students will continue their lifelong learning for innovating, designing and implementing efficient and sustained electrical and electronics engineering practices.</p></div>
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample2">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><i><u>PSO 1</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>i Identify technical issues related to generation, transmission, and distribution of electric power and propose alternative feasible solutions.</p></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><i><u>PSO 2</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>ii Attain technical competence and confidence in design, develop, test, and implement Electrical & Electronics systems applying state-of-art technology with appropriate methods and tools.</p></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><i><u>PSO 3</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>iii Apply the theoretical concepts and practical skills in contributing technical solutions to socially relevant problems, considering socio-economic and environmental aspects.</p></div>
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample3">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><i><u>PO</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>i <b>Engineering knowledge</b>: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>ii <b>Problem analysis</b>: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>iii <b>Design/development of solutions</b>: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>iv <b>Conduct investigations of complex problems</b>: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>v <b>Modern tool usage</b>: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>vi <b>The engineer and society</b>: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>vii <b>Environment and sustainability</b>: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>viii <b>Ethics</b>: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>ix <b>Individual and team work</b>: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>x <b>Communication</b>: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>xi <b>Project management and finance</b>: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>xii <b>Life-long learning</b>: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change</p></div>
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample4">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>Department Programmes</u></h4></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>Courses Offered</u></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p><i className="bi bi-star-fill"></i> B.Tech Degree course in Information Technology</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p><i className="bi bi-star-fill"></i>Lateral entry for Diploma holders</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p><i className="bi bi-star-fill"></i> M.Tech in Power Systems and Control</p></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p><i className="bi bi-star-fill"></i> M. Tech. in Power Electronics and Drives</p></div>
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample5">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Department Facilities</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The various Laboratories functioning in the EEE Department1. Electrical and Electronics Workshop <br /><br />2. Electrical Machines Lab<br /><br />3. Electrical Measurements and Instrumentation Lab<br /><br />4. Power System Simulation Lab/Software Lab<br /><br />5. Power System Relays and Protection Lab<br /><br />6. High Voltage Lab – setting up in progress<br /><br />7. Power Electronics Lab<br /><br />8. System and Control Lab<br /><br />9. Digital Circuits Lab<br /><br />10. Electronic Circuits Lab<br /><br />11. Microprocessor Lab<br /><br /></p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Electrical Machines Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>This laboratory is equipped with different types of DC Series and Compound Motors, Single and Three phase Induction Motors, Single and Three phase Transformers, Alternator, Motor-Generator sets etc. The machines are also provided with necessary loading arrangements for conducting various tests. Measuring instruments such as Voltmeters, Ammeters, Wattmeters, Tachometers etc of different ranges also available for conducting the tests on the machines as per the B.Tech curriculum.</p></div>
                                    <div><img src="src/images/departments/ee2.jpg" width="250px" height="200px" alt="Students inside the Machines Lab" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Electrical and Electronics Workshop</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>This lab is equipped with vast collections of various electrical accessories, electronics components, cathode ray oscilloscopes, multimeters, and other electronic meters. This lab provides hands on experience to the students for wiring simple and special electrical circuits, distribution board wiring, identification of electrical faults and its rectification, measurement of insulation and earth resistance, soldering of electronic circuits, simple electronic circuits etc. An electrical maintenance wing is also working in corporate with this laboratory which carries out all the electrical maintenance work in the college.</p></div>
                                    <div><img src="ee3.jpg" width="250px" height="200px" alt="Electrical and Electronics Workshop" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Electronic Circuits Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>Electronic Circuits Lab is an experimental laboratory that explores the design, construction, and debugging of analog electronic circuits. This subject covers circuit design using diodes, transistors, JFETs, op-amps, UJTs and opto-couplers. This lab aims to emphasize visual and intuitive circuit understanding and to create a practical and useful design experience. In the process, students will learn to understand and use a wide variety of analog circuits like oscillators, differentiating circuits, integrating circuits, clipping and clamping circuits, amplifiers and optocouplers.</p></div>
                                    <div><img src="ee4.jpg" width="250px" height="200px" alt="Measurements Lab" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Digital Circuits Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>The objective of this lab is to perform rigorous experiments to consolidate basic knowledge in digital electronics. The topics covered include testing of ICs, realization of truth tables using logic gates, timer circuits design, design and use of synchronous and asynchronous counters, the design and realization of serial and parallel shift registers, Multiplexers, De-multiplexers, Multi-vibrators, Adders, Substractors, design and analysis of flip flops. This lab contributes primarily to the students’ knowledge of digital electronics, and does provide design experience.</p></div>
                                    <div><img src="ee5.jpg" width="250px" height="200px" alt="Digital Trainer Kit" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Electrical Measurements and Instrumentation Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>The Electrical Measurements and Instrumentation laboratory is equipped with Wheatstone’s Bridge, Kelvin’s double Bridge, Vernier Potentiometer, Slidewire Potentiometer, Sensitive Galvanometers, Standard Cells, Standard Resistances, Volt Ratio Boxes, Autotransformers, Power supplies , Cathode Ray Oscilloscopes , Function generators, DC and AC voltmeters and Ammeters, Multimeters, Loading Rheostats, Stop Watches, Wiring Tools etc. This laboratory provides familiarization of various electrical measuring devices, scheme of measurements of various electrical and electronic quantities and calibration of various electrical and electronic equipments.</p></div>
                                    <div><img src="ee6.jpg" width="250px" height="200px" alt="Student using Equipment" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Microprocessor Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>Microprocessor lab is fully equipped to provide the students with an environment to implement and experiment knowledge acquired in the classroom. The lab is equipped with the facilities to conduct all the experiments with 8085 processors and 8086 processors including interfacing various devices like key board, LCD display stepper motor and elevators, ADC and DAC boards etc.</p></div>
                                    <div><img src="ee7.jpg" width="250px" height="200px" alt="Measurements Lab" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Power Electronics Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The lab is equipped with IGBT chopper with 230/110V Transformer & DC Motor (2.5HP, 230V, 1500 rpm) 3 Phase IGBT power inverter with 1HP, 415V,50Hz, 3 phase Induction Motor SCR Trainer Kit, Solar Voltaic training system. The students use this lab for regular lab sessions, project works and research activities.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Systems and Control Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The lab is equipped with AC& DC Servomotor, Flow Control Trainer , Syncro trainer,Temperature Process Controller, P,PI,PID control Trainer System Software-Matlab PC(5 Nos) and DSO.This lab is mainly used for UG Students.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Power Systems Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The lab is equipped with different types of Relay testing kit, Insulation megger,Electromagnetic type Over Voltage Relay. This lab is meant for both PG and UG students and is utilised for regular lab session and project works.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>High Voltage Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>This is a newly set up lab in the department and is mainly used for UG Students.This lab equipped with (0-60 kV) Manual Oil Test Kit,100kV High Voltage Tester With Sphere Gap Assembly, 30kVAC/40kV DC Test Kit. This lab</p></div>
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample6">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Faculty</h3></div>
                                <div className={darkMode?"text-info mb-3 bg-dark gap-3":"text-primary mb-3 gap-3"}>
                                    <PersonDetails personimage="src/images/people/default.png" personname="Francis M Fernandez" personnumber="9074866202" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="DINESH GOPINATH" personnumber="9633929573" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="ANJANA K R" personnumber=" 9746475534" persondesignation="Associate Professor" personemail="anjana.kr@gecbh.ac.in"/>
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. VINOD V" personnumber=" 9446107586" persondesignation="Associate Professor"/>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Technical Staff</h3></div>
                                <div className={darkMode?"text-info mb-3 bg-dark gap-3":"text-primary mb-3 gap-3"}>
                                    <PersonDetails personimage="src/images/people/default.png" personname="SRI. LINTO JOSE" personnumber="9447512029" persondesignation="Instructor Grade I" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="SRI. JAYAKUMAR S" personnumber=" 9496153244" persondesignation="Trade Instructor"/>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={darkMode?"d-flex p-3 text-info bg-dark border border-white border-1 mb-5 departmentcontainer":"d-flex p-3 text-white bg-primary mb-5 departmentcontainer"}> 
                    <div className="mb-5"><img src="fransis.jpg" width="150px" height="150px" alt="Francis" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr.Francis M Fernandez</h5></div>
                        <div><h6>Professor</h6></div>
                        <div><h6>9074866202</h6></div>
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

export default EE

