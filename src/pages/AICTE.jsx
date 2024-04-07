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

const AICTE = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue2"))
  }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>All India Council for Technical Education</h2></div>
          <div className={darkMode?"personcontainer4 bg-dark border-top border-primary border-1":"personcontainer4"}>
            <div>
                <div className={darkMode?"text-success m-5 text-center":" text-primary m-5 text-center"}><h5>Feedback facility of students and Faculty available in the AICTE WebPortal</h5></div>
                <div className={darkMode?"text-white text-center":"text-dark text-center"}><h5>AICTE Documents/Downloads</h5></div>
                <div className={darkMode?"m-5 p-4 text-info":"m-5 p-4 shadow text-success"}>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1-9ZPK2wBeZ1tXl9kpNMogcrGYr8Gxkby/view?usp=drive_link">EOA Report 2022-23</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1HE_6QNTwTVhkZ-wJmcutXx3DAn5nGUJ1/view?usp=drive_link">EOA Report 2021-22</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1MfCNs42JuCeEsDJBRB-uFjhU1G6gEmgK/view?usp=drive_link">EOA Report 2020-21</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1NKOBhvbwodklREuROkLIp8Jd6JC2-dRS/view?usp=drive_link">EOA Report 2019-20</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1wW8QqmGoyc_fzXw2MPW8y7xYCQJLDiyk/view?usp=drive_link">EOA Report 2018-19</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1Gb52WpNpLVwOWfPtbUf-9lt0K6MTmSl9/view?usp=drive_link">EOA Report 2017-18</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1dHn09UNq0J73KnKLq_xN8SR5njEfm1dI/view?usp=drive_link">EOA Report 2016-17</a></div>
                    <div className="mb-3"><a href="https://drive.google.com/file/d/1Vg-ppwYsUtlsxaJNN0n9zEqhFNdPrNQA/view?usp=drive_link">EOA Report 2015-16</a></div>
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

export default AICTE

