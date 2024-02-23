import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import "../assets/Home.css"
import "../assets/About.css"


const About = () => {
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="aboutcontainer">
            <div className="card text-bg-dark w-70 h-50">
              <img src="src/images/about/college_abt.jpg" className="card-img w-70" alt="..."/>
              <div className="card-img-overlay">
                  <h4 className="card-title text-success">Know Us Better</h4>
                  <h1 className="card-text text-black">About Us</h1> 
              </div>
            </div>
            <div className="pcontainer">
              <div className="pitem">
                <div className="text-start p-3">
                  <h3 className="border-success border-bottom border-3 mb-3"><b>GECBH at a Glance</b></h3>
                  <img src="src/images/about/college4.jpeg" className="w-60 h-60" alt="" />
                </div>
                <div>
                  <p><b>Government Engineering College, Barton Hill</b> was established by the Government of Kerala in the academic year 1999-2000. Within a short span of time since inception, the college has achieved notable academic excellence. The college is affiliated to APJ Abdul kalam Kerala Technological University. It is under the administrative control of the Director of Technical Education, Government of Kerala.</p>
                </div>
                <div>
                  <p>The college is situated at scenic hills of Barton Hill and the land was donated by His Highness Sri.Chithira Thirunal Balarama Varma, the last ruling Maharaja of the princely State of Travancore. The college started its functioning in the month of November 1999 on the buildings of the Barton Hill Girl’s High School, Kunnukuzhy which is now defunct. The first principal of the college was Prof. G. Jayasankar.</p>
                </div>
              </div>
              <div className="pitem">
                <div className="text-start p-3">
                  <h3 className="border-success border-bottom border-3 mb-3"><b>History</b></h3>
                  <img src="src/images/about/history.jpg" alt="" />
                </div>
                <div>
                  <p><b>Government Engineering College, Barton Hill</b> located near PMG junction, in the heart of the Thiruvananthapuram city. Our college is situated at scenic hills of Barton hill; William Barton designed and built the new Secretariat building in Trivandrum, AD 1869, who was the chief engineer of Travancore. It was built based on Roman Architecture. Later it became the administration centre of Thiru – Kochi and then for whole Kerala. Barton Hill, which was the site of the bungalow of civil engineer Walthew Clarance Barton, who led the construction of the Secretariat, which he could see from the top of the 41-metre hill</p>
                </div>
                <div>
                  <p>(same height as the ground on which the Secretariat is built). The hill, which is now crowded with a Government Engineering College, Government Law College and hostels of the Institute of Management in Government, also had two names earlier – Peppatti Kunnu (as it housed an office to treat rabies) and Gundu Kaadu (because gun shots were fired from here to mark the time). Our College building is the distinguish of hosting Travancore‟s First English High school for Girls, HER HIGHNESS MAHARANISETHU PARVATHI BAYI, English High school for Girls, established in 1942.</p>
                </div>
              </div>
            </div>
            <div className="bg-dark">
              <div className="text-white d-flex p-3 darkcontainer">
                <div className="infoitem p-3">
                  <div className="mb-3"><i className="bi bi-eye"></i></div>
                  <div className="mb-3"><h5>Our Vision</h5></div>
                  <div className="mb-3"><p>A centre of higher learning in engineering that nurtures inquisitive young minds, fosters innovative research and reaches out to the society, while incessantly improving itself.</p></div>
                </div>
                <div className="infoitem p-3">
                  <div className="mb-3"><i className="bi bi-file-check"></i></div>
                  <div className="mb-3"><h5>Our Mission</h5></div>
                  <div className="mb-3"><p>Impart Engineering knowledge and skills.Mould professionals with integrity.
                  Nurture the spirit of innovation, creativity and sustainability to address needs of society.
                  Collaborate with industry, academic and research institutions of repute.</p></div>
                </div>
                <div className="infoitem p-3">
                  <div className="mb-3"><i className="bi bi-hand-thumbs-up"></i></div>
                  <div className="mb-3"><h5>Quality Policy</h5></div>
                  <div className="mb-3"><p>Government Engineering College Barton Hill committed to develop as a centre of excellence in the field of engineering education by improving the academic performance of the students and supporting them for placement and higher education.</p></div>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex gap-3 p-5 m-1 structure">
                    <div className="lat p-3">
                      <div><i className="bi bi-filter-square"></i></div>
                      <div><h2>Bachelor of Technology</h2></div>
                      <div><p>The college now offers five full time B. Tech degree courses. The duration of the Under Graduate Programme is four years. As per the AICTE norms, the annual intake of each UG course is sixty.</p></div>
                      <div>
                        <ol>
                          <li>B. Tech in Electrical and Electronics Engineering</li>
                          <li>B. Tech in Electronics and Communication Engineering</li>
                          <li>B. Tech in Information Technology</li>
                          <li>B. Tech in Mechanical Engineering</li>
                          <li>B. Tech in Civil Engineering</li>
                        </ol>
                      </div>
                    </div>
                  <div className="w-50 latimg">
                    <img src="src/images/about/people2.jpg" width="90%" height="100%"alt="" />
                  </div>
              </div>
              <div className="d-flex gap-3 p-5 m-1 structure">
                    <div className="w-50 rat">
                      <img src="src/images/about/masters.jpg" width="100%" height="100%"alt="" />
                    </div> 
                    <div className="p-3 rat2">
                    <div><i className="bi bi-mortarboard"></i></div>
                    <div><h2>Master of Technology</h2></div>
                    <div><p>The college offers four full time M. Tech degree course. The duration of the M. Tech programme is two years. As per the AICTE norms, the annual intake of PG course is eighteen.</p></div>
                    <div>
                      <ol>
                        <li>M. Tech in Network Engineering</li>
                        <li>M. Tech in Signal Processing</li>
                        <li>M. Tech in Machine Design</li>
                        <li>M. Tech in Power System and Control</li>
                        <li>M. Tech. in Power Electronics and Drives</li>
                        <li>M.Tech in Translational Engineering</li>
                      </ol>
                    </div>
                  </div>
              </div>
              <div className="d-flex gap-3 p-5 m-1 structure">
                    <div className="lat p-3">
                      <div><i className="bi bi-person-standing"></i></div>
                      <div><h2>The faculty</h2></div>
                      <div><p>The faculty members are from the pool of Professors, Associate Professors and Assistant Professors under the Department of Technical Education, who are arguably the best in the state. It is the same pool which provides the faculty to all the nine Government Engineering Colleges in the State. The 65 strong faculty team of the college consists of 16 Ph.D holders and 49 PG degree holders.</p></div>
                    </div>
                  <div className="w-50 latimg">
                    <img src="src/images/about/faculty.jpg" width="90%" height="100%" alt="" />
                  </div>
              </div>
              <div className="d-flex gap-3 p-5 m-1 structure">
                    <div className="w-50 rat">
                      <img src="src/images/about/admission.jpg" width="90%" height="100%" alt="" />
                    </div> 
                    <div className="p-3 rat2">
                    <div><i className="bi bi-journal-bookmark-fill"></i></div>
                    <div><h2>Admission</h2></div>
                    <div><p>Admission to the UG programmes to this college is done through the Centralized Allotment Process (CAP) based solely on the rank secured in the Common Entrance Examination (CEE) conducted by the Government of Kerala. This college is the choice of the top rank holders of the CEE. Admission to the PG programme is done through the Centralised Admission Process by the Directorate of Technical Education. All the students need to pay the fees only at the Government rate.</p></div>
                  </div>
              </div>
              <div className="d-flex gap-3 p-5 m-1 structure">
                    <div className="lat p-3">
                      <div><i className="bi bi-person"></i></div>
                      <div><h2>The Alumni</h2></div>
                      <div><p>TThe alumni of the college have already secured their places in the B. Tech. rank list of Kerala University and in the top sections of all India GATE rank lists. The alumni of the college have also secured admissions to top research institutions and business schools including foreign universities, IITs and IIMs . The placement record of the college has been phenomenal with majority of the students having received job offers to reputed firms from the campus itself.</p></div>
                    </div>
                  <div className="w-50 latimg">
                    <img src="src/images/about/alumni.jpg" width="90%" height="100%" alt="" />
                  </div>
              </div>
            </div>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default About
