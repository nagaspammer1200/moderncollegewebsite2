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

const ME = () => {
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
          <div className="bg-primary p-5 text-white"><h2>Department of Mechanical Engineering</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="mb-5"><ImageSlider imgone="src/images/departments/me1.jpg" imgtwo="src/images/departments/me2.jpg" imgthree="src/images/departments/me3.jpg" imgfour="src/images/departments/me4.jpg" altone="Blood Donation" alttwo="Mechanical Machines" altthree="Pelton Turbine" altfour="Mechanical Machines More"/></div>
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className="mb-5 p-3"><p>The Department of Mechanical Engineering at Government Engineering College, Barton hill was established in the academic year 1999, offering a four-year B.Tech course in Mechanical Engineering. The annual intake is 60 students. Department is planning to start an M.Tech course in Computational Mechanics and AICTE approval for the same is awaited. All the students are allotted from among the top ranked students of the Common Entrance Examination (CEE) conducted by the Govt. of Kerala. Many of the students bagged top ranks in the Kerala University. Most of the students passed out from the department are working in top ranked international and multinational companies. A number of students from the department pursue their higher studies at IITs and IIMs and also at top ranked foreign universities. <br /><br />The academic focus of the department is to impart state of the art technical knowledge to the students. Conceptual understanding supported with experimental knowledge moulds our students competent enough to face the technical challenges of our nation. The faculty of Mechanical Engineering are well qualified and academic as well as industrial expertise is not at dearth. Most of the faculty members have obtained higher qualifications from premier institutions, both national and international. Faculty members actively pursue research through students and many undertake projects funded through Govt. agencies.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className="text-primary mb-3 ms-3"><h3>VISION</h3></div>
                        <div className="mb-2 p-3"><p><i>Identify ourselves as a globally recognized department for its outstanding education, research, and outreach</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className="card card-body shadow p-2">
                                    programs that transform our students into competent, innovative and socially responsible engineers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer mb-5">
                        <div className="text-primary mb-3 ms-3"><h3>MISSION</h3></div>
                        <div className="mb-2 p-3"><p><i>Impart quality engineering education to students by providing scientific, technical and mathematical skills.</i></p></div>
                        <div>
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className="card card-body p-2" >
                                        <p>Impart training on leadership skills, communication skills and social awareness to transform the students into engineering professionals with integrity. <br />Nurture capabilities in research, innovation and sustainability to make the students globally competitive. <br />Network with renowned institutions in industry, academics and research. <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                        <div class="gap-1">
                            <button class="m-2 btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                Program Education Objectives(PEOs)
                            </button>
                            <button class="m-2 btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                Program Specific Outcomes (PSOs)
                            </button>
                            <button class="m-2 btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                Program Outcomes (POs)
                            </button>
                            <button class="m-2 btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                Department Programmes
                            </button>
                            <button class="m-2 btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                                Department Facilities
                            </button>
                            <button class="m-2 btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                                Faculty
                            </button>
                        </div>
                        <div class="collapse" id="collapseExample1">
                            <div class="card card-body">
                                <div className="text-primary"><h4><u>PEO 1</u></h4></div>
                                <div className="text-secondary"><p>To prepare students for successful careers in industry/ research/ academics/ administration and to become successful entrepreneurs.</p></div>
                                <div className="text-primary"><h4><u>PEO 2</u></h4></div>
                                <div className="text-secondary"><p>To train students with solid foundation in mathematics, science and engineering to develop innovative and sustainable solutions for engineering problems and new products.</p></div>
                                <div className="text-primary"><h4><u>PEO 3</u></h4></div>
                                <div className="text-secondary"><p>To equip students with the necessary skills, attitudes and ethics to undertake and execute challenging problems based on societal and environmental needs as well as to develop ability to relate engineering issues in a broader social context.</p></div>
                                <div className="text-primary"><h4><u>PEO 4</u></h4></div>
                                <div className="text-secondary"><p>To prepare students with capabilities for effective communication, management and team work through a multidisciplinary approach.</p></div>
                                <div className="text-primary"><h4><u>PEO 5</u></h4></div>
                                <div className="text-secondary"><p>To provide an environment that promotes leadership qualities, provides awareness to latest developments in engineering practices and creates a quest for lifelong learning.</p></div>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body">
                                <div className="text-primary"><h4><u>PSO 1</u></h4></div>
                                <div className="text-secondary"><p>Apply scientific and mathematical principles to the design, analysis and synthesis of mechanical engineering systems.</p></div>
                                <div className="text-primary"><h4><u>PSO 2</u></h4></div>
                                <div className="text-secondary"><p>Apply modern management tools and mechanical engineering principles to resolve complex industrial and real life problems.</p></div>
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
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample5">
                            <div class="card card-body">
                                <div className="text-primary mb-3 ms-3"><h3>Department Facilities</h3></div>
                                <div className="mb-5 p-3"><p>Department of Mechanical Engineering has six laboratories. This include Computer aided Design Lab, Mechanical Engineering Lab, Thermal Engineering Lab, Strength of Materials Lab and Engineering Workshop. IC Engines Lab and Fluid Mechanics & Machines Lab are nearing completion.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Department Library</h3></div>
                                <div className="mb-5 p-3"><p>Our department library has over 280 books. It is spread over 3 bookshelves and text books and seminar reports and project reports. Complimentary copies received from publishers and donated by faculty/ students are kept in the department library. Location of the library is HOD(ME) room, books are lend to students as well as faculty for reference.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Computer Aided Design Laboratory (CAD Lab)</h3></div>
                                <div className="mb-5 p-3"><p>This lab has altogether 37 numbers of latest Core2Duo desktops and workstations. Other facilities include network printers, scanners and multimedia projectors. The design software available includes AutoDesk Inventor, SolidEdge and AutoCAD. Finite Element software ANSYS is used for the numerical computations. Computer Aided Drafting and Modeling Lab of Third semester and Cad Analysis Lab of sixth semester are conducted in this laboratory.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Mechanical Engineering Laboratory</h3></div>
                                <div className="mb-5 p-3"><p>Main facilities of this lab include CNC machines (both lathe and milling machines), Toolmaker’s microscope, profile projectors, sine bar and other measuring instruments. PLC programmer and Hydraulic power pack are the new additions in this lab. Programmable Robotic Arm will soon join the list.Mechanical Engineering Lab of seventh semester is conducted in this lab.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Thermal Engineering Laboratory</h3></div>
                                <div className="mb-5 p-3"><p>This lab has heat transfer, refrigeration and air conditioning experimental setups. Heat transfer experiments include free convection, forced convection, composite wall, and heat exchange apparatus. Performance study setup on blowers and multistage compressors are also available. Thermal engineering lab of seventh semester is conducted in this lab.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Strength of Materials Laboratory</h3></div>
                                <div className="mb-5 p-3"><p>This facility include universal testing machine, spring testing machine, hardness-testing machine and impact test machine. Torsion meter, torsion pendulum and moment of inertia setups are also included. Civil Engineering lab of third semester is conducted in this lab.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Engineering Workshop</h3></div>
                                <div className="mb-5 p-3"><p>All branch of students of this college perform workshop experiments in the first year of UG course. Workshop includes carpentry, sheet metal, smithy, plumbing, fitting, welding and foundry sections.</p></div>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample6">
                            <div class="card card-body">
                                <div className="text-primary mb-3 ms-3"><h3>Faculty</h3></div>
                                <div className="text-primary mb-3 bg-dark gap-3">
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR BIJULAL D." personnumber="9846500146" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR K BINDU KUMAR" personnumber="8129401020" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="HASHIM M." personnumber="8281892648" persondesignation="Associate Professor" personemail="hashim.m@gecbh.ac.in"/>
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. RAKESH P" personnumber="9497574370" persondesignation="Associate Professor" />
                                </div>
                                <div className="text-primary mb-3 ms-3"><h3>Technical Staff</h3></div>
                                <div className="text-primary mb-3 bg-dark gap-3">
                                    <PersonDetails personimage="src/images/people/default.png" personname="MICLE K" personnumber="+9495829630" persondesignation="Trade Instructor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="SHONY .S" personnumber="8075051395" persondesignation="Trade Instructor Grade I" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="GIREESAN A K" personnumber="9497571800" persondesignation="Trade Instructor Grade I" />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="d-flex p-3 text-white bg-primary mb-5 departmentcontainer"> 
                    <div className="mb-5"><img src="src/images/departments/kumar.jpg" width="150px" height="150px" alt="Haripriya" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr. K. Bindu Kumar</h5></div>
                        <div><p>Professor</p></div>
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

export default ME

