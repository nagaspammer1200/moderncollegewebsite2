import React from 'react'
import "../assets/Components.css"


const AnnouncementsBar = () => {


  return (
    <div className="acontainer">
      <div className="text-dark p-3">
          <h6>Important Links</h6>
      </div>
      <div className="p-3">
          <button type="button" className="btn btn-success m-1"><a href="/departments">Departments</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/admission">Admissions</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/placement">Placments</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/programmes">Programmes</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/facilities">Facilities</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://www.ieeegecbh.org/index.html">IEEE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://istegecb.in/">ISTE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://www.csigecbh.in/sb.html">CSI</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/asme">ASME</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/igs">IGS</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/adam">ADAM</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/tplc">TPLC</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/com">Commitees</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/hods">HoDs</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/ugdean">UG Dean</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/pgdean">PG Dean</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/studentandinternationalaffairdean">Student Dean</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/researchdean">Research Dean</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/principal">Principal</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://gecbh.ac.in/uploads/College%20Council.pdf">College Council</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/download">Downloads</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://drive.google.com/file/d/1KrkzevoakzhoZvKy0vktVgsfkpbnkg_-/view?usp=drivesdk">MANDATORY DISCLOSURE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/scholarships">Scholarship</a></button>
      </div>  
    </div>
  )
}

export default AnnouncementsBar
