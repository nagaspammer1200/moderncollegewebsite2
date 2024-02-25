import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const CSI = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Computer Society of India</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="text-primary mb-3 ms-3"><h3>CSI</h3></div>
                <div className="mb-5 p-3"><p><b>Computer Society of India</b> established in the year 1965 is today the largest it professionals Society in India. The purposes of the Society are scientific and educational advancement of the theory and practice of computer science, computer engineering and technology, systems science and engineering, information processing and related arts and sciences. The mission of the CSI is to facilitate research, knowledge sharing and career enhancement for all categories of it professionals, while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community. Today, the CSI has 66 chapters all over India, 381 student branches, and more than 40,000 members, including India’s most famous it industry leaders and dedicated academicians.</p></div>
                <div className="mb-5 ms-3"><img src="src/images/csi/csi.jpg" width="85%" height="60%" alt="IEEE Members" /></div>
                <div className="mb-5 p-3"><p>CSI Student Branch GECBH is one of the active technical society of Government Engineering College Barton Hill, Trivandrum. The body is guided by the Principal along with Staff Advisor Professor Josna of department Information Technology. The main members are of the Information Technology department along with the the society providing a free opportunity for other department students to join India's largest professional association through the CSI BETA program.</p></div>
                <div className="mb-5 p-3"><p>The executive student committee headed by Kelvin Patric along with Gokul, Rahul, Shaino, Adithyan, Meenu, Malavika, Nayana, Abhishek and Risvana. Talk sessions, project guidance, workshops, competitions and many other events are conducted by the SB for the betterment of each and every student of the college who wishes to have a professional knowledge in the field of Information Technology. Events are usually conducted based on student needs. The society will always work for the betterment of students along with progress of GECBH to achieve greater heights.</p></div>
                <div className="mb-4 text-center text-primary"><b>To know more about us, visit our official website</b></div>
                <div className="text-center text-success"><a href="https://www.csigecbh.in/sb.html">Click Here</a></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default CSI

