import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const SW = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white mb-5"><h2>Student Welfare</h2></div>
          <div className="text-primary mb-3 ms-5"><h3>Student Welfare Committee</h3></div>
          <div className="personcontainer5">
                <div className="table-responsive tablecontainer">
                    <table className="table  table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col" colspan="2">MEMBERS</th>
                            <th scope="col" colspan="1">DEPARTMENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">Principal (Convernor)</th>
                                <td className="p-3"></td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. Shaini A P</th>
                                <td className="p-3">Assistant Professor EEE Co Convenor</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">DR. Asha Murali</th>
                                <td className="p-3">Associate Professor in ECE</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Lini R chandran</th>
                                <td className="p-3">Assistant Professor in CE</td>&nbsp;
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

export default SW

