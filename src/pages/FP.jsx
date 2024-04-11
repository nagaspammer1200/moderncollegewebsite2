import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const FP = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Former Principals</h2></div>
          <div className={darkMode?"personcontainer5 border-top border-1 border-primary bg-dark":"personcontainer5"}>
                <div className="table-responsive tablecontainer">
                    <table className={darkMode?"m-5 p-4 text-info":"m-5 p-4 shadow text-success"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="p-3">Name of the Principal</th>
                            <th scope="col" colspan="1" className="p-3">Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. G. JAYASANKAR</th>
                                <td className="p-3">Nov&nbsp;1999&nbsp;-&nbsp;Mar&nbsp;2002</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. VARKEY PHILIP (In-charge)	</th>
                                <td className="p-3">Apr&nbsp;2002&nbsp;-&nbsp;Aug&nbsp;2002</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. M. NOORJAHAN</th>
                                <td className="p-3">Aug&nbsp;2002&nbsp;-&nbsp;Mar&nbsp;2003</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. VARKEY PHILIP (In-charge)	</th>
                                <td className="p-3">Apr&nbsp;2003&nbsp;-&nbsp;Mar&nbsp;2004</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. BINU MANGAL (In-charge)</th>
                                <td className="p-3">Apr&nbsp;2004&nbsp;-&nbsp;Nov&nbsp;2004</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. M. MAHADEVAN</th>
                                <td className="p-3">Nov&nbsp;2004&nbsp;-&nbsp;Mar&nbsp;2007</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. K. C. RAVEENDRANATHAN (In-charge)	</th>
                                <td className="p-3">Mar&nbsp;2007&nbsp;-&nbsp;Jun&nbsp;2007</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. P. S. CHANDRAMOHANAN NAIR</th>
                                <td className="p-3">Jun&nbsp;2007&nbsp;-&nbsp;Dec&nbsp;2008</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. K. C. RAVEENDRANATHAN (In-charge)</th>
                                <td className="p-3">Dec&nbsp;2008&nbsp;-&nbsp;Mar&nbsp;2009</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. C. SAM</th>
                                <td className="p-3">Mar&nbsp;2009&nbsp;-&nbsp;Oct&nbsp;2009</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. K. P. GEETHA</th>
                                <td className="p-3">Oct&nbsp;2009&nbsp;-&nbsp;Mar&nbsp;2011</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. K. C. RAVEENDRANATHAN (In-charge)	</th>
                                <td className="p-3">Mar&nbsp;2011&nbsp;-&nbsp;Jun&nbsp;2011</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Prof. K. P. GEETHA</th>
                                <td className="p-3">Jun&nbsp;2011&nbsp;-&nbsp;Oct&nbsp;2011</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. S. SHEELA</th>
                                <td className="p-3">Oct&nbsp;2011&nbsp;-&nbsp;May&nbsp;2013</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. R. SATHI KUMAR</th>
                                <td className="p-3">May&nbsp;2013&nbsp;-&nbsp;Mar&nbsp;2014</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. P. JAYA PRAKASH (In-charge)	</th>
                                <td className="p-3">Mar&nbsp;2014&nbsp;-&nbsp;May&nbsp;2014</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. B. ANIL</th>
                                <td className="p-3">Nov&nbsp;1999&nbsp;-&nbsp;Mar&nbsp;2002</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. N. VIJAYAKUMAR (In-charge)</th>
                                <td className="p-3">May&nbsp;2014&nbsp;-&nbsp;Mar&nbsp;2016</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. SHAJI SENADHIPAN	</th>
                                <td className="p-3">Apr&nbsp;2016&nbsp;-&nbsp;Feb&nbsp;2017</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. N. VIJAYAKUMAR (In-charge)</th>
                                <td className="p-3">Mar&nbsp;2017&nbsp;-&nbsp;May&nbsp;2017</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. RAJASREE M. S.</th>
                                <td className="p-3">May&nbsp;2017&nbsp;-&nbsp;Feb&nbsp;2019</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. N. VIJAYAKUMAR</th>
                                <td className="p-3">Mar&nbsp;2019&nbsp;-&nbsp;May&nbsp;2022</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. BIJULAL D</th>
                                <td className="p-3">July&nbsp;2022&nbsp;-&nbsp;Feb&nbsp;2023</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" className="p-3">Dr. CIZA THOMAS</th>
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

