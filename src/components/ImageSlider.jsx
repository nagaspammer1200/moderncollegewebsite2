import React from 'react'

const ImageSlider = ({imgone,imgtwo,imgthree,imgfour,altone,alttwo,altthree,altfour}) => {
  
  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1800">
                <img src={imgone} className="d-block w-100" alt={altone}/>
            </div>
            <div className="carousel-item" data-bs-interval="1800">
                <img src={imgtwo} className="d-block w-100" alt={alttwo}/>
            </div>
            <div className="carousel-item" data-bs-interval="1800">
                <img src={imgthree} className="d-block w-100" alt={altthree}/>
            </div>
            <div className="carousel-item" data-bs-interval="1800">
                <img src={imgfour} className="d-block w-100" alt={altfour}/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default ImageSlider