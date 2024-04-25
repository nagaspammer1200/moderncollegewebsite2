import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const CSI = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Computer Society of India</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3">
                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b>CSI</b></h3></div>
                <div className={darkMode?"mb-5 text-secondary text-info ps-3 textcontainer4":"mb-5 text-secondary ps-3 textcontainer4"}><p><b>Computer Society of India</b> established in the year 1965 is today the largest it professionals Society in India. The purposes of the Society are scientific and educational advancement of the theory and practice of computer science, computer engineering and technology, systems science and engineering, information processing and related arts and sciences. The mission of the CSI is to facilitate research, knowledge sharing and career enhancement for all categories of it professionals, while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community. Today, the CSI has 66 chapters all over India, 381 student branches, and more than 40,000 members, including India’s most famous it industry leaders and dedicated academicians.</p></div>
                <div className="mb-5 asmeimage "><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/csi.jpg?alt=media&token=71e02c07-49fb-428c-8b9f-a8fcacc40b43" width="550px" height="450px" alt="IEEE Members" /></div>
                <div className={darkMode?"mb-5 text-secondary text-info ps-3 textcontainer4":"mb-5 text-secondary ps-3 textcontainer4"}><p>CSI Student Branch GECBH is one of the active technical society of Government Engineering College Barton Hill, Trivandrum. The body is guided by the Principal along with Staff Advisor Professor Josna of department Information Technology. The main members are of the Information Technology department along with the the society providing a free opportunity for other department students to join India's largest professional association through the CSI BETA program. <br /><br />The executive student committee headed by Kelvin Patric along with Gokul, Rahul, Shaino, Adithyan, Meenu, Malavika, Nayana, Abhishek and Risvana. Talk sessions, project guidance, workshops, competitions and many other events are conducted by the SB for the betterment of each and every student of the college who wishes to have a professional knowledge in the field of Information Technology. Events are usually conducted based on student needs. The society will always work for the betterment of students along with progress of GECBH to achieve greater heights.</p></div>
                <div className={darkMode?"mb-4 text-center text-info":"mb-4 text-center text-primary"}><b>To know more about us, visit our official website</b></div>
                <div className={darkMode?"text-center text-warning":"text-center text-success"}><a href="https://www.csigecbh.in/sb.html"><b><i>Click Here</i></b></a></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default CSI

