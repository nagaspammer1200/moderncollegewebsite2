import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const CERD = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Centre for Engineering Research and Development</h2></div>
          <div className="d-flex personcontainer3 p-3">
            <div className="p-3">
                <div className="text-primary mb-3"><h3>CERD Innovation Centre Activities</h3></div>
                <div className="mb-5"><p>Centre for Engineering Research and Development (CERD) is established in the campus of College of Engineering, Trivandrum, with the objective of augmentation of research activities in the state as well as to inculcate a research culture among the students and faculty of the department. The launching of the Centre was announced in the budget speech of the Honourable Minister for Finance in 2009-10 and it has become a reality on 16/12/2009. The centre has been registered as a society under the charitable societies act. CERD is now functioning under APJ Abdul Kalam Technical University. Satellite centres are established in Engineering Colleges to facilitate the functioning of CERD. <br /><br />The Innovation centres are also established in Engineering Colleges to facilitate the development of innovative products. Regular interactions with innovators are being arranged on a regular basis to kindle the creative ability of the students. CERD Innovation Centre was also established in Govt. Engineering College, Barton Hill, Trivandrum. Dr.Rajeev Rajan, Associate Professor, ECE Department is in charge of CERD Satellite Centre and CERD Innovation Centre of Govt. Engineering College, Barton Hill.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default CERD

