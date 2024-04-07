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

const SW = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Student Welfare</h2></div>
          <div className={darkMode?"personcontainer5 border-top border-1 border-primary bg-dark":"personcontainer5"}>
                <div className="table-responsive tablecontainer pt-5">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
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

