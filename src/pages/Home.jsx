import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar';
import FixedNavbar from '../components/FixedNavbar';
import ImageSlider from '../components/ImageSlider';
import MiddleSection from '../components/MiddleSection';
import BannerFooter from '../components/BannerFooter';
import PermanentFooter from '../components/PermanentFooter';
import "../assets/Home.css"

const Home = () => {
  return (
    <div className="d-flex flex-column home">
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div className="mb-4"><FixedNavbar/></div>
          <div ><ImageSlider/></div>
          <div className="mb-4"><MiddleSection/></div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Home
