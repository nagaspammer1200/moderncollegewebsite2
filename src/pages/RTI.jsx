import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const RTI = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white mb-5"><h2>Right to Information</h2></div>
          <div className="personcontainer5">
                <div className="table-responsive tablecontainer">
                    <table className="table  table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col" colspan="3" className="text-center">RTI Officials</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">Appellate Authority</th>
                                <td className="p-3">Dr. Shiny G. <br />Principal, GECBH<br />0471-2300484, 0471-2300485</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Public Information Officer</th>
                                <td className="p-3">Ajithambili K <br />Accounts officer <br />Phone: 9446368897</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Smt.Mini S.</th>
                                <td className="p-3">Associate Professor in ECE<br />Junior Superintendent <br />Phone: 0471-2300485</td>&nbsp;
                            </tr>
                        </tbody>
                    </table>
                </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default RTI

