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
      <div className="sublinksection bg-white text-success">
        <div>
                <div className="mb-2"><img src="src/images/home/solidarity.png" alt="Social acts" /></div>
                <div className="mb-2"><h3>Social Acts</h3></div>
                <div className="mb-2"><p>GEC-BH and Society</p></div>
        </div>
        <div>
                <div className="mb-2"><img src="src/images/home/satellite.png" alt="Tech Knowledge" /></div>
                <div className="mb-2"><h3>Tech Know</h3></div>
                <div className="mb-2"><p>Tech. Initiatives</p></div>
        </div>
        <div>
            <div className="mb-2"><img src="src/images/home/sports.png" alt="Sports GECB" /></div>
            <div className="mb-2"><h3>Sports</h3></div>
            <div className="mb-2"><p>Sports and Games</p></div>
        </div>
        <div>
            <div><img src="src/images/home/paint.png" alt="Arts and cultural" /></div>
            <div><h3>Arts and Cultural</h3></div>
            <div><p>Activities and Events</p></div>
        </div>
      </div>
      <div className="events">
      <div className="d-flex flex-column">
            <div className="w-10 border-bottom border-success border-3 text-danger mb-3"><h4>About Us</h4></div>
            <div className="text-primary mb-2"><h1>WELCOME TO GEC</h1></div>
            <div className="text-success mb-2"><h2>BARTON HILL</h2></div>
            <div className="text-secondary mb-3"><p>Government Engineering College, Barton Hill was established by the Government of Kerala in the academic year 1999-2000. Within a short span of time since inception, the college has achieved notable academic excellence. The college is affiliated to the University of Kerala for final year B.tech batch and APJ Abdul kalam Kerala Technological University for all other batches.</p></div>
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
