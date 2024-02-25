import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const AICTE = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>All India Council for Technical Education</h2></div>
          <div className="m-5 text-primary text-center"><h5>Feedback facility of students and Faculty available in the AICTE WebPortal</h5></div>
          <div className="text-dark text-center m-5"><h2>AICTE Documents/Downloads</h2></div>
          <div className="d-flex personcontainer2">
            <div className="rulecontainer2">
                <div className="d-flex flex-column text-center">
                    <div className="mb-5 mt-3">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1-9ZPK2wBeZ1tXl9kpNMogcrGYr8Gxkby/view?usp=drive_link"><h6>EOA Report 2022-23</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1HE_6QNTwTVhkZ-wJmcutXx3DAn5nGUJ1/view?usp=drive_link"><h6>EOA Report 2021-22</h6></a></div>
                    </div>
                    <div className="mb-5 mt-3">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1MfCNs42JuCeEsDJBRB-uFjhU1G6gEmgK/view?usp=drive_link"><h6>EOA Report 2020-21</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1NKOBhvbwodklREuROkLIp8Jd6JC2-dRS/view?usp=drive_link"><h6>EOA Report 2019-20</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1wW8QqmGoyc_fzXw2MPW8y7xYCQJLDiyk/view?usp=drive_link"><h6>EOA Report 2018-19</h6></a></div>
                    </div>
                    <div className="mb-5 mt-3">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1Gb52WpNpLVwOWfPtbUf-9lt0K6MTmSl9/view?usp=drive_link"><h6>EOA Report 2017-18</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1dHn09UNq0J73KnKLq_xN8SR5njEfm1dI/view?usp=drive_link"><h6>EOA Report 2016-17</h6></a></div>
                    </div>
                    <div className="mb-5">
                        <div className="text-primary"><a href="https://drive.google.com/file/d/1Vg-ppwYsUtlsxaJNN0n9zEqhFNdPrNQA/view?usp=drive_link"><h6>EOA Report 2015-16</h6></a></div>
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

export default AICTE

