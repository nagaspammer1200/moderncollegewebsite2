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

const CE = () => {
    const [readMenuTwo,setReadMenuTwo] = useState(false);
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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Department of Civil Engineering</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 border-top border-1 border-primary bg-dark":"d-flex personcontainer3 p-3"}>
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>Amongst all branches of engineering, the range and application of civil engineering is the broadest and the most visible. The nature of this profile makes it an evergreen prospect for career minded youngsters. Civil engineers are problem solvers, meeting the challenges of pollution, traffic congestion, drinking water and energy needs, urban redevelopment and community planning. The next decades will be the most creative, demanding, and rewarding of times for Civil engineers. <br /> <br />The Department of Civil Engineering was established in the year 2012 in Government Engineering College, Barton Hill, with an annual intake of 60 students. The students are selected from the rank list of Kerala Engineering Entrance Examination conducted by the Office of the Commissioner for Entrance Examinations, Government of Kerala. The experienced, well qualified and dedicated faculty of the Department motivates and guides the students in their overall development. In order to expose them to the latest technological developments within the field, various visiting faculty programmes, invited talks by academicians, training programmes and Quiz programmes are continuously being organised. An active Civil Engineering Association enables the students to showcase their talents.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b><i>VISION</i></b></h3></div>
                        <div className={darkMode?"mb-2 p-3 text-info textcontainer4":"mb-2 p-3 textcontainer4"}><p><i>A centre of excellence having global recognition for outstanding education, socially relevant research and innovation in the field of Civil Engineering.</i></p></div>
                    </div>
                    <div className="cardcontainer mb-5">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b><i>MISSION</i></b></h3></div>
                        <div className={darkMode?"mb-2 p-3 text-info textcontainer4":"mb-2 p-3 textcontainer4"}><p><i>Establish conducive learning environment in the field of Information Technology</i></p></div>
                        <div>
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                    <p><i>Aspiration for life-long learning in the field of Civil Engineering. <br /><br />Motivate students for higher studies, research and innovation to make them globally competitive for Civil Engineering Profession.<br /><br />Inculcate a tradition of professional ethics, social commitment and sustainable engineering practices.</i><br /><br /></p>
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
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>To produce well qualified professionals with a profound knowledge in Civil Engineering and principles of mathematics and science,, reaching advanced levels in Engineering and related fields.</p></div>
                                <div className={darkMode?"text-success":"text-primary "}><h4><i><u>PEO 2</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>To enable students to effectively communicate and implement technological concepts and design and to work as a team in multidisciplinary environment to excel in their careers.</p></div>
                                <div className={darkMode?"text-success":"text-primary "}><h4><i><u>PEO 3</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>To equip graduates in identifying, analysing and formulating solutions to complex engineering problems catering to global needs in the field of Civil Engineering, by applying modern, sustainable and eco-friendly technologies, adherent to societal moral values and professional ethics.</p></div>
                                <div className={darkMode?"text-success":"text-primary "}><h4><i><u>PEO 4</u></i></h4></div>
                                <div className={darkMode?"text-info textcontainer4":"text-secondary textcontainer4"}><p>To nurture students to be well prepared for the industry with core engineering competency, comprehensive knowledge of modern engineering tools and good managerial skills that will enable them to have a long term engineering / entrepreneurship careers.</p></div>
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
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample5">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Department Facilities</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>Department of Civil Engineering has seven laboratories. This include Strength of Materials Lab, Geotechnical Lab, Transportation Lab, Survey Lab, Environmental Engineering Lab, Concrete Lab and CACE Lab. The laboratories of the department have state-of-the art equipmentsandare made available for the regular academic work and for the research works. The following laboratories are managed by the department.</p></div>
                                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Strength of Materials Lab</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The laboratory has facilities for conducting practical classes for undergraduate programs. The undergraduate students are being encouraged to take up topics in the field of Structural Engineering for their project work by making use of facilities available in the laboratory. <br /><br /><br /><br />Various equipment available in the lab are:<br /><br />1. Computerized UTM of capacity 120 T<br /><br />2. Universal testing machine of capacity 60T<br /><br />3. Torsion testing machine<br /><br />4. Impact testing machine<br /><br />5. Brinell hardness testing machine<br /><br />6. Rockwell hardness testing machine<br /><br />7. Spring testing machine<br /><br />8. Torsion Pendulum<br /><br />9. Test set up for finding Moment of Inertia for fly wheel <br /><br />10. A uni-axial horizontal shake table with maximum acceleration of 2.0g and maximum load carrying capacity of 60kg has been installed recently. NI Data Acquisition system, high sensitivity accelerometers and modally tuned impact hammer are the additional features.</p></div>
                                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Geotechnical Engineering Lab:</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The laboratory has facilities for conducting practical classes for undergraduate programs, post graduate programmes and for doing various consultancy works in the field of soil mechanics. The undergraduate students are being encouraged to take up topics in the field of Geotechnical Engineering for their project work by making use of facilities available in the laboratory.br <br /><br />Various equipment available in the lab are: <br /><br />1. Sets of Sieves<br /><br />2. Hydrometer<br /><br />3. Pycnometer<br /><br />4. Liquid limit device<br /><br />5. Plastic limit device<br /><br />6. Shrinkage limit testing apparatus<br /><br />7. Core cutter<br /><br />8. Sand replacement apparatus<br /><br />9. Permeability testing apparatus (Constant head & Variable head)<br /><br />10. Proctor compaction apparatus<br /><br />11. Modified Proctor Compaction apparatus<br /><br />12. CBR testing apparatus<br /><br />13. Tri-axial testing machine<br /><br />14. Direct shear apparatus<br /><br />15. UCC apparatus<br /><br />16. Vane shear <br /><br />17. Standard Penetration test apparatus<br /><br />18. Hot air oven <br /><br /></p></div>
                                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Transportation Lab:</h3></div>
                                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The Transportation Engineering Laboratory is equipped with facilities for testing of Aggregates, Bitumen and Soil. The Laboratory is fully equipped for conduct of regular experiments at UG level. <br /><br />Various equipment available in the lab are: <br /><br />1. Los Angeles Abrasion testing machine<br /><br />2. CBR testing machine<br /><br />3. Aggregate Impact testing machine<br /><br />4. Sieve set and sieve shaker<br /><br />5. Flakiness and Elongation testing apparatus<br /><br />6. Angularity number testing apparatus<br /><br />7. Pensky Marten Flash and Fire point apparatus<br /><br />8. Penetrometer<br /><br />9. Softening point testing apparatus<br /><br />10. Constant temperature water bath<br /><br />11. Brooke field Viscometer<br /><br />12. Dynamic cone penetrometer <br /><br />13. Modified MERLIN Roughness testing machine<br /><br />14. Bitumen Extractor</p></div>
                            </div>
                        </div>
                        <div className="collapse mb-4" id="collapseExample6">
                            <div className={darkMode?"card card-body bg-dark border-white border-1 border":"card card-body"}>
                                <div className={darkMode?"text-warning mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>Faculty</h3></div>
                                <div className={darkMode?"text-info mb-3 bg-dark gap-3":"text-primary mb-3 gap-3"}>
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. THULASEEDHARAN V" personnumber="+9567896655" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="LINI R CHANDRAN" personnumber="9447460832" persondesignation="Assistant Professor" personemail=" lini.sam@gecbh.ac.in"/>
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. WILBERT R" personnumber="9495043483" persondesignation="Associate Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. GIRIJA K" personnumber=" 9496178255" persondesignation="Associate Professor" />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={darkMode?"d-flex p-3 text-info bg-dark border border-white border-1 mb-5 departmentcontainer":"d-flex p-3 text-white bg-primary mb-5 departmentcontainer"}> 
                    <div className="mb-5"><img src="thulaseedaran.png" width="150px" height="150px" alt="Haripriya" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr.Thulaseedharan V</h5></div>
                        <div><h6>Professor</h6></div>
                        <div><h6>9567896655</h6></div>
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

export default CE

