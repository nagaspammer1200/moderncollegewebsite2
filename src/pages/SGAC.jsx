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

const SGAC = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Grievance Cell</h2></div>
          <div className={darkMode?"personcontainer5 border-top border-1 border-primary bg-dark":"personcontainer5"}>
                <div>
                  <div className={darkMode?"mb-5 p-3 ms-5 text-success":"mb-5 p-3 ms-5"}><p>A committee has been constituted to redress the complaints of the students of the college regarding the inconveniences met by them. The committee will take up matters related to actions and find solutions to the problems and issues raised by the students for the smooth functioning of the college.</p></div>
                  <div className="table-responsive tablecontainer">
                      <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                          <thead>
                              <tr>
                              <th scope="col" colspan="2">MEMBERS</th>
                              <th scope="col" colspan="1">DEPARTMENT</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row" colspan="2">Smt. Dhanya C.K.</th>
                                  <td className="p-3">Asst. Professor, IT</td>&nbsp;
                              </tr>
                              <tr>
                                  <th scope="row" colspan="2">All HODs</th>
                                  <td className="p-3"></td>
                              </tr>
                              <tr>
                                  <th scope="row" colspan="2">Faculty Advisors</th>
                                  <td className="p-3"></td>
                              </tr>
                              <tr>
                                  <th scope="row" colspan="2">College Union Chairman</th>
                                  <td className="p-3"></td>
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

export default SGAC

