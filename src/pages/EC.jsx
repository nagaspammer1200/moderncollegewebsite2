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

const EC = () => {
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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Department of Electronics & Communication Engineering</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 border-top border-1 border-primary bg-dark":"d-flex personcontainer3 p-3"}>
            <div className="p-3">
                <div className="mb-5"><ImageSlider imgone="src/images/departments/ec1.jpg" imgtwo="src/images/departments/ec2.jpg" imgthree="src/images/departments/ec1.jpg" imgfour="src/images/departments/ec2.jpg" altone="Laboratory" alttwo="Soldering" altthree="Lab Work" altfour="Soldering"/></div>
                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>About the Department</h3></div>
                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The Department of Electronics and Communication Engineering was established in the academic year 1999-2000. The department offers 4 years Bachelors degree program (B.Tech) in Electronics and Communication Engineering. 2 years Masters degree program (M. Tech.) started in the year 2012-13, in Electronics and Communication Engineering with specialization in Signal Processing. <br /><br />In addition, with the co-operation of Department of Mechanical Engineering and Mercedes -Benz India Private Ltd, department offers 6 month Diploma course ADAM, Advanced Diploma in Automotive Mechatronics. <br /><br />The students are admitted to the B. Tech. program based on the rank list of the entrance examination KEAM conducted by the Government of Kerala every year. The annual intake is 60 students. An additional 6 students are admitted in the third semester through lateral entry. Electronics and Communication engineering of this institute is a preferred branch by the top ranked students of Kerala Engineering Entrance Examination. The admission to PG program is done through centralized allotment by the Director of Technical education (DTE), based on a valid GATE score.(http://www.dtekerala.gov.in/index.php/en/) The annual intake is 18 students.<br /><br /><br />Advanced Diploma in Automotive Mechatronics (ADAM) course is one of the social-oriented programs initiated by Mercedes-Benz India in collaboration with prestigious Government Institutions across India. The admission to ADAM course is done through ADAM entrance exam, conducted by the college.<br /><br />Our students bag very good results in university exams with ranks. Almost all eligible students of this department get placement through the Career Guidance and Placement Unit (CGPU) of the college. Most of the alumni of the college are currently working in reputed national and international organizations. Many of them pursue higher studies in IITs, IISc, IIMs, NITs and top ranked foreign Universities.<br /><br />The faculty of the department is the best of the lot and most of them have obtained higher qualifications from premier institutions. Many of the faculty members are undergoing Ph. D and they undertake projects funded through Govt. agencies. The goal of our department is to produce highly knowledgeable competent resourceful magnanimous and self-disciplined young engineers/entrepreneurs.<br /><br /></p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3"}><h3>VISION</h3></div>
                        <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p><i>A learning hub in electronics and communication engineering, that enables students develop engineering fundamentals, and that builds bidirectional</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                    <i>bridges with leading industries and world-class research centers.</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer mb-5">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>MISSION</h3></div>
                        <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p><i>Establish a learning environment that enables students build the fundamentals and study advanced disciplines related to electronics and communication</i></p></div>
                        <div>
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}><p><i>engineering. <br /><br />Promote innovation and aptitude for research by exposing students and faculty into new areas of technology.<br /><br />Provide an ethical and value-based education by encouraging activities addressing societal needs. </i><br /><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                        <div class="gap-1">
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                Program Education Objectives(PEOs)
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                Program Specific Outcomes (PSOs)
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                Program Outcomes (POs)
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                Department Programmes
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                                Department Facilities
                            </button>
                            <button className={darkMode?"btn btn-warning text-black m-2":"btn btn-primary text-black m-2"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                                Faculty
                            </button>
                        </div>
                        <div className="collapse" id="collapseExample1">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PEO 1</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>To produce well qualified        professionals with a profound knowledge of technical fundamentals in Electronics and Communication as well as principles of mathematics and science, reaching for advanced degrees in engineering and related fields at internationally leading institutes.</p></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PEO 2</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>To equip graduates in identifying, analyzing, and formulating solutions to technological problems catering to the needs of society in field of electronics and communication engineering, adherent to societal moral values and professional ethics.</p></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PEO 3</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>To nurture graduates to be well prepared for the industry with core engineering competency, comprehensive knowledge of modern engineering tools and good managerial skills that will enable them to have a long term engineering / entrepreneurship careers.</p></div>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample2">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PSO 1</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>i Basic Knowledge: Represent, analyze and synthesize systems making use of theoretical knowledge, experimental data, and practical insight, arising in the fields of analog and digital integrated circuits, signal processing, communication, control, radio frequency applications and micro processor based applications.</p></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PSO 2</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>ii Technical Proficiency: Identify the advanced intra/inter disciplinary areas associated with electronics and communication engineering, informed by contextual knowledge on contemporary industry, research and societal needs, and formulated the related problems.</p></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PSO 3</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>iii Professional Soft skills: Adapt to the very fast technological changes in the field of electronics and communication engineering; be able to articulate the ideas and principles combining both mathematical precision and engineering intuition; be able to work in a collaborative environment keeping up ethical values.</p></div>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample3">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>PO</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>i Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>ii Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>iii Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>iv Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>v Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>vi The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>vii Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>viii Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>ix Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>x Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>xi Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p>xii Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change</p></div>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample4">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>Department Programmes</u></h4></div>
                                <div className={darkMode?"text-success":"text-primary"}><h4><u>Courses Offered</u></h4></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p><i className="bi bi-star-fill"></i> B.Tech Degree course in Information Technology</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p><i className="bi bi-star-fill"></i>Lateral entry for Diploma holders</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p><i className="bi bi-star-fill"></i> M.Tech in Electronics and Communication Engineering with specialization in Signal Processing</p></div>
                                <div className={darkMode?"text-info":"text-secondary"}><p><i className="bi bi-star-fill"></i> Diploma course ADAM (Advanced Diploma in Automotive Mechatronics)</p></div>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample5">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Department Facilities</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The following are the laboratory facilities of Electronics & Communication Engineering Department.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Electronic Circuits Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>Electronics Circuits lab is well equipped with the latest signal generators, oscilloscopes, digital trainer kits and measuring instruments. Students of various branches design and test their analog/ digital/ mixed signals, digital circuits as part of their curriculum. Guidance is provided to the students by a team of expert faculty and lab technicians.</p></div>
                                    <div><img src="src/images/departments/ec4.jpg" width="250px" height="200px" alt="Arduino on Laptop" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Digital Electronics Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The Digital Lab is well equipped with all the trainer kits and measuring instruments for the proper setting up of different Digital circuits and experiment. An IC tester is also available in the lab for testing of ICs.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Communication Engineering Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>Communication Engineering laboratory focuses on training the students in both analog and digital transmission/reception of signals. The students start with experiments on analog systems like amplitude modulation, frequency modulation and phase modulation. A mini AM transmitter is constructed by them in the MW frequency of electromagnetic spectrum and they do a live transmission with minimum power output. The signals are then received in a pocket AM radio. Learning the concepts, with small applications give them plenty of joy and real motivation towards their studies. The other important area of analog signal processing is the phase locked loop. Students are given NE 565 PLL IC and made to conduct an experiment to find the capture and lock ranges with their designed specifications. Here the students make use of function generators with frequency sweep facility.</p></div>
                                    <div><img src="src/images/departments/ec6.jpg" width="250px" height="200px" alt="Communication Engineering Lab" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Fiber Optics And Photonics Research Lab</h3></div>
                                <div className={darkMode?"mb-5 gap-5 nsscontainer1 text-info":"mb-5 gap-5 nsscontainer1"}>
                                    <div><p>The Fiber Optics and Photonics Research Lab was established in the year 2012. Apart from catering the needs of the under graduate students to carry out their UG level experiments, the lab is equipped with facilities to accommodate PG students and research scholars. Significant number of publications in SCI indexed journals have emerged from the lab in the recent past.</p></div>
                                    <div><img src="src/images/departments/ec7.jpg" width="250px" height="200px" alt="Arduino on Laptop" /></div>
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h5>Ongoing Research Work</h5></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>1. Optisystem V13.0 Simulation Software with 3 user license. <br /><br />2. Erbium Doped Fiber Amplifier with accessories</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h5>For UG students</h5></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The optical communication laboratory is setup to complement the topics studied in the optical communication theory course. The lab is equipped with fiber optic trainer kits and modules to enable the study of components of an optical communication system. The students perform experiments to study the characteristics of optical sources (LED & LD) and optical detectors (LD & APD) and optical fibers. Fault detection in a fiber link is studied using the OTDR module. A FSO module enables study of transmission of optical signal in free space. Optiwave simulator is also available in the lab which is an optical communication simulator.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Microwave Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>In Microwave Lab the students are exposed to the microwave active devices like klystron, gunn diode and passive devices isolator, circulator, slide screw tunner, magic tee, directional coupler, horn antenna, attenuator, terminations. The students perform all the experiments as prescribed by the university.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Micro Controller/VLSI/Embedded Systems Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>Microcontroller lab helps the students enhance their knowledge about various processors such as 8085, 8086, microcontrollers, Pentium processors and also the interfacing of these processors with other equipments. Students from other branch of engineering and sciences also come to this lab and develop their skills in the field of microprocessor and its applications. The features and facilities available in this lab will help the students do their projects and enhance their knowledge about the latest trends and technologies.  <br /><br />The VLSI and Embedded Systems Lab provides all the hardware and software resources useful for laboratory experiments related to various core and elective courses, such as: Digital Design, Computer Organization, Embedded System Design, VLSI Design, VLSI Sub-system Design etc.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Nano Electronics Research Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>Nanotechnology is a fast growing area with its application in various fields including electronics. A research lab is being set up for carrying out research projects for UG, PG and research students. The lab at present houses various equipments including sonicator, hot plates, muffled furnace, bench top cooling centrifuge and magnetic stirrers. The various ongoing projects here are synthesis of nanocomposites for various electronic applications, fabrication of solar cells, Synthesis and characterization of CNT based nanocomposites and their application in solar cells. Prof. Nelsa Abraham is leading this initiative.</p></div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Electronics Workshop/Project Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info":"mb-5 p-3"}><p>The Workshop is sufficiently outfitted with all the equipments and accessories for conducting practical classes in wiring practices as per BIS specifications. Models of modern switchgear and wiring accessories are deployed for the benefit of the students. The electronic side deals with the familiarization of Cathode Ray Oscilloscope (CRO), Bread board connections, PCBs and Soldering station. The students are exposed to the current practices in domestic wiring and industrial installation.
                                esting and measuring facilities for doing mini project and project for the under graduate students are also provided in this lab.</p></div>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample6">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Faculty</h3></div>
                                <div className={darkMode?"text-info mb-3 bg-dark gap-3":"text-primary mb-3 gap-3"}>
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. HARI.R" personnumber="9447725443" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR.RAJEEV RAJAN" personnumber="9495816851" persondesignation="Associate Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. NELSA ABRAHAM" personnumber=" 9495975074" persondesignation="Associate Professor" />
                                </div>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Technical Staff</h3></div>
                                <div className={darkMode?"text-info mb-3 bg-dark gap-3":"text-primary mb-3 gap-3"}>
                                    <PersonDetails personimage="src/images/people/default.png" personname="VINOD KUMAR P S" personnumber="+9446422003" persondesignation="Trade Instructor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="VISHNU J" personnumber="7907455144" persondesignation="Trade Instructor" personemail=" vishnucpt@gmail.com"/>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={darkMode?"d-flex p-3 text-info bg-dark border border-white border-1 mb-5 departmentcontainer":"d-flex p-3 text-white bg-primary mb-5 departmentcontainer"}> 
                    <div className="mb-5"><img src="src/images/departments/hari.jpg" width="150px" height="150px" alt="Haripriya" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr. Hari R.</h5></div>
                        <div><h6>Professor</h6></div>
                        <div><h6>9447725443</h6></div>
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

export default EC

