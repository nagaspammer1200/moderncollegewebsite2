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

const Tender = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
      setDarkMode(localStorage.getItem("darkModeValue"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Tenders & Quotaions</h2></div>
          <div className={darkMode?"d-flex personcontainer2 bg-dark border-top border-1 border-primary":"d-flex personcontainer2"}>
            <div className="nsscontainer p-2">
                <div className="table-responsive tablecontainer mb-5">
                    <table className={darkMode?"table  table-striped table-dark":"table  table-striped"} >
                        <thead>
                            <tr>
                            <th scope="col" colspan="1" className="text-center">Date</th>
                            <th scope="col" colspan="1" className="text-center">Fl.No.</th>
                            <th scope="col" colspan="2" className="text-center">Title</th>
                            <th scope="col" colspan="1" className="text-center">Last Date</th>
                            <th scope="col" colspan="1" className="text-center">File</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="1">18-03-2024 	</th>
                                <td className="p-3" colspan="1">H1/1632/23/GECBH</td>
                                <td className="p-3" colspan="2">Sealed quotations are invited for the supply of Electrical items for Ladies Hostel</td>
                                <td className="p-3" colspan="1">21-03-2024</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/RAJESH_0001.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">14-02-2024</th>
                                <td className="p-3" colspan="1">P2_752_23GECBHC </td>
                                <td className="p-3" colspan="2">Procurement of High Performance Server for setting up of a high performance computing lab through GeM - Retender - Government Engineering College Barton Hill</td>
                                <td className="p-3" colspan="1">24-02-2024</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P2_752_23GECBH.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">01-02-2024 </th>
                                <td className="p-3" colspan="1">P2_11703_23GECBH</td>
                                <td className="p-3" colspan="2">Procurement of 3 numbers of Aadhaar Enabled Biometric Attendance System for this institution (AEBAS) through GeM_ Govt.Engineering College Bartonhill</td>
                                <td className="p-3" colspan="1">21-02-2024</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P2_11703_23GECBH.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">17-10-2023</th>
                                <td className="p-3" colspan="1">P1/9239/23/GECBH</td>
                                <td className="p-3" colspan="2">Quotation Extension Notice: Purchase of Electrical and Mechanical tools required for the development of an electric vehicle</td>
                                <td className="p-3" colspan="1">18-10-2023</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P1-9239-23-GECBH%20quot.%20extension.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">04-10-2023 </th>
                                <td className="p-3" colspan="1">Pi_7186_23Gecbh</td>
                                <td className="p-3" colspan="2">Sealed quotations are invited for the Supply & Installation of electrical items required for the electrical maintenance work in Central Technical Library</td>
                                <td className="p-3" colspan="1">09-10-2023</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P1_7186_23Gecbh.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">30-09-2023</th>
                                <td className="p-3" colspan="1">P2_10462_22GECBH</td>
                                <td className="p-3" colspan="2">Purchase of Chase Friction Material Test Machine/ Dynamometer for the PG Mechanical Lab through GeM</td>
                                <td className="p-3" colspan="1">11-10-2023</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P2_10462_22GECBH%20(1).pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">27-09-2023</th>
                                <td className="p-3" colspan="1">P1_9239_23Gecbh </td>
                                <td className="p-3" colspan="2">Sealed quotations are invited for the Purchase of Electrical and Mechanical tools required for the development of an electric vehicle</td>
                                <td className="p-3" colspan="1">07-10-2023</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P1_9239_23Gecbh.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">30-09-2023</th>
                                <td className="p-3" colspan="1">No. B1/8869/22/GECBH</td>
                                <td className="p-3" colspan="2">Sealed quotations are invited for the purchase of four tyres (Back wheel) for the College Bus No. KL 01 BQ 7152 of this Institution.</td>
                                <td className="p-3" colspan="1">07-10-2023</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/B1-8869-22-GECBH.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">19-09-2023 </th>
                                <td className="p-3" colspan="1">P1_5974Gecbh23</td>
                                <td className="p-3" colspan="2">Sealed quotations are invited for the Refilling of Fifty (50) Nos. of Fire Extinguishers installed at various locations of this institution</td>
                                <td className="p-3" colspan="1">30-09-2023 </td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/P1_5174Gecbh23.pdf">View</a></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="1">24-08-2023</th>
                                <td className="p-3" colspan="1">Qut_ext_1</td>
                                <td className="p-3" colspan="2">Quotation Extension Notice (Quotation No. 08/ 2023 - 24) Purchase of consumables required for the use of the electrical maintenance work in Central Technical Library of this Institution</td>
                                <td className="p-3" colspan="1">02-09-2023</td>
                                <td className="p-3 text-danger" colspan="1"><a href="https://gecbh.ac.in/uploads/Qut_ext_1.pdf">View</a></td>
                            </tr>
                        </tbody>
                    </table>
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

export default Tender

