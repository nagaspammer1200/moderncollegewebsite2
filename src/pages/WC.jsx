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

const WC = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Women Cell </h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark text-info border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3 ms-4">
                <div className="mb-5 textcontainer4"><p>Women cell started its activities with programmes that improves social commitment among youngsters.We organized one week long kindness day celebration under the name Nirvrithi.It included visiting <b>Nirmala shishu Bhavan</b>, spending time with those children and providing them necessary items.It also included bringing refugees of Pulayanarkotta old age home to our college spending a day with those ones, organizing food and cultural events for them.</p></div>
                <div className="d-flex mb-3 gap-5  nsscontainer1">
                    <div>
                        <div><p>Our college celebrates one month long women’s day celebration,which kick-started on February 12 with a flash mob at our college premises. On that day we launched a campaign called <b>“Bridge the gap”</b> which aims to improve menstrual hygiene among women. As a part of which awareness programmes were conducted at ladies hostel and to those less fortunate ones who have less access to these types of knowledge. <br /><br />One month long celebration included online photography contest ,with numerous participants.Group discussion on <b>LGBT rights</b> was conducted that showed a new perspective of youngsters’ viewpoints.A legal wareness programme was conducted in collaboration with social justice department for the girls of our college.A competition called <b>“lady who inspired you”</b> was conducted that brought out the emotional bond of the participants with a women in their life. A film quiz was conducted that turned out to be fabulous because of its huge participation. An interactive session was conducted with our beloved senior <b>Geethu Sivakumar</b> which was so inspiring to those with entrepreneurship dreams. A technical talk was conducted in coorporation with Bimsoft technologies for civil students.</p></div>
                    </div>
                    <div className="ptaimage"><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/wc1.jpg?alt=media&token=c879c644-27b4-4ae5-846d-1eab858136d1" width="300px" height="350px" alt="Women Police Officer" /></div>
                </div>
                <div className="d-flex mb-3 gap-5  nsscontainer1">
                    <div>
                        <div><p>On March 8, we organized <b>International Women’s day</b> celebration at our college with <b>Mrs. B Sandhya IPS</b> as our chief guest. She inaugurated the function by presenting a logo based on the International theme for women’s day “press for progress”. The function was attended by all students and faculties of our college. <br /><br />We have organized a self defense training programme for the students of our college to make them physically and mentally strong in real life. Our ladies amenities centre was renovated and a water cooler was installed inside it. We are on our way to implement a women cell as a part of KSWDC ,that provides huge benefits to our college.</p></div>
                    </div>
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/wc2.jpg?alt=media&token=d41cfa58-ad5f-475c-8bc3-9c8badf148dd" width="290px" height="250px" alt="Police Officer and Guest Talking" /></div>
                </div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default WC

