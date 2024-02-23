import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const PTA = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex personcontainer3">
            <div className="rulecontainer3">
                <div className="d-flex flex-column text-center">
                    <div className="mb-5 mt-3 text-primary"><h4>PTA</h4></div>
                    <div className="mb-5 text-secondary text-start">
                        <p>The Parent Teacher Association of Government Engineering College Barton hill is very active and is giving considerable assistance and financial support for the improvement of facilities within the institution. A large number of developmental programs have been taken up under the patronage of the PTA for the benefit of students and staff, including the funding for the establishing departmental libraries for the faculty. The objectives of the association are:</p>
                    </div>
                    <div className="mb-5 text-start text-success border-bottom border-success border-3">
                        <p>To work for the welfare of the students and the institution <br />
                        To offer constructive suggestions for the smooth and successful functioning of this college. <br />   
                        To promote better participation of the parents in the various programs of the college and to establish better liaison with the teachers</p>
                    </div>
                    <div className="mb-5 text-secondary text-start">
                        <p>The PTA provides financial assistance to meritorious and needy students with consistent academic record. The best student in each branch of engineering is awarded by the PTA. Cash awards are also given to top scorers of even semesters in the university examination.</p>
                    </div>
                    <div className="mb-5 ptaimage">
                        <img src="src/images/pta/pta.jpg" alt="Parents Teachers Association Meeting" />
                    </div>
                    <div className="mb-5 text-secondary">
                        <h6>The following endowments were constituted by the PTA for the students:</h6>
                    </div>
                    <div className="mb-5 text-start">
                        <p>Prof. Krishnankutty Memorial Endowment Award: Highest CGPA scorers in each branch <br /> Prof. T. S. Sunilkumar Memorial Endowment Award: Highest CGPA scorers in first year of each branch (Constituted by Staff & Faculty) <br />Sri. Madhavan Pillai – K. N. Seetha Memorial Endowment Award: Highest GATE scorer (Constituted by Prof. M. Mahadevan, Ex. Principal) <br />Prof. B. Anil Endowment Award: Best Outgoing Student (Constituted by Prof. B. Anil, Ex. Principal) <br />Sri. E. J. Somaraj Memorial Endowment Award: Highest Mark Scorer for Subject Electrical Machines 1 & 2 (Constituted by Prof. Sheela, Ex. HoD, Electrical) <br />Rev. Fr. John Chathoth Endowment Award: Highest Mark Scorer for Subject Geotechnical Engineering 1 & 2 (Constituted by Prof. Mary John, Ex. HoD, Civil) <br />The awards will be distributed during the PTA annual general body meeting.</p> 
                    </div>
                    <div className="mb-5">
                        
                    </div>
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

export default PTA

