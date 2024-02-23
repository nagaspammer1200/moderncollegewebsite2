import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import "../assets/Home.css"
import "../assets/About.css"

const Principal = () => {
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex gap-2 pdc">
            <div>
                <div className="principalimage"><img src="src/images/people/principal.jpeg" width="45%" height="35%" alt="Principal Shiny" /></div>
                <div className="d-flex gap-3 pe-3 ps-3">
                    <div><i className="bi bi-envelope-open"></i></div>
                    <div><p>principal@gecbh.ac.in</p></div>
                </div>
                <div className="d-flex gap-3 pe-3 ps-3">
                    <div><i className="bi bi-telephone-fill"></i></div>
                    <div><p>&nbsp;+91-&nbsp;0471-&nbsp;2300484</p></div>
                </div>
                <div className="d-flex text-start gap-3 ps-3">
                    <div><i className="bi bi-cursor-fill"></i></div>
                    <div><p>The Principal <br /> Admin Block, Government Engineering <br /> College - Barton Hill, <br /> Thiruvananthapuram Kerala, INDIA-695 035.</p></div>
                </div>
                <div className="p-3"><button type="button" class="btn btn-success"><a href="http://gecbh.ac.in/static/docs/Dr.Shiny%20G.pdf">View More</a> <i className="bi bi-file-earmark"></i></button></div>
            </div>
            <div>
                <div className="border-bottom border-3 border-success p-3 m-3">
                    <div className="text-start"><h2>Dr. Shiny G.</h2></div>
                    <div className="text-start"><p>Principal</p></div>
                    <div className="text-success">"If you’re looking to progress into engineering and technology, or planning and development role, this is the best institution for you."</div>
                </div>
                <div className="p-3 border-bottom border-3 border-success">
                    <div className="mb-3"><h5>Area of Research</h5></div>
                    <div className="principallist">
                        <ul>
                            <li className="mb-2">Power Electronics and Drives</li>
                            <li className="mb-2">Biomedical Engineering</li>
                        </ul>
                    </div>
                </div>
                <div className="border-bottom border-3 border-success p-3">
                    <div className="mb-3"><h5>Professional Experience</h5></div>
                    <div className="principallist">
                        <ul>
                            <li className="mb-2">College of Engineering Trivandrum : 2022 June onwards</li>
                            <li className="mb-2">Govt. College of Engineering, Kannur : 2019 – 2022</li>
                            <li className="mb-2">College of Engineering Trivandrum : 2005 – 2019</li>
                            <li className="mb-2">Govt. Engineering College, West Hill, Kozhikide : 2002 – 2005</li>
                            <li className="mb-2">Govt. Poytechnic College, Neyyattinakara, Thiruvananthapuram : 1998 – 2002</li>
                        </ul>
                    </div>
                </div>
                <div className="border-bottom border-3 border-success p-3">
                    <div className="mb-3"><h5>Responsibilities/Position (Department, College and University/Organization)</h5></div>
                    <div className="principallist">
                        <ul>
                            <li className="mb-2">Controller of Examinations, APJAKTU (Full additional charge)</li>
                            <li className="mb-2">Dean – Research, APJAKTU (Full additional charge)</li>
                            <li className="mb-2">Director-Research (APJAKTU)</li>
                        </ul>
                    </div>
                </div>
                <div className="border-bottom border-3 border-success p-3 mb-2">
                    <div className="mb-3"><h5>Education</h5></div>
                    <div className="principallist">
                        <ul>
                            <li className="mb-2">PhD – University of Kerala</li>
                            <li className="mb-2">M.Tech – Applied Electronics and Instrumentation – University of Kerala</li>
                            <li className="mb-2">B.E – Electronics and Communication – Maduari Kamaraj Univetsity</li>
                        </ul>
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

export default Principal

