import React from 'react'
import "../assets/Home.css"

const MiddleSection = () => {
  return (
    <div>
      <div className="vision d-flex bg-dark text-white">
        <div><h4>Vision and Mission Statement</h4></div>
        <div>
            <h3>Vision</h3>
            <p><i>A centre of higher learning in engineering that nurtures inquisitive young minds, fosters innovative research and reaches out to the society, while incessantly improving itself.</i></p>
            <br />
            <h3>Mission</h3>
            <ul>
                <li><i>Impart Engineering knowledge and skills.</i></li>
                <li><i>Mould professionals with integrity.</i></li>
                <li><i>Nurture the spirit of innovation, creativity and sustainability to address needs of society.</i></li>
                <li><i>Collaborate with industry, academic and research institutions of repute.</i></li>
            </ul>
        </div>
      </div>
      <div className="sublinksection d-flex">
        <div className="d-flex sublinksectionitem">
            <div>
                <img src="src/images/1.png" alt="" />
            </div>
            <div>
                <h3>Social Acts</h3>
                <p>GEC-BH and Society</p>
            </div>
        </div>
        <div className="d-flex sublinksectionitem">
            <div>
                <img src="src/images/2.png" alt="" />
            </div>
            <div>
                <h3>Tech Know</h3>
                <p>Tech. Initiatives</p>
            </div>
        </div>
        <div className="d-flex sublinksectionitem">
            <div>
                <img src="src/images/3.png" alt="" />
            </div>
            <div>
                <h3>Sports</h3>
                <p>Sports and Games</p>
            </div>
        </div>
        <div className="d-flex sublinksectionitem">
            <div>
                <img src="src/images/4.png" alt="" />
            </div>
            <div>
                <h3>Arts and Cultural</h3>
                <p>Activities and Events</p>
            </div>
        </div>
      </div>
      <div className="events">
        <div className="latestevents">
            <div className="mb-4"><img src="src/images/past_events.jpg" alt="" /></div>
            <div className="mb-4"><h1>Release of Hand Written Magazine</h1></div>
            <div className="mb-4"><h5>Women's Day Celebration</h5></div>
            <div className="mb-4"><button class="btn btn-success btn-lg" type="submit">More Past Events</button></div>
        </div>
        <div className="eventscont">
            <div><h4>Upcoming Events</h4></div>
            <hr />
            <div className='d-flex p-2'>
                <div><h5 className="border-bottom border-3 p-3  border-success">20 <br />JAN</h5></div>
                <div className="p-4">
                    <h4>Graduation Ceremony 2023</h4>
                    <p><i class="bi bi-calendar"></i>&emsp;Jan. 20, 2024 - Jan. 20, 2024&emsp;&emsp;<i class="bi bi-clock"></i>&emsp;10:30 a.m. - 5 p.m.&emsp;&emsp; 
                    <i class="bi bi-geo-alt-fill"></i>&emsp;Tagore Theatre, Thiruvananthapuram</p>
                </div>
            </div>
            <div>
                <h5><a href="#">View All Events&ensp;<i className="bi bi-arrow-right"></i></a></h5>
            </div>
            <hr />
        </div>
        <div className="quicklinks1 bg-dark text-primary">
            <div>
                <h4><i className="bi bi-file"></i>&emsp;Quick Links</h4>
            </div>
            <div className="quicklinks2">
                <ul>
                    <li className="text-success"><a href="http://gecbh.ac.in/static/docs/ORGANIZATIONAL%20STRUCTURE.pdf">Organizational Structure</a></li>
                    <hr />
                    <li className="text-success"><a href="http://gecbh.ac.in/aicte/">EOA Reports</a></li>
                    <hr />
                    <li className="text-success"><a href="http://gecbh.ac.in/static/docs/Information%20Bullettin%20final%2009-10-2023.pdf">Information Bulletin</a></li>
                    <hr />
                    <li className="text-success"><a href="https://drive.google.com/file/d/1KrkzevoakzhoZvKy0vktVgsfkpbnkg_-/view">Mandatory Disclosure</a></li>
                    <hr />
                    <li className="text-success"><a href="https://www.cee.kerala.gov.in/keam2023/pdf/Prospectus.pdf">KEAM Prospectus</a></li>
                    <hr />
                </ul>
            </div>
        </div>
      </div>
      <div className="extrasection d-flex p-2 gap-4 text-center">
        <div className="bg-dark es1">
            <div className="text-primary"><h4><u>ADAM</u></h4></div>
            <div className="text-white"><p>Advanced Diploma in Automotive Mechatronics (ADAM) course is one of the social-oriented programs initiated by Mercedes-Benz India.</p></div>
        </div>
        <div className="bg-dark es2">
            <div className="text-primary"><h4><u>TPLC</u></h4></div>
            <div className="text-white"><p>The Translational research and Professional Leadership centre (TPLC), Sharing knowledge between research institutions and the society.</p></div>
        </div>
        <div className="text-white bg-dark es3">
            <div><h4>R & D</h4></div>
            <div><p>Approved KTU Research Center</p></div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
