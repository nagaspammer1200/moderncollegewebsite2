import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Budget = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex personcontainer2">
            <div className="rulecontainer2">
                <div className="d-flex flex-column text-center">
                    <div className="mb-5 mt-3">
                        <div className="text-primary"><a href="http://gecbh.ac.in/static/docs/2020-21%20_m.pdf"><h6>Budget 2020-2021</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="http://gecbh.ac.in/static/docs/2021-22%20m.pdf"><h6> Budget 2021-2022</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="http://gecbh.ac.in/static/docs/2022-23m.pdf"><h6>Budget 2022-2023</h6></a></div>
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

export default Budget

