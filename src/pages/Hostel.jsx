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

const Hostel = () => {

  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);
    
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>College Hostel</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark text-info border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="ms-4">
                <div className="mb-5 mt-3"><p>We have a wonderful building at the corner of our college – Ladies Hostel , a secure home for the female students. This hostel is constructed in an Eco friendly manner to provide a green and fresh breath to its inmates. This is filled with 53 rooms which can accommodate 216 students including both M.Tech & B.Tech students.It provides an attractive shelter to the students, as it is adorned with spacious rooms, proper lighting facilities, study tables and required furnishings. Each of its 4 floors(including base) is lined with long verandas, which gifts you a sweet path due to an open quadrangle located at the center. <br /><br />Besides being a shelter in terms of basic needs such as food, purified water, it provides extra facilities such as wifi – connectivity, indoor and outdoor game equipment, resources rich reading corners etc. It has a spacious mess hall which serves tasty and worthy dishes, run by a mess committee headed by the inmates itself. Charge of this mess committee is rounded twice a month so that every student can go through it. <br /><br />Hostel directs the students straight as it runs under certain laid down rules which is monitored by a matron under the head of our responsible Warden – Dr.K.RAHUMATHULLA(Assistant Professor ,Dept. of Science) and Assistant warden Smt. Jyothi TS, 1st Grade Instructor, ECE Department. Strict actions are taken against the inmates violating it. <br /><br />This building provides an ever alive atmosphere by conducting various programs and celebrations. Creative works such as GD, poem/story/essay writing competitions, and drawing/painting competitions are conducted during weekends, to increase the count of productive cells of students brain by entertaining them in parallel. Various festivals such as Onam, Christmas, Vishu, Iftar and other occasions such as New Year, LH day, farewells are celebrated with colorful cultural programmes and enthusiastic games. <br /><br />Definitely, this is a safe home for the inmates, as it is located inside the college campus and is protected by 4 gates guarded by security guards round the clock. Continuous efforts are being taken to arrange more facilities for the students and make them feel comfortable.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Hostel

