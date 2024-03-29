import React from 'react'
import "../assets/Components.css"


const AnnouncementsBar = () => {


  return (
    <div className="acontainer">
      <div className="text-dark p-3">
          <h6>Important Links</h6>
      </div>
      <div className="p-3">
          <button type="button" className="btn btn-success m-1"><a href="">DEPARTMENTS</a></button>
          <button type="button" className="btn btn-success m-1"><a href="#">ADMISSIONS</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://www.ieeegecbh.org/index.html">IEEE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://istegecb.in/">ISTE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://www.csigecbh.in/sb.html">CSI</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://drive.google.com/file/d/1KrkzevoakzhoZvKy0vktVgsfkpbnkg_-/view?usp=drivesdk">MANDATORY DISCLOSURE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="/scholarships">SCHOLARSHIPS</a></button>
      </div>  
    </div>
  )
}

export default AnnouncementsBar
