import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const CCE = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Continuing Education Cell </h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>CCE</h3></div>
                <div className="mb-5"><b>1. Regular Course Offered Under CCE</b></div>
                <div className="mb-5"><p><div className="text-success"><a href="/adam">Advanced Diploma In Automative Mechatronics(ADAM)</a></div> In Collaboration Withmecedes Benz, Germany</p></div>
                <div className="mb-5"><b>2. Courses/Coaching Classes Undertaken By The CCE</b></div>
                <div className="mb-5"><p>Coaching Classes for Gate Examination for Civil, Mechanical, Electronics & Communication. Etc.Short Term Courses for Soil Testing, AUTOCAD , Surveying Etc. (Under Civil Department) Short Term Courses For Piping Engineering (Under Mechanical)</p></div>
                <div className="mb-5"><b>3. Testing Facilities</b></div>
                <div className="mb-5">
                    <p>
                        <ul>Civil Engineering:</ul><br />
                        Strength Of Concrete,Cement <br />
                        Steel Reinforcement Test <br />
                        Mixed Design <br /><br />
                        <ul>Mechanical:</ul><br />
                        Computerised Material Test Sytem(UTM) <br />
                    </p>
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

export default CCE

