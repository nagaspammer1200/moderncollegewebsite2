import React from 'react'
import "../assets/Home.css"

const BannerFooter = () => {
  return (
    <div className="bg-secondary">
      <div className="bannercontainer">
        <div><a href="https://www.aicte-india.org/"><img src="banner-1.png" height="100px" width="100px" alt="AICTE Banner Image" /></a></div>
        <div><a href="https://ktu.edu.in/"><img src="banner-2.png" height="100px" width="100px" alt="KTU Banner Image" /></a></div>
        <div><a href="https://www.nbaind.org/"><img src="banner-3.png" height="100px" width="100px" alt="NBA Banner Image" /></a></div>
        <div><a href="https://www.ieee.org/"><img src="banner-4.png" height="100px" width="100px" alt="IEEE Banner Image" /></a></div>
        <div><a href="http://www.isteonline.in/"><img src="banner-5.png" height="100px" width="100px" alt="ISTE Banner Image" /></a></div>
        <div><a href="http://www.csi-india.org/"><img src="banner-6.png" height="100px" width="100px" alt="CSI Banner Image" /></a></div>
        <div><a href="https://www.asme.org/"><img src="banner-7.png" height="100px" width="100px" alt="ASME Banner Image" /></a></div>
      </div>
    </div>
  )
}

export default BannerFooter
