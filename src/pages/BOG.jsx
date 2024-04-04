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

const BOG = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue2"))
  }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Board of Governors</h2></div>
          <div className={darkMode?"d-flex personcontainer2 border-top border-1 border-info bg-dark":"d-flex personcontainer2"}>
            <div className="nsscontainer p-2">
                <div className="table-responsive tablecontainer mt-4 mb-5">
                    <table className={darkMode?"table  table-striped table-dark":"table  table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="text-center">Sl. No</th>
                            <th scope="col" colspan="2" className="text-center">Name and Address</th>
                            <th scope="col" colspan="2" className="text-center">Position in BoG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">1</th>
                                <td className="p-3" colspan="2">Prof. R.Krishna Kumar Professor , Dept of Engineering Design,<br /><br />IIT Madras, Chennai. Pin 600 036 <br /><br />Email: rkkumar@iitm.ac.in, Phone: 9840225856<br /><br /></td>
                                <td className="p-3" colspan="2">Chairperson</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">2</th>
                                <td className="p-3" colspan="2">Prof. K. Kurien Issac Professor, Aerospace Engineering,<br /><br />IIST, Thiruvananthapuram Pin 682030<br /><br />Email : kurien@iist.ac.in, Phone : 9446349505<br /><br /></td>
                                <td className="p-3" colspan="2">Member</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">3</th>
                                <td className="p-3" colspan="2">Er.Satheeshkumar. R Head of Solar in Keltron Controls Division, Aroor,<br /><br />Alappuzha.<br /><br />Email Address: satheeshchenkilath@yahoo.com<br /><br />Phone: +91-9847981972<br /><br /></td>
                                <td className="p-3" colspan="2">Member</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">4</th>
                                <td className="p-3" colspan="2">Dr. Bijulal D Professor in Mechanical Engineering,<br /><br />Government Engineering College<br /><br />Barton Hill. Pin 695035<br /><br />Email : dbijulal@cet.ac.in, Phone : 9645357434<br /><br /></td>
                                <td className="p-3" colspan="2">Member</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">5</th>
                                <td className="p-3" colspan="2">Dr.Shamna H R Professor in Information Technology,<br /><br />Government Engineering College<br /><br />Barton Hill. Pin 695035<br /><br />Email : shamnahr@gmail.com Phone : 8156973459<br /><br /></td>
                                <td className="p-3" colspan="2">Member</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">6</th>
                                <td className="p-3" colspan="2">Higher Education Department. State Government nominee</td>
                                <td className="p-3" colspan="2">Member (Ex-officio)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">7	</th>
                                <td className="p-3" colspan="2">Govt. Finance Department. State Government nominee</td>
                                <td className="p-3" colspan="2">Member (Ex-officio)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">8</th>
                                <td className="p-3" colspan="2">Director of Technical Education</td>
                                <td className="p-3" colspan="2">Member (Ex-officio)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">9</th>
                                <td className="p-3" colspan="2">Director SPFU</td>
                                <td className="p-3" colspan="2">Member (Ex-officio)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">10</th>
                                <td className="p-3" colspan="2">University nominee</td>
                                <td className="p-3" colspan="2">Controller of Examinations KTU<br /><br />(off) 0471 2598822, 2785617<br /><br />Email: controller@ktu.edu.in<br /><br /></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">11</th>
                                <td className="p-3" colspan="2">AICTE nominee</td>
                                <td className="p-3" colspan="2">Dr. Ramesh Unnikrishnan<br /><br />Regional Officer & Director<br /><br />AICTE South-Western Office TVPM.<br /><br /></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">12</th>
                                <td className="p-3" colspan="2">Principal of institution</td>
                                <td className="p-3" colspan="2">Member (Ex-officio)</td>
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

export default BOG

