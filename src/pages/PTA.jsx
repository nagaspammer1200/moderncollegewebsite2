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

const PTA = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Parent Teacher Association</h2></div>
          <div className={darkMode?"d-flex personcontainer3 bg-dark border-top border-1 border-primary":"d-flex personcontainer3"}>
            <div>
                <div className="d-flex flex-column text-center">
                    <div className={darkMode?"mb-5 text-secondary text-start textaninight text-info":"mb-5 textaniday text-secondary text-start"}>
                        <p>The Parent Teacher Association of Government Engineering College Barton hill is very active and is giving considerable assistance and financial support for the improvement of facilities within the institution. A large number of developmental programs have been taken up under the patronage of the PTA for the benefit of students and staff, including the funding for the establishing departmental libraries for the faculty. The objectives of the association are:</p>
                    </div>
                    <div className="mb-5 text-start text-success border-bottom border-success border-3 s">
                        <p><i className="bi bi-plus "></i>To work for the welfare of the students and the institution <br /><br /><i className="bi bi-plus"></i> 
                        To offer constructive suggestions for the smooth and successful functioning of this college. <br /><br /><i className="bi bi-plus"></i> 
                        To promote better participation of the parents in the various programs of the college and to establish better liaison with the teachers</p>
                    </div>
                    <div className={darkMode?"mb-5 text-secondary text-start text-info":"mb-5 text-secondary text-start"}>
                        <p>The PTA provides financial assistance to meritorious and needy students with consistent academic record. The best student in each branch of engineering is awarded by the PTA. Cash awards are also given to top scorers of even semesters in the university examination.</p>
                    </div>
                    <div className="mb-5 ptaimage">
                        <img src="src/images/pta/pta.jpg" alt="Parents Teachers Association Meeting" />
                    </div>
                    <div className={darkMode?"mb-5 text-warning":"mb-5 text-secondary"}>
                        <h6>The following endowments were constituted by the PTA for the students:</h6>
                    </div>
                    <div className={darkMode?"mb-5 text-start text-white":"mb-5 text-start"}>
                        <p><i className="bi bi-stars"></i> Prof. Krishnankutty Memorial Endowment Award: Highest CGPA scorers in each branch <br /><br /><i className="bi bi-stars"></i> Prof. T. S. Sunilkumar Memorial Endowment Award: Highest CGPA scorers in first year of each branch (Constituted by Staff & Faculty) <br /><br /><i className="bi bi-stars"></i> Sri. Madhavan Pillai – K. N. Seetha Memorial Endowment Award: Highest GATE scorer (Constituted by Prof. M. Mahadevan, Ex. Principal) <br /><br /><i className="bi bi-stars"></i> Prof. B. Anil Endowment Award: Best Outgoing Student (Constituted by Prof. B. Anil, Ex. Principal) <br /><br /><i className="bi bi-stars"></i> Sri. E. J. Somaraj Memorial Endowment Award: Highest Mark Scorer for Subject Electrical Machines 1 & 2 (Constituted by Prof. Sheela, Ex. HoD, Electrical) <br /><br /><i className="bi bi-stars"></i> Rev. Fr. John Chathoth Endowment Award: Highest Mark Scorer for Subject Geotechnical Engineering 1 & 2 (Constituted by Prof. Mary John, Ex. HoD, Civil) <br /><br /><i className="bi bi-stars"></i> The awards will be distributed during the PTA annual general body meeting.</p> 
                    </div>
                    <div className="mb-5 mt-3 text-primary"><h4>PTA Executive Committee</h4></div>
                    <div className="mb-5">
                        <div className="table-responsive tablecontainer me-5">
                        <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name of the Principal</th>
                                    <th scope="col">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>  
                                    <td>Dr. Shiny G.</td>
                                    <td className="p-1">President</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>  
                                    <td>Smt. Ajitha S. Lal</td>
                                    <td className="p-1">Vice President</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>  
                                    <td>Dr. Bindu S.</td>
                                    <td className="p-1">Secretary</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>  
                                    <td>Smt. Devia Rathinamala</td>
                                    <td className="p-1">Joint Secretary</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>  
                                    <td>Dr Vinod M.</td>
                                    <td className="p-1">Treasurer</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>  
                                    <td>Sri. Anil Kumar P.A.</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>  
                                    <td>Sri. Arul C Wilson</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>  
                                    <td>Sri. Helton Haju</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>  
                                    <td>Sri. Ajith Nair</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>  
                                    <td>Sri.Farook A.</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>  
                                    <td>Sri. Rajesh S.V.</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>  
                                    <td>Smt. Cicil H.</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">13</th>  
                                    <td>Sri. M. Christhudas</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">14</th>  
                                    <td>Sri. Mahadevan</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">15</th>  
                                    <td>Sri. Ramesh V.S.</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">16</th>  
                                    <td>Dr. Radhakrishnan</td>
                                    <td className="p-1">PG Dean</td>
                                </tr>
                                <tr>
                                    <th scope="row">17</th>  
                                    <td>Sri Manoj Kumar</td>
                                    <td className="p-1">Member(Parent)</td>
                                </tr>
                                <tr>
                                    <th scope="row">18</th>  
                                    <td>HODs of all Departments</td>
                                    <td className="p-1"></td>
                                </tr>
                                <tr>
                                    <th scope="row">19</th>  
                                    <td>PG Dean</td>
                                    <td className="p-1"></td>
                                </tr>
                                <tr>
                                    <th scope="row">20</th>  
                                    <td>UG Dean</td>
                                    <td className="p-1"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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

