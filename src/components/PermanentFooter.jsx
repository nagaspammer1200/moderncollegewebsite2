import React from 'react'
import "../assets/Home.css"

const PermanentFooter = () => {
  return (
    <div className="bg-dark">
      <div className="d-flex footermain text-white p-3 linkscontainer">
        <div className="border-success border-bottom border-3 p-3">
            <div className="mb-3"><img src="src/images/logo-white.png" alt="" /></div>
            <div className="mb-3 p-3">
                <h6>Contact</h6>
                <p>Government Engineering College Barton Hill <br />Kunnukuzhi, Thiruvananthapuram Kerala - 695035.</p>
            </div>
            <div>
                <h5>+91-471-2300484</h5>
                <h5><a href="gecbh.ac.in/#">principal@gecbh.ac.in</a></h5>
            </div>
        </div>
        <div className="p-3">
          <div className="border-3 border-success border-bottom text-white p-3">
            <h5>Internal Links</h5>
          </div>
          <div>
            <ul className="p-3 list-unstyled spacelist">
              <div><li><a href="/about">About Us</a></li></div>
              <div><li><a href="#">Programmes</a></li></div>
              <div><li><a href="#">Departments</a></li></div>
              <div><li><a href="/principal">Principal</a></li></div>
              <div><li><a href="#">Campus Communities</a></li></div>
              <div><li><a href="#">Campus Facilities</a></li></div>
              <div><li><a href="#">Online Grievance Redressal System</a></li></div>
            </ul>
          </div>
        </div>
        <div className="p-3">
          <div className="border-3 border-success border-bottom text-white p-3">
            <h5>More Links</h5>
          </div>
          <div>
            <ul className="p-3 list-unstyled spacelist">
              <div><li><a href="#">NBA Accreditations</a></li></div>
              <div><li><a href="/antiragging">Anti-Ragging</a></li></div>
              <div><li><a href="#">Safety Policy</a></li></div>
              <div><li><a href="#">Right to Information</a></li></div>
              <div><li><a href="#">Tenders</a></li></div>
              <div><li><a href="https://gecbhlibrary.knimbus.com/user#/home">E-Journals</a></li></div>
              <div><li><a href="#">Downloads</a></li></div>
              <div><li><a href="#">Prevention of Caste Discrimination</a></li></div>
            </ul>
          </div>
        </div>
        <div className="p-3">
          <div className="border-3 border-success border-bottom text-whsite p-3">
            <h5>External Links</h5>
          </div>
          <div>
            <ul className="p-3 list-unstyled spacelist">
              <div><li><a href="https://kerala.gov.in/">Government of Kerala</a></li></div>
              <div><li><a href="https://www.ktu.edu.in/">APJ Abdul Kalam Technological University</a></li></div>
              <div><li><a href="https://www.dtekerala.gov.in/">DTE Kerala</a></li></div>
              <div><li><a href="https://www.aicte-india.org/">AICTE</a></li></div>
              <div><li><a href="https://www.cee-kerala.org/">CEE Kerala</a></li></div>
              <div><li><a href="https://spark.gov.in/webspark/(S(spcu2i2tt3g322meszngwurw))/sparklogin.aspx">SPARK</a></li></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermanentFooter
