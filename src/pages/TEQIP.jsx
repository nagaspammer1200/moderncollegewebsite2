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

const TEQIP = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue2"))
  }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Technical Education Quality Improvement Programme</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className={darkMode?"p-3 bg-dark":"p-3"}>
            <div className="d-flex flex-column text-center">
                    <div className="mb-5">
                        <div className={darkMode?"mb-5 mt-3 text-success text-start":"mb-5 mt-3 text-primary text-start"}><h4>Introduction</h4></div>
                        <div className={darkMode?"mb-2 mt-3 text-info text-start":"mb-2 mt-3 text-secondary text-start"}><p>Technical Education Quality Improvement Programme (TEQIP) was envisaged as a long-term programme of about 10-12 years duration to be implemented in 2-3 phases for transformation of the Technical Education System with the World Bank assistance. As per TEQIP design, each phase is required to be designed on the basis of lessons learnt from the implementation of an earlier phase. TEQIP-I started a reform process in 127 Institutions. The reform process needs to be sustained and scaled-up for embedding gains in the system and taking the transformation to a higher level. To continue the development activities initiated through TEQIP-I, a sequel Project is planned as TEQIP-II.</p></div>
                    </div>
                    <div className="mb-5">
                        <div className="mb-5 mt-3 text-primary text-start"><h4>Objectives</h4></div>
                        <div className={darkMode?"mb-2 mt-3 text-info text-start":"mb-2 mt-3 text-secondary text-start"}><p>Strengthening Institutions to produce high quality engineers for better employability, Scaling-up postgraduate education and demand-driven Research & Development and Innovation Establishing Centers of Excellence for focused applicable research Training of faculty for effective Teaching, and Enhancing Institutional and System Management effectiveness.</p></div>
                    </div>
                    <div className="mb-5">
                        <div className="mb-5 mt-3 text-primary text-start"><h4>Bog Minutes</h4></div>
                        <div className={darkMode?"mb-2 mt-3 text-info text-center":"mb-2 mt-3 text-secondary text-center"}><h5><a href="http://gecbh.ac.in/static/docs/Minutes-23rdBoG.pdf">23rd BoG Minute</a></h5></div>
                    </div>
                </div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default TEQIP

