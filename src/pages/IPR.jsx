import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const IPR = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex personcontainer3">
            <div className="rulecontainer3">
                <div className="d-flex flex-column text-center">
                    <div className="mb-5 mt-3 text-primary"><h4>IPR Cell</h4></div>
                    <div className="mb-5 text-secondary text-start">
                        <p>The IPR cell has been setup in the college. This cell will function as a satellite centre for Patent Facilitating Centre of TIFAC, Government of India. The major objectives of the centre are to organize technical programmes to generate awareness among public on Intellectual Property Rights (IPR) and thus nurturing students research scholars, scientist, technocrats, professionals, industrialists, grass root in- novators, etc. It aims to increase the Intellectual Property output of the State by facilitating and guiding people from different walks of life. The cell will provide technical, legal and financial assistance for filing patent and facilitates to access patent related documents. Prof. Nelsa Abraham, Assistant Professor, Dept. of ECE, is the faculty in charge.</p>
                    </div>
                    <div className="mb-5 ptaimage">
                        <img src="src/images/pta/ipr.jpg" width="85%" alt="Intellectual Property Rights Cell" />
                    </div>
                    <div className="mb-5 text-secondary text-start">
                        <p>A workshop was organized by IPR cell GEC Barton Hill, on 26-10-2017. The workshop was inaugurated by Dr. Rajasree R., Principal GEC, Barton Hill. In her speech she emphasized the importance of IPR. IP creation and its protection play a vital role in gaining an advantageous position in technological game for achieving economic growth. After her speech, next session was handled by Shri. Safikh S., Technical officer IPR cell Kerala. The students from ECE, EEE, IT and civil branches participated in the workshop.</p>
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

export default IPR

