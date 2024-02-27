import React from 'react'
import "../assets/Navbar.css"

const FixedNavbar = () => {
  return (
    <div>
      <div className="fnavbar">
        <div className="fnavbarimg">
          <a href="/"><img src="src/images/logobh.png" class="img-fluid" alt="GECB Logo" /></a>
        </div>
        <div className="fnavbarlinksmain">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About The College
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/about">About GECBH</a></li>
                      <li><a href="#" className="dropdown-item">Board of Governers</a></li>
                      <li><a className="dropdown-item" href="/principal">Principal</a></li>
                      <li><a href="http://gecbh.ac.in/static/docs/College%20Council.pdf" className="dropdown-item">College Council</a></li>
                      <li className="dropstart">
                        <a href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Administration</a>
                        <ul className="dropdown-menu">
                          <li><a href="/adminstaff" className="dropdown-item">Staff</a></li>
                          <li><a href="#" className="dropdown-item">Right To Information</a></li>
                          <li><a href="#" className="dropdown-item">Tenders and Questions</a></li>
                          <li><a href="/service" className="dropdown-item">Service Rules</a></li>
                          <li><a href="/budget" className="dropdown-item">Budget Utilization</a></li>
                          <li><a href="/com" className="dropdown-item">Commitees</a></li>
                        </ul>
                      </li>
                      <li className="dropstart">
                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Dean</a>
                        <ul className="dropdown-menu">
                          <li><a href="/pgdean" className="dropdown-item">PG Dean</a></li>
                          <li><a href="/studentandinternationalaffairdean" className="dropdown-item">Student Dean and International Affairs</a></li>
                          <li><a href="/ugdean" className="dropdown-item">UG Dean</a></li>
                          <li><a href="/researchdean" className="dropdown-item">Research Dean</a></li>
                        </ul>
                      </li>
                      <li><a href="/hods" className="dropdown-item">Head of Departments</a></li>
                      <li><a href="#" className="dropdown-item">Former Principals</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Academics
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropstart">
                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Programmes</a>
                        <ul className="dropdown-menu">
                          <li><a href="/btech" className="dropdown-item">Bachelor of Technology</a></li>
                          <li><a href="/mtech" className="dropdown-item">Master of Technology</a></li>
                          <li><a href="http://www.tplc.gecbh.ac.in/" className="dropdown-item">TPL Programmes</a></li>
                          <li><a href=" /adam" className="dropdown-item">ADAM</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-item">Admissions</li>
                      <li className="dropstart">
                        <a href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Departments</a>
                        <ul className="dropdown-menu">
                          <li><a href="#" className="dropdown-item">Information Technology</a></li>
                          <li><a href="#" className="dropdown-item">Mechanical Engineering</a></li>
                          <li><a href="#" className="dropdown-item">Electronics and Communication Engineering</a></li>
                          <li><a href="#" className="dropdown-item">Electrical and Electronics Engineering</a></li>
                          <li><a href="#" className="dropdown-item">Civil Engineering</a></li>
                          <li><a href="#" className="dropdown-item">General Science</a></li>
                          <li><a href="#" className="dropdown-item">Physical Education</a></li>
                        </ul>
                      </li>
                      <li className="dropstart">
                        <a href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Resources</a>
                        <ul className="dropdown-menu">
                          <li><a href="/aicte" className="dropdown-item">AICTE</a></li>
                          <li><a href="/teqip" className="dropdown-item">TEQIP</a></li>
                          <li><a href="https://drive.google.com/file/d/1KrkzevoakzhoZvKy0vktVgsfkpbnkg_-/view?pli=1" className="dropdown-item">Mandatory Disclosure</a></li>
                          <li><a href="#" className="dropdown-item">IQAC</a></li>
                          <li><a href="#" className="dropdown-item">News Letter</a></li>
                          <li><a href="/download" className="dropdown-item">Downloads</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Campus Life
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropstart">
                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Communes</a>
                        <ul className="dropdown-menu">
                          <li><a href="/nss" className="dropdown-item">National Service Scheme</a></li>
                          <li><a href="/ieee" className="dropdown-item">IEEE Student Branch</a></li>
                          <li><a href="/iste" className="dropdown-item">ISTE Student Chapter</a></li>
                          <li><a href="/csi" className="dropdown-item">Computer Society of India</a></li>
                          <li><a href="/iedc" className="dropdown-item">IEDC</a></li>
                          <li><a href="/cerd" className="dropdown-item">CERD</a></li>
                          <li><a href="/asme" className="dropdown-item">ASME</a></li>
                          <li><a href="/igs" className="dropdown-item">Indian Geotechnical Society</a></li>
                          <li><a href="/staffclub" className="dropdown-item">Staff Club</a></li>
                        </ul>
                      </li>
                      <li className="dropstart">
                        <a href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Facilities</a>
                        <ul className="dropdown-menu">
                        <li><a href="#" className="dropdown-item">Central Library</a></li>
                          <li><a href="#" className="dropdown-item">Central Computing Facility</a></li>
                          <li><a href="#" className="dropdown-item">Women Cell</a></li>
                          <li><a href="" className="dropdown-item">Continuing Education Cell</a></li>
                          <li><a href="/tbi" className="dropdown-item">Technology Business Incubator</a></li>
                          <li><a href="/campuswifi" className="dropdown-item">Campus WiFi</a></li>
                          <li><a href="/iiic" className="dropdown-item">Industry Institute Interaction</a></li>
                          <li><a href="/bus" className="dropdown-item">College Bus</a></li>
                          <li><a href="/hostel" className="dropdown-item">College Hostel</a></li>
                          <li><a href="/video" className="dropdown-item">Video Conferencing</a></li>
                          <li><a href="/canteen" className="dropdown-item">Canteen</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item" href="#">Event Calendar</a></li>
                    </ul>
                  </li>
                
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Placements and Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default FixedNavbar
