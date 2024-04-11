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

const Scholarships = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue2"))
  }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Scholarships & Education Loan</h2></div>
          <div className={darkMode?"d-flex personcontainer2 bg-dark border-1 border-primary border-top":"d-flex personcontainer2"}>
            <div className="nsscontainer p-2 mt-5">
                <div className="table-responsive tablecontainer mb-5">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="text-center">Sl. No</th>
                            <th scope="col" colspan="2" className="text-center">Name of Scholarship</th>
                            <th scope="col" colspan="2" className="text-center">Eligibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">1</th>
                                <td className="p-3" colspan="2">MERIT CUM MEANS</td>
                                <td className="p-3" colspan="2">Students belonging to notified minority communities viz. Muslim, Christian, Sikh, Buddhist, Jain, Parsi (Zoroastrian) studying in India only and fulfilling the Scheme guidelines are eligible to apply for these scholarships.</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">2</th>
                                <td className="p-3" colspan="2">CENTRAL SECTOR</td>
                                <td className="p-3" colspan="2">Students who are above 80th percentile of successful candidates in the relevant. <br /><br />Stream from a particular Board of Examination in Class XII. Not receiving any other scholarship. Pursuing regular course.<br /><br />Having family income of less than Rs.6 lakh per annum. Not receiving any other scholarship.<br /><br /></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">3</th>
                                <td className="p-3" colspan="2">PRE MATRIC SCHOLARSHIP FOR MINORITIES</td>
                                <td className="p-3" colspan="2">Students belonging to notified minority communities viz. Muslim, Christian, Sikh, Buddhist, Jain, Parsi (Zoroastrian) studying in India only</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">4</th>
                                <td className="p-3" colspan="2">POST MATRIC SCHOLARSHIP FOR MINORITIES</td>
                                <td className="p-3" colspan="2">Students belonging to notified minority communities viz. Muslim, Christian, Sikh, Buddhist, Jain, Parsi (Zoroastrian) studying in India only</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">5</th>
                                <td className="p-3" colspan="2">PRE MATRIC SCHOLARSHIP FOR STUDENTS WITH DISABILITIES</td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">6</th>
                                <td className="p-3" colspan="2">PRE MATRIC SCHOLARSHIP FOR STUDENTS WITH DISABILITIES</td>
                                <td className="p-3" colspan="2">1. A citizen of India. <br /><br />2. A person with disability having not less than 40% disability and having a disability issued by any competent medical authority. <br /><br />3. Not more than two disabled children of the same parents will be entitled to receive benefits of the scheme. Provided in case the second child is a twin, the scholarship under this scheme will be admissible to both the twins. 4. Scholarship for studying in any class will be available for only one year. If a student has to repeat a class, he/she would not get scholarship for that class for a second (or subsequent) year.<br /><br />5. A scholarship holder under this scheme will not hold any other scholarship/stipend. If awarded any other scholarship/stipend, the student can exercise his/her option for either of the two scholarships/stipends, which is more beneficial to him/her and should inform the awarding authority through the Head of the Institution about the option made.<br /><br /></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">7	</th>
                                <td className="p-3" colspan="2">STATE MERIT SCHOLARSHIP</td>
                                <td className="p-3" colspan="2">1. Should be a first year student of under graduate or post graduate course in Govt/ Aided colleges or university department.<br /><br />2. Should have scored 50% or above in the qualifying examination.<br /><br />3. Family Annual income should not exceed 1 lakh. For exemption of annual income based on merit.<br /><br /></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">8</th>
                                <td className="p-3" colspan="2">DISTRICT MERIT SCHOLARSHIP</td>
                                <td className="p-3" colspan="2">Should have scored A+ in all subjects in the SSLC and Plus 2 examination. Conducted by board or public, Kerala state.</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">9</th>
                                <td className="p-3" colspan="2">University Merit Scholarship</td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">10</th>
                                <td className="p-3" colspan="2">C H Muhammedkoya Scholarship</td>
                                <td className="p-3" colspan="2">1. Should belongs to Muslim, Latin, Converted Christian community and should be a native of kerala.<br /><br />2. Should be a girl student studying for the first year of Graduation / or Higher course in Govt./Aided institution. Students who got admission to self financing colleges from merit seat are also eligible to apply for this scholarship.<br /><br />3. Should have scored 50% or above in the qualifying examination.<br /><br />4. Family annual income should not exceed 4.50 lakh.<br /><br />5. Those who apply for hostel stipend should be staying in recognized hostels.<br /><br /></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">11</th>
                                <td className="p-3" colspan="2">E-Grantz</td>
                                <td className="p-3" colspan="2">Those who are in SC ,ST , OEC ,OBC ,FC category students.</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">12</th>
                                <td className="p-3" colspan="2">Fisherman Scholarship</td>
                                <td className="p-3" colspan="2">Fisherman</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">13</th>
                                <td className="p-3" colspan="2">Snehapoorvam Scholarship</td>
                                <td className="p-3" colspan="2">Students whose father or mother expired.</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">14</th>
                                <td className="p-3" colspan="2">Principal of institution</td>
                                <td className="p-3" colspan="2">Member (Ex-officio)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">15</th>
                                <td className="p-3" colspan="2">PRAGATI SCHOLARSHIP</td>
                                <td className="p-3" colspan="2">The students admitted in 1st year through centralized admission process in AICTE approved Technical Institution for approved Diploma/Degree level Programmes are eligible to apply for the scholarship.</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">16</th>
                                <td className="p-3" colspan="2">NON GATE SCHOLARSHIP</td>
                                <td className="p-3" colspan="2">Assistantship to Non –Gate- M.Tech students.</td>
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

export default Scholarships

