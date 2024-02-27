import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Bus = () => {

  return (
    <div>
        <div>
          <div className="mb-4 ms-5"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>College Bus</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>College Bus</h3></div>
                <div className="mb-5 p-3"><p>The College has got three buses operating in three different routes to cater to the needs of students coming from different parts of Thiruvananthapuram city. The three routes together cover bus almost all important points within the city. Students can avail College bus facility by taking passes which are valid for one entire semester. Occasional users can travelin the buses by taking tickets costing Rs.10/- per journey. The three different routes of operation are </p></div>
                <div className="mb-5 p-3"><p>1. College- Sasthamangalam- Vattiyoorkavu – PTP Nagar – Poojappura – Karamana- Eastfort – Bakery Junction – College</p></div>
                <div className="mb-5 p-3"><p>2. College – Pattom – Kesavadasapuram – Paruthippara – Mannanthala – Peroorkada – Kowdiar – Marappalam – College</p></div>
                <div className="mb-5 p-3"><p>CET – Sreekaryam – Ulloor – Medical College - Kannammoola – Pattor – Palayam – PMG – College <br />The bus operations are coordinated by the Bus Committee of the College. Prof.Ganesh.J,Asst.Professor in Mechanical Engg. is the present Bus Secretary who coordinates the bus operations.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Bus

