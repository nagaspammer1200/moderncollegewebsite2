import React,{useContext,useEffect} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar';
import FixedNavbar from '../components/FixedNavbar';
import ImageSlider from '../components/ImageSlider';
import BannerFooter from '../components/BannerFooter';
import PermanentFooter from '../components/PermanentFooter';
import FloatingText from '../components/FloatingText';
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Home = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue"))
  }, []);
  return (
    <div className="d-flex flex-column home">
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div className="mb-4"><FixedNavbar/></div>
          <div><FloatingText/></div>
          <div><ImageSlider imgone="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/students.jpg?alt=media&token=0e51b478-9427-47e6-b74b-9da4a29d61a0" imgtwo="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/gokul.jpg?alt=media&token=8ec446d8-ed21-4c67-8412-785b8049ca47" imgthree="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/people.jpeg?alt=media&token=780ff612-6fc3-4e52-9a35-6553dfb885ce" imgfour="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/toppers.jpg?alt=media&token=1ee0aa84-eaee-4609-9d96-a24dffa006dd" altone="Students Image" alttwo="Gokul Image" altthree="Graduation Ceremony" altfour="IT Department Toppers"/></div>
          <div>
            <div className={darkMode?"vision d-flex bg-dark text-white":"vision d-flex"}>
              <div><h4>Vision and Mission Statement</h4></div>
              <div>
                  <h3><b>Vision</b></h3>
                  <p><i>A centre of higher learning in engineering that nurtures inquisitive young minds, fosters innovative research and reaches out to the society, while incessantly improving itself.</i></p>
                  <br />
                  <h3><b>Mission</b></h3>
                  <ul>
                      <li><i>Impart Engineering knowledge and skills.</i></li>
                      <li><i>Mould professionals with integrity.</i></li>
                      <li><i>Nurture the spirit of innovation, creativity and sustainability to address needs of society.</i></li>
                      <li><i>Collaborate with industry, academic and research institutions of repute.</i></li>
                  </ul>
              </div>
            </div>
            <div className={darkMode?"events bg-dark border-3 border-top border-primary":"events"}>
              <div className="d-flex flex-column">
                  <div className="w-10 border-bottom border-success border-3 text-danger mb-3"><h4>About Us</h4></div>
                  <div className="text-primary mb-2"><h1>WELCOME TO GEC</h1></div>
                  <div className="text-success mb-2"><h2>BARTON HILL</h2></div>
                  <div className="text-secondary mb-3"><p>Government Engineering College, Barton Hill was established by the Government of Kerala in the academic year 1999-2000. Within a short span of time since inception, the college has achieved notable academic excellence. The college is affiliated to the University of Kerala for final year B.tech batch and APJ Abdul kalam Kerala Technological University for all other batches.</p></div>
              </div>
              <div className={"quicklinks1 bg-info rounded"}>
                  <div>
                      <h4><i className="bi bi-file"></i>&emsp;Quick Links</h4>
                  </div>
                  <div className="quicklinks2">
                      <ul>
                          <li><a href="http://gecbh.ac.in/static/docs/ORGANIZATIONAL%20STRUCTURE.pdf">Organizational Structure</a></li>
                          <hr />
                          <li><a href="http://gecbh.ac.in/aicte/">EOA Reports</a></li>
                          <hr />
                          <li><a href="http://gecbh.ac.in/static/docs/Information%20Bullettin%20final%2009-10-2023.pdf">Information Bulletin</a></li>
                          <hr />
                          <li><a href="https://drive.google.com/file/d/1KrkzevoakzhoZvKy0vktVgsfkpbnkg_-/view">Mandatory Disclosure</a></li>
                          <hr />
                          <li><a href="https://www.cee.kerala.gov.in/keam2023/pdf/Prospectus.pdf">KEAM Prospectus</a></li>
                          <hr />
                      </ul>
                  </div>
              </div>
            </div>
            <div className={darkMode?"extrasection d-flex bg-dark text-center border-3 border-top border-success":"extrasection d-flex text-center"}>
              <div className="es1 bg-warning">
                  <div className="text-primary"><h4><u><a href="/adam">ADAM</a></u></h4></div>
                  <div><p>Advanced Diploma in Automotive Mechatronics (ADAM) course is one of the social-oriented programs initiated by Mercedes-Benz India.</p></div>
              </div>
              <div className="es2 bg-warning">
                  <div className="text-primary"><h4><u><a href="/tplc">TPLC</a></u></h4></div>
                  <div><p>The Translational research and Professional Leadership centre (TPLC), Sharing knowledge between research institutions and the society.</p></div>
              </div>
              <div className="es3 bg-warning">
                  <div className="text-primary"><h4><u>R & D</u></h4></div>
                  <div><p>Approved KTU Research Center</p></div>
              </div>
            </div>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Home
