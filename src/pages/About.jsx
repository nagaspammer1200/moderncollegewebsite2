import React,{useContext,useEffect} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import "../assets/Home.css"
import "../assets/About.css"


const About = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => { 
    setDarkMode(localStorage.getItem("darkModeValue2"))
  }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"aboutcontainer bg-dark text-info":"aboutcontainer"}>
            <div className="card text">
              <div className="m-3"><img src="https://firebasestorage.googleapis.com/v0/b/gecbh-cl.appspot.com/o/college_abt.jpg?alt=media&token=aa490135-be9d-4f8a-b652-5ccf78318110" height="500px" className="card-img" alt="Image of GECBH"/></div>
              <div className="card-img-overlay">
                  <h4 className="card-title text-dark mt-5 ms-5"><b>Know Us Better</b></h4>
                  <h1 className="card-text text-black mt-5 ms-5"><b>About Us</b></h1> 
              </div>
            </div>
            <div className="pcontainer">
              <div className="pitem">
                <div>
                  <h3 className="border-success border-bottom border-3 mb-3"><b>GECBH at a Glance</b></h3>
                  <img src="https://firebasestorage.googleapis.com/v0/b/gecbh-cl.appspot.com/o/college4.jpeg?alt=media&token=ce88c7b8-c164-41d3-9d0b-126b19133b1a" width="300px" height="250px" alt="College Image 2" />
                </div>
                <div className="mt-4">
                  <p><b>Government Engineering College, Barton Hill</b> was established by the Government of Kerala in the academic year 1999-2000. Within a short span of time since inception, the college has achieved notable academic excellence. The college is affiliated to APJ Abdul kalam Kerala Technological University. It is under the administrative control of the Director of Technical Education, Government of Kerala.The college is situated at scenic hills of Barton Hill and the land was donated by His Highness Sri.Chithira Thirunal Balarama Varma, the last ruling Maharaja of the princely State of Travancore. The college started its functioning in the month of November 1999 on the buildings of the Barton Hill Girl’s High School, Kunnukuzhy which is now defunct. The first principal of the college was Prof. G. Jayasankar.</p>
                </div>
              </div>
              <div className="pitem">
                <div>
                  <h3 className="border-success border-bottom border-3 mb-3"><b>History</b></h3>
                  <img src="https://firebasestorage.googleapis.com/v0/b/gecbh-cl.appspot.com/o/history.jpg?alt=media&token=c09430b5-6bfb-46e2-a2e7-5269390332d4" width="300px" height="250px" alt="College History Image" />
                </div>
                <div className="mt-4">
                  <p><b>Government Engineering College, Barton Hill</b> located near PMG junction, in the heart of the Thiruvananthapuram city. Our college is situated at scenic hills of Barton hill; William Barton designed and built the new Secretariat building in Trivandrum, AD 1869, who was the chief engineer of Travancore. It was built based on Roman Architecture. Later it became the administration centre of Thiru – Kochi and then for whole Kerala. Barton Hill, which was the site of the bungalow of civil engineer Walthew Clarance Barton, who led the construction of the Secretariat, which he could see from the top of the 41-metre hill (same height as the ground on which the Secretariat is built). The hill, which is now crowded with a Government Engineering College, Government Law College and hostels of the Institute of Management in Government, also had two names earlier – Peppatti Kunnu (as it housed an office to treat rabies) and Gundu Kaadu (because gun shots were fired from here to mark the time). Our College building is the distinguish of hosting Travancore‟s First English High school for Girls, HER HIGHNESS MAHARANISETHU PARVATHI BAYI, English High school for Girls, established in 1942.</p>
                </div>
              </div>
            </div>
            <div className={darkMode?"bg-dark border-top border-3 border-primary":"bg-dark"}>
              <div className="text-white d-flex p-3 darkcontainer">
                <div className="infoitem p-3">
                  <div className="mb-3 text-success"><i className="bi bi-eye"></i></div>
                  <div className="mb-3 text-success"><h5>Our Vision</h5></div>
                  <div className="mb-3"><p><i>A centre of higher learning in engineering that nurtures inquisitive young minds, fosters innovative research and reaches out to the society, while incessantly improving itself.</i></p></div>
                </div>
                <div className="infoitem p-3">
                  <div className="mb-3 text-success"><i className="bi bi-file-check"></i></div>
                  <div className="mb-3 text-success"><h5>Our Mission</h5></div>
                  <div className="mb-3"><p><i>Impart Engineering knowledge and skills.Mould professionals with integrity.
                  Nurture the spirit of innovation, creativity and sustainability to address needs of society.
                  Collaborate with industry, academic and research institutions of repute.</i></p></div>
                </div>
                <div className="infoitem p-3">
                  <div className="mb-3 text-success"><i className="bi bi-hand-thumbs-up"></i></div>
                  <div className="mb-3 text-success"><h5>Quality Policy</h5></div>
                  <div className="mb-3"><p><i>Government Engineering College Barton Hill committed to develop as a centre of excellence in the field of engineering education by improving the academic performance of the students and supporting them for placement and higher education.</i></p></div>
                </div>
              </div>
            </div>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default About
