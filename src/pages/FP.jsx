import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const FP = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white mb-5"><h2>Former Principals</h2></div>
          <div className="personcontainer5">
                <div className="table-responsive tablecontainer">
                    <table className="table  table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col" colspan="2">Name of the Principal</th>
                            <th scope="col" colspan="1">Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">Prof. G. JAYASANKAR</th>
                                <td className="p-3">Nov&nbsp;1999&nbsp;-&nbsp;Mar&nbsp;2002</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. VARKEY PHILIP (In-charge)	</th>
                                <td className="p-3">Apr&nbsp;2002&nbsp;-&nbsp;Aug&nbsp;2002</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. M. NOORJAHAN</th>
                                <td className="p-3">Aug&nbsp;2002&nbsp;-&nbsp;Mar&nbsp;2003</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. VARKEY PHILIP (In-charge)	</th>
                                <td className="p-3">Apr&nbsp;2003&nbsp;-&nbsp;Mar&nbsp;2004</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. BINU MANGAL (In-charge)</th>
                                <td className="p-3">Apr&nbsp;2004&nbsp;-&nbsp;Nov&nbsp;2004</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. M. MAHADEVAN</th>
                                <td className="p-3">Nov&nbsp;2004&nbsp;-&nbsp;Mar&nbsp;2007</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. K. C. RAVEENDRANATHAN (In-charge)	</th>
                                <td className="p-3">Mar&nbsp;2007&nbsp;-&nbsp;Jun&nbsp;2007</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. P. S. CHANDRAMOHANAN NAIR</th>
                                <td className="p-3">Jun&nbsp;2007&nbsp;-&nbsp;Dec&nbsp;2008</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. K. C. RAVEENDRANATHAN (In-charge)</th>
                                <td className="p-3">Dec&nbsp;2008&nbsp;-&nbsp;Mar&nbsp;2009</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. C. SAM</th>
                                <td className="p-3">Mar&nbsp;2009&nbsp;-&nbsp;Oct&nbsp;2009</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. K. P. GEETHA</th>
                                <td className="p-3">Oct&nbsp;2009&nbsp;-&nbsp;Mar&nbsp;2011</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. K. C. RAVEENDRANATHAN (In-charge)	</th>
                                <td className="p-3">Mar&nbsp;2011&nbsp;-&nbsp;Jun&nbsp;2011</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Prof. K. P. GEETHA</th>
                                <td className="p-3">Jun&nbsp;2011&nbsp;-&nbsp;Oct&nbsp;2011</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. S. SHEELA</th>
                                <td className="p-3">Oct&nbsp;2011&nbsp;-&nbsp;May&nbsp;2013</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. R. SATHI KUMAR</th>
                                <td className="p-3">May&nbsp;2013&nbsp;-&nbsp;Mar&nbsp;2014</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. P. JAYA PRAKASH (In-charge)	</th>
                                <td className="p-3">Mar&nbsp;2014&nbsp;-&nbsp;May&nbsp;2014</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. B. ANIL</th>
                                <td className="p-3">Nov&nbsp;1999&nbsp;-&nbsp;Mar&nbsp;2002</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. N. VIJAYAKUMAR (In-charge)</th>
                                <td className="p-3">May&nbsp;2014&nbsp;-&nbsp;Mar&nbsp;2016</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. SHAJI SENADHIPAN	</th>
                                <td className="p-3">Apr&nbsp;2016&nbsp;-&nbsp;Feb&nbsp;2017</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. N. VIJAYAKUMAR (In-charge)</th>
                                <td className="p-3">Mar&nbsp;2017&nbsp;-&nbsp;May&nbsp;2017</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. RAJASREE M. S.</th>
                                <td className="p-3">May&nbsp;2017&nbsp;-&nbsp;Feb&nbsp;2019</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. N. VIJAYAKUMAR</th>
                                <td className="p-3">Mar&nbsp;2019&nbsp;-&nbsp;May&nbsp;2022</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. BIJULAL D</th>
                                <td className="p-3">July&nbsp;2022&nbsp;-&nbsp;Feb&nbsp;2023</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dr. CIZA THOMAS</th>
                                <td className="p-3">Mar&nbsp;2023&nbsp;-&nbsp;Mar&nbsp;2023</td>
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

export default FP

