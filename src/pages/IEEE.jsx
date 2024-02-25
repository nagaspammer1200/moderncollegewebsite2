import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const IEEE = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Institute of Electrical and Electronics Engineers</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>IEEE SB</h3></div>
                <div className="mb-3 text-center"><img src="src/images/ieee/logo.png" width="15%" height="20%" alt="ieee logo" /></div>
                <div className="mb-5 p-3 text-success p-4 border-bottom border-success border-2"><h6>“When technology meets talent, the outcomes are sure to be revolutionary”</h6></div>
                <div className="mb-5 p-3"><p><b>IEEE Student Branch,</b>  The IEEE Student Branch Government Engineering College Barton Hill is the brainchild of an energetic and dedicated team whose boundless passion for innovation is truly remarkable. Their exceptional commitment has produced numerous accomplished professionals who have made significant contributions to the tech industry. Since its inception in 2005, the Student Branch has continually impressed, always raising the bar with each milestone achieved. In the year 2022 alone, they have been honored with the IEEE MGA Regional Exemplary Student Branch Award, the IEEE R10 Outstanding Student Branch Award, and the prestigious Darrel Chong Student Activity Award in the Gold Category for their annual mega flagship event, Exordium. Adding to their list of achievements, three of their volunteers were recognized by the IEEE India Council as Outstanding IEEE Professional Volunteer, Outstanding IEEE WIE Volunteer, and Outstanding IEEE Student Volunteer. These recognitions serve as a testament to the exceptional dedication and hard work of the IEEE SB GECBH team.The IEEE student branch in GECBH at present has active chapters of </p></div>
                <div className="mb-5 ms-3">
                    <p>
                    IEEE Robotics and Automation Society <br />IEEE Computer Society <br />IEEE Antenna and Propagation Society <br />IEEE Microwave Theory and Techniques Society <br />IEEE Women in Engineering Affinity Group <br />IEEE Special Interest Group in Humanitarian Activities (SIGHT) <br />
                    </p>
                </div>
                <div className="mb-5 ms-3"><img src="src/images/ieee/members.jpg" width="85%" height="60%" alt="IEEE Members" /></div>
                <div className="text-primary mb-5 p-3"><h3>Executive Committee</h3></div>
                <div className="mb-5">
                    <div className="ms-3"><p><b>Counselor :</b> Prof. Josna V R (Assistant Professor, Department of Information Technology)</p></div>
                    <div className="ms-3"><p><b>Chair :</b> Goutham Rajesh (gouthamrajesh@ieee.org | +91 90742 15043)</p></div>
                    <div className="ms-3"><p><b>Secretary :</b> Raihana Alam P A (raihana.alam1511@ieee.org | +91 90371 42644)</p></div>
                    <div className="ms-3"><p><b>Vice Chair :</b> Devanarayanan S V (devanarayanansv@ieee.org | +91 94958 61692)</p></div>
                </div>
                <div className="mb-4 text-center text-primary"><b>To know more about us, visit our official website</b></div>
                <div className="text-center text-success"><a href="https://www.ieeegecbh.org/index.html">Click Here</a></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default IEEE

