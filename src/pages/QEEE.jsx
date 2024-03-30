import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const QEEE = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary text-white p-5"><h2>Quality Enhancement in Engineering Education</h2></div>
          <div className="d-flex personcontainer3 p-3">
            <div className="p-3 ms-4">
                <div className="mb-5"><p>The Committee for Reforms in Technical Education under the chairmanship of Professor Ashok Jhunjhunwala, IIT Madras, has been constituted by the Ministry of Human Resources and Development (MHRD) with a mandate to bring about comprehensive reforms in technical education.</p></div>
                <div className="mb-5"><p>This committee has extensively studied the technical education system prevailing at present and identified problem areas in several colleges. One of the important concern areas is that the quality of technical education imparted in many colleges is not at par with the premier institutes. This in turn is because the colleges lack the pedagogical resources in the form of highly qualified teachers, well developed content and good lab infrastructure, that students in the premier institutes take for granted. To address this specific issue, the committee has come up with a program wherein real time and synchronous technology is used to allow for an integration of superior external scholastic inputs into current pedagogical practices.</p></div>
                <div className="text-primary mb-3 ms-3"><h3>Live Class</h3></div>
                <div className="mb-5 p-3"><p>IIT faculty deliver live lecture classes to participating colleges. The schedule of lectures are sent to colleges priorly and notifications are provided before start of each session.</p></div>
                <div className="text-primary mb-3 ms-3"><h3>Coursepack </h3></div>
                <div className="mb-5 p-3"><p>A supplement study material with lecture notes, live class videos, discussion forums, assessment and evaluation tools to serve as a reference material for QEEE courses.</p></div>
                <div className="text-primary mb-3 ms-3"><h3>Live Labs</h3></div>
                <div className="mb-5 p-3"><p>To provide virtual hands-on experience to students on experiments undertaken remotely. It creates an opportunity to work on a real lab experiment tailored to suit their syllabus and curriculum.</p></div>
                <div className="text-primary mb-3 ms-3"><h3>Bridge Programs</h3></div>
                <div className="mb-5 p-3"><p>To bridge the gap between the initial skills of individuals and what they need to enter and succeed in postsecondary education and career-path employment.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default QEEE

