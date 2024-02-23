import React from 'react'
import "../assets/Home.css"

const TextSlider = () => {
   
  return (
        <div>
          <div className="textslider">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner h-30">
                <div className="carousel-item active">
                  <img src="src/images/home/white.jpg" className="d-block w-100" alt="background"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-primary">Graduation Ceremony 2023 - Date : 20 th January 2024 (Saturday) at Tagore Theatre, Thiruvananthapuram</h5>
                    <a href="http://14.139.189.91/register.html" className="text-black">More Information</a><br />
                    <a href="http://14.139.189.91/schedule.html" className="text-black">Schedule</a>
                    <p className="text-black">23/11/2023</p>
                  </div>
                </div>
                <div className="carousel-item text-primary">
                  <img src="src/images/home/white.jpg" className="d-block w-100" alt="background"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-primary">Students Grievance Redressal Committee (SGRC) NBA Accreditation Team, NSS Advisory Committee, Discipline Monitoring Committee</h5>
                    <a href="http://gecbh.ac.in/media/uploads/sgrc09012024.pdf" className="text-black">More Information</a><br />
                    <a href="http://gecbh.ac.in/media/uploads/cir09012024.pdf" className="text-black">Circular</a>
                    <p className="text-black"> 09/01/2024</p>
                  </div>
                </div>
                <div className="carousel-item text-primary">
                  <img src="src/images/home/white.jpg" className="d-block w-100 h-70" alt="background"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-primary">CIRCULAR - Punishments for Malpractice cases - Examination Manual 2022 modified-APJAKTU</h5>
                    <a href="https://drive.google.com/file/d/1u0yKHN_mHSKWkGeSz226M5xcaR6WR4Xh/view?usp=drive_link" className="text-black">Click Here</a>
                    <p className="text-black">21/12/2023</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
    )
}

export default TextSlider
