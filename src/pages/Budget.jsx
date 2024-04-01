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
          <div className="bg-primary p-5 text-white"><h2>Budget</h2></div>
          <div className="personcontainer4">
            <div>
                <div className="m-5 p-5 shadow text-success">
                    <div className="mb-3"><a href="https://gecbh.ac.in/uploads/2020-21%20_m.pdf">Budget 2020-21</a></div>
                    <div className="mb-3"><a href="https://gecbh.ac.in/uploads/2021-22%20m.pdf">Budget 2021-22</a></div>
                    <div className="mb-3"><a href="https://gecbh.ac.in/uploads/2022-23m.pdf">Budget 2022-23</a></div>
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


