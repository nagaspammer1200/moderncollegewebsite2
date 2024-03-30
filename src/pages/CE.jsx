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

const CE = () => {
    const [readMenuTwo,setReadMenuTwo] = useState(false);
    const changeMenuTwo  = () => {
        setReadMenuTwo(!readMenuTwo)
    }
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Department of Civil Engineering</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className="mb-5 p-3"><p>Amongst all branches of engineering, the range and application of civil engineering is the broadest and the most visible. The nature of this profile makes it an evergreen prospect for career minded youngsters. Civil engineers are problem solvers, meeting the challenges of pollution, traffic congestion, drinking water and energy needs, urban redevelopment and community planning. The next decades will be the most creative, demanding, and rewarding of times for Civil engineers. <br /> <br />The Department of Civil Engineering was established in the year 2012 in Government Engineering College, Barton Hill, with an annual intake of 60 students. The students are selected from the rank list of Kerala Engineering Entrance Examination conducted by the Office of the Commissioner for Entrance Examinations, Government of Kerala. The experienced, well qualified and dedicated faculty of the Department motivates and guides the students in their overall development. In order to expose them to the latest technological developments within the field, various visiting faculty programmes, invited talks by academicians, training programmes and Quiz programmes are continuously being organised. An active Civil Engineering Association enables the students to showcase their talents.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className="text-primary mb-3 ms-3"><h3>VISION</h3></div>
                        <div className="mb-2 p-3"><p><i>A centre of excellence having global recognition for outstanding education, socially relevant research and innovation in the field of Civil Engineering.</i></p></div>
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
                                    <p>aspiration for life-long learning in the field of Civil Engineering. <br /><br />Motivate students for higher studies, research and innovation to make them globally competitive for Civil Engineering Profession.<br /><br />Inculcate a tradition of professional ethics, social commitment and sustainable engineering practices.<br /><br /></p>
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
                                <div className="text-secondary"><p>To produce well qualified professionals with a profound knowledge in Civil Engineering and principles of mathematics and science,, reaching advanced levels in Engineering and related fields.</p></div>
                                <div className="text-primary"><h4><u>PEO 2</u></h4></div>
                                <div className="text-secondary"><p>To enable students to effectively communicate and implement technological concepts and design and to work as a team in multidisciplinary environment to excel in their careers.</p></div>
                                <div className="text-primary"><h4><u>PEO 3</u></h4></div>
                                <div className="text-secondary"><p>To equip graduates in identifying, analysing and formulating solutions to complex engineering problems catering to global needs in the field of Civil Engineering, by applying modern, sustainable and eco-friendly technologies, adherent to societal moral values and professional ethics.</p></div>
                                <div className="text-primary"><h4><u>PEO 4</u></h4></div>
                                <div className="text-secondary"><p>To nurture students to be well prepared for the industry with core engineering competency, comprehensive knowledge of modern engineering tools and good managerial skills that will enable them to have a long term engineering / entrepreneurship careers.</p></div>
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
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample5">
                            <div class="card card-body">
                                <div className="text-primary mb-3 ms-3"><h3>Department Facilities</h3></div>
                                <div className="mb-5 p-3"><p>Department of Civil Engineering has seven laboratories. This include Strength of Materials Lab, Geotechnical Lab, Transportation Lab, Survey Lab, Environmental Engineering Lab, Concrete Lab and CACE Lab. The laboratories of the department have state-of-the art equipmentsandare made available for the regular academic work and for the research works. The following laboratories are managed by the department.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Strength of Materials Lab</h3></div>
                                <div className="mb-5 p-3"><p>The laboratory has facilities for conducting practical classes for undergraduate programs. The undergraduate students are being encouraged to take up topics in the field of Structural Engineering for their project work by making use of facilities available in the laboratory.</p></div>
                                <div className="mb-5 p-3"><p>Various equipment available in the lab are:<br /><br />1. Computerized UTM of capacity 120 T<br /><br />2. Universal testing machine of capacity 60T<br /><br />3. Torsion testing machine<br /><br />4. Impact testing machine<br /><br />5. Brinell hardness testing machine<br /><br />6. Rockwell hardness testing machine<br /><br />7. Spring testing machine<br /><br />8. Torsion Pendulum<br /><br />9. Test set up for finding Moment of Inertia for fly wheel <br /><br />10. A uni-axial horizontal shake table with maximum acceleration of 2.0g and maximum load carrying capacity of 60kg has been installed recently. NI Data Acquisition system, high sensitivity accelerometers and modally tuned impact hammer are the additional features.</p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Geotechnical Engineering Lab:</h3></div>
                                <div className="mb-5 p-3"><p>The laboratory has facilities for conducting practical classes for undergraduate programs, post graduate programmes and for doing various consultancy works in the field of soil mechanics. The undergraduate students are being encouraged to take up topics in the field of Geotechnical Engineering for their project work by making use of facilities available in the laboratory.br <br /><br />Various equipment available in the lab are: <br /><br />1. Sets of Sieves<br /><br />2. Hydrometer<br /><br />3. Pycnometer<br /><br />4. Liquid limit device<br /><br />5. Plastic limit device<br /><br />6. Shrinkage limit testing apparatus<br /><br />7. Core cutter<br /><br />8. Sand replacement apparatus<br /><br />9. Permeability testing apparatus (Constant head & Variable head)<br /><br />10. Proctor compaction apparatus<br /><br />11. Modified Proctor Compaction apparatus<br /><br />12. CBR testing apparatus<br /><br />13. Tri-axial testing machine<br /><br />14. Direct shear apparatus<br /><br />15. UCC apparatus<br /><br />16. Vane shear <br /><br />17. Standard Penetration test apparatus<br /><br />18. Hot air oven <br /><br /></p></div>
                                <div className="text-primary mb-3 ms-3"><h3>Transportation Lab:</h3></div>
                                <div className="mb-5 p-3"><p>The Transportation Engineering Laboratory is equipped with facilities for testing of Aggregates, Bitumen and Soil. The Laboratory is fully equipped for conduct of regular experiments at UG level. <br /><br />Various equipment available in the lab are: <br /><br />1. Los Angeles Abrasion testing machine<br /><br />2. CBR testing machine<br /><br />3. Aggregate Impact testing machine<br /><br />4. Sieve set and sieve shaker<br /><br />5. Flakiness and Elongation testing apparatus<br /><br />6. Angularity number testing apparatus<br /><br />7. Pensky Marten Flash and Fire point apparatus<br /><br />8. Penetrometer<br /><br />9. Softening point testing apparatus<br /><br />10. Constant temperature water bath<br /><br />11. Brooke field Viscometer<br /><br />12. Dynamic cone penetrometer <br /><br />13. Modified MERLIN Roughness testing machine<br /><br />14. Bitumen Extractor</p></div>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample6">
                            <div class="card card-body">
                                <div className="text-primary mb-3 ms-3"><h3>Faculty</h3></div>
                                <div className="text-primary mb-3 bg-dark gap-3">
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. THULASEEDHARAN V" personnumber="+9567896655" persondesignation="Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="LINI R CHANDRAN" personnumber="9447460832" persondesignation="Assistant Professor" personemail=" lini.sam@gecbh.ac.in"/>
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. WILBERT R" personnumber="9495043483" persondesignation="Associate Professor" />
                                    <PersonDetails personimage="src/images/people/default.png" personname="DR. GIRIJA K" personnumber=" 9496178255" persondesignation="Associate Professor" />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="d-flex p-3 text-white bg-primary mb-5 departmentcontainer"> 
                    <div className="mb-5"><img src="src/images/departments/thulaseedaran.png" width="150px" height="150px" alt="Haripriya" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5> lini.sam@gecbh.ac.in</h5></div>
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

export default CE

