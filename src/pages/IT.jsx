import React,{useState} from 'react'
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

const IT = () => {
    const [readMenuOne,setReadMenuOne] = useState(false);
    const [readMenuTwo,setReadMenuTwo] = useState(false);
    const changeMenuOne  = () => {
        setReadMenuOne(!readMenuOne)
    }
    const changeMenuTwo  = () => {
        setReadMenuTwo(!readMenuTwo)
    }
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Department of Information Technology</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="mb-5"><ImageSlider imgone="src/images/departments/it1.jpg" imgtwo="src/images/departments/it2.jpg" imgthree="src/images/departments/it3.jpg" imgfour="src/images/departments/it2.jpg" altone="IT Toppers" alttwo="IT Block" altthree="IT Lab" altfour="IT Block"/></div>
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className="mb-5 p-3"><p>The Department of Information Technology at Government Engineering College, Barton hill was established in the academic year 1999, offering a four year B.Tech. course in Information Technology. M.Tech. Course in Information Technology with specialization in Network Engineering commenced from the academic year 2011-2012. <br />The Department lays strong emphasis on ensuring that the students have a thorough idea of core concepts. Further, the department focuses on nurturing the analytical abilities of students and exposes them to the latest technologies and equips them with industry-specific skills.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className="text-primary mb-3 ms-3"><h3>VISION</h3></div>
                        <div className="mb-2 p-3"><p><i>To be a centre of higher learning in Information Technology that imparts qualityclose engineering education and</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className="card card-body shadow p-2">
                                    engineering education and fosters innovative research reaching out to the society.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer mb-5">
                        <div className="text-primary mb-3 ms-3"><h3>MISSION</h3></div>
                        <div className="mb-2 p-3"><p><i>Establish conducive learning environment in the field of Information Technology</i></p></div>
                        <div>
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className="card card-body p-2" >
                                    <p>Mould IT professionals with ethical values to address the needs of the society. Collaborate with academic, industrial, and research organization of repute.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div class="gap-1">
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            About
                        </a><br /><br />
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                            Program Education Objectives(PEOs)
                        </button><br /><br />
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                            Program Specific Outcomes (PSOs)
                        </button><br /><br />
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                            Program Outcomes (POs)
                        </button><br /><br />
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                            Department Programmes
                        </button><br /><br />
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                            Department Facilities
                        </button><br /><br />
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                            Faculty
                        </button><br /><br />
                    </div>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div className="mb-5 p-3"><p>The college now offers five full time B. Tech degree courses. The duration of the Under Graduate Programme is four years. As per the AICTE norms, the annual intake of each UG course is sixty.</p></div>
                            <div className="mb-5 ms-3"><img src="src/images/departments/it4.jpeg" width="85%" height="80%" alt="IEEE Members" /></div>
                            <div className="mb-5 p-3"><p>The faculty and staff of the department are well qualified and many of them are alumni of IITs and NITs. Currently we have 3 Ph.D holders in our faculty list. The department has well-equipped labs with state-of–the art technologies.</p></div>
                        <div className="mb-5 ms-3"><img src="src/images/departments/it5.jpeg" width="85%" height="80%" alt="IEEE Members" /></div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample1">
                        <div class="card card-body">
                            <div className="text-primary"><h4><u>PEO 1</u></h4></div>
                            <div className="text-secondary"><p>Achieve professional competency in the field of Information Technology to become successful IT solution providers and entrepreneurs.</p></div>
                            <div className="text-primary"><h4><u>PEO 2</u></h4></div>
                            <div className="text-secondary"><p>Acquire scientific and engineering knowledge to pursue higher education and research.</p></div>
                            <div className="text-primary"><h4><u>PEO 3</u></h4></div>
                            <div className="text-secondary"><p>Become professionals with effective interpersonal skills, leadership qualities and social concern.</p></div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body">
                            <div className="text-primary"><h4><u>PSO 1</u></h4></div>
                            <div className="text-secondary"><p>Design, implement and manage efficient and secure networking solutions with state-of-the- art Information and Communication Technologies.</p></div>
                            <div className="text-primary"><h4><u>PSO 2</u></h4></div>
                            <div className="text-secondary"><p>Design and develop solutions for real world problems using suitable programming languages and appropriate platforms by following the best software engineering principles and methodologies.</p></div>
                            <div className="text-primary"><h4><u>PSO 3</u></h4></div>
                            <div className="text-secondary"><p>Develop innovative solutions in the emerging areas of Information Technology.</p></div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body">
                            <div className="text-primary"><h4><u>PO</u></h4></div>
                            <div className="text-secondary"><p>i Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems</p></div>
                            <div className="text-secondary"><p>ii Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p></div>
                            <div className="text-secondary"><p>iii Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations</p></div>
                            <div className="text-secondary"><p>iv Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions</p></div>
                            <div className="text-secondary"><p>v Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p></div>
                            <div className="text-secondary"><p>vi The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p></div>
                            <div className="text-secondary"><p>vii Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development</p></div>
                            <div className="text-secondary"><p>viii Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p></div>
                            <div className="text-secondary"><p>ix Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings</p></div>
                            <div className="text-secondary"><p>x Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p></div>
                            <div className="text-secondary"><p>xi Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments</p></div>
                            <div className="text-secondary"><p>xii Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change</p></div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample4">
                        <div class="card card-body">
                            <div className="text-primary"><h4><u>Department Programmes</u></h4></div>
                            <div className="text-primary"><h4><u>Courses Offered</u></h4></div>
                            <div className="text-secondary"><p><i className="bi bi-star-fill"></i> B.Tech Degree course in Information Technology</p></div>
                            <div className="text-secondary"><p><i className="bi bi-star-fill"></i>Lateral entry for Diploma holders</p></div>
                            <div className="text-secondary"><p>All the students for B.Tech course are allotted from among the top ranked students of Kerala Engineering Entrance Examination. Many of the students bagged top ranks in the Kerala Technological University. Most of the students passed out from the department are working in top ranked international and multinational companies. Lots of students from the department got selection for PG programmes in Indian Institute of Technologies and top ranked foreign universities.</p></div>
                            <div className="text-secondary"><p><i className="bi bi-star-fill"></i> M.Tech in Network Engineering</p></div>
                            <div className="text-secondary"><p><i className="bi bi-star-fill"></i>Research</p></div>
                            <div className="text-secondary"><p>1. Mobile Adhoc Networking <br /><br />2. Performance evaluation of computer systems<br /><br />3. Network Security<br /><br />4. Parallel computing<br /><br />5. Artificial Neural Networks<br /><br />6. Natural Language processing<br /><br />7. Digital Image Processing<br /><br />8. Advanced Data Structures<br /><br /></p></div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample5">
                        <div class="card card-body">
                            <div className="text-primary mb-3 ms-3"><h3>Department Facilities</h3></div>
                            <div className="mb-5 p-3"><p>The Department of Information Technology has a video conferencing facility, a central server room and Seven laboratories. The department has the necessary software and hardware infrastructure for the conduct of all the 10 laboratory/practical subjects in the B.Tech and M.Tech curriculum. All the student projects are done in-house. Each laboratory room has networked printers over Ethernet LAN. Although the emphasis is on the use of Linux and open source software, other popular proprietary software platforms are also supported. In addition,the department provides the necessary technical support for the smooth functioning of the campus-wide network in the college. A 100Mbps internet connection via firewall provided to the entire campus through fibre optic links. Also have 10 Mbps NMEICT connection and 10 Mbps Leased line connections.</p></div>
                            <div className="mb-5 p-3"><p>The IT department is managing the entire campus network including Administrative office, Library, and other departments and sections in the campus. More over the computer laboratories are under the IT department are also functioning as the option facilitation centre during the time of the Centralized Allotment process (CAP) of the Commissioner for Entrance Examinations. In additions to these, Biometric Punching, WIFI management, Website management, DDFS, Conducting Online Exams/Training programmes for CGPU,Govt.(ASAP/NASSCOM) and other organizations (Online banking recruitments) etc. are handled by the IT Department.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Department Library</h3></div>
                            <div className="mb-5 p-3"><p>A robust and dynamic library is vital to the academic life of the students as well as the Faculty. The library provides an environment for discovery, reflection, and expansion of knowledge. The department library serves as a central organ of academic activity in the IT Department. The Department has a rich & vast collection of more than 300 books, periodicals and reports. It also has one copy each of all B.Tech. Projects and M.Tech.Thesis work carried out in the department in recent years. The library serves to provide a calm and cosy ambience conductive to long hours of study. The library opens on all working days of the Institute from 9 AM to 4:00 PM. The faculty in charge of the Library is Prof.Jayasree P</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>The video conferencing facility</h3></div>
                            <div className="mb-5 p-3"><p>The video conferencing facility was officially inaugurated by Sri. K. Muraleedharan, MLA on 27th March 2015. This room is equipped with LifeSize VC module, LED TV sets, LCD projectors, Audio Mixers, Microphones and Speakers. The VC room facilitate Direct Video conferencing with 3 centers at a time with seating capacity 72 and IP based dedicated VC units.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Server Room</h3></div>
                            <div className="mb-5 p-3"><p>Server room has 6 blade servers and 4 rack servers. The OS platforms provided are CentOS, Red hat, Ubuntu and Windows 2008 Server. Different servers are set apart for managing various activities. For Networking/Security purpose there are central firewall Fortigate 200B,Forti Analyser 100C,CISCO Router- Layer 3,SAN – HD F850-CBSS 110P Hitachi Unified storage 110 Base, controller Box – SFF 24X24 with accessories- 20 TB, Ruckus Zone Director-Wi-Fi Network, Cisco Managed switches-24 port 4 SFT.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Web Application Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab has 72 Windows based desktops with internet connectivity. This lab is also used for conducting online examinations.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Programming Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab has 68 dual boot desktops with internet connectivity.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Internet Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab runs on thin-client machines running under EnterpriseLinux as wellas desktops running under Windows. 36terminals areprovided forInternetconnectivityand running various software labsinthecurriculum.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Network Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab has 8 Cisco routers,switches,high- speed modems and 36 dual-boot desktop machines. A wireless LAN laboratory with wireless access points/routers,wireless site survey kit and other equipmentset up here.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Software Testing Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab has 15 desktops with Windows 8 Professional, Intel Core i5 Processors with internet connectivity. The Functional Testing software (QTP) hasbeenset uphere.</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Network security Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab has 19 desktops with Windows 8 Professional, Intel Core i5 Processors with internet connectivity. Six number ofCisco Router 1901 series and six numbers of Cisco catalyst 1960 Switch 48 Ethernet 10/100 ports with 2 10/100/1000TX</p></div>
                            <div className="text-primary mb-3 ms-3"><h3>Project Laboratory</h3></div>
                            <div className="mb-5 p-3"><p>This lab has 15 desktops with Windows 8 Professional, Intel Core i5 Processors with internet connectivity.</p></div>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample6">
                        <div class="card card-body">
                            <div className="text-primary mb-3 ms-3"><h3>Faculty</h3></div>
                            <div className="text-primary mb-3 bg-dark gap-3">
                                <PersonDetails personimage="src/images/people/default.png" personname="Shamna HR" personnumber="+9446422003" persondesignation="Professor" />
                                <PersonDetails personimage="src/images/people/default.png" personname="Vijayanand KS" personnumber="9447865892" persondesignation="Professor" personemail="vijayanand.ks@gecbh.ac.in"/>
                                <PersonDetails personimage="src/images/people/default.png" personname="Manju R" personnumber="9961330220" persondesignation="Associate Professor" />
                                <PersonDetails personimage="src/images/people/default.png" personname="Haripriya AP" personnumber=" 9446084405" persondesignation="Associate Professor" />
                            </div>
                            <div className="text-primary mb-3 ms-3"><h3>Technical Staff</h3></div>
                            <div className="text-primary mb-3 bg-dark gap-3">
                                <PersonDetails personimage="src/images/people/default.png" personname="Shamna HR" personnumber="+9446422003" persondesignation="Professor" />
                                <PersonDetails personimage="src/images/people/default.png" personname="Vijayanand KS" personnumber="9447865892" persondesignation="Professor" personemail="vijayanand.ks@gecbh.ac.in"/>
                                <PersonDetails personimage="src/images/people/default.png" personname="Manju R" personnumber="9961330220" persondesignation="Associate Professor" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-3 text-white bg-primary mb-5 departmentcontainer"> 
                    <div className="mb-5"><img src="src/images/departments/haripriya.png" width="150px" height="150px" alt="Haripriya" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr. Haripriya A. P.</h5></div>
                        <div><p>Associate Professor</p></div>
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

export default IT

