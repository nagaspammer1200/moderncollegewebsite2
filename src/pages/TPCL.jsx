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

const TPCL = () => {
    const [readMenuOne,setReadMenuOne] = useState(false);
    const [readMenuTwo,setReadMenuTwo] = useState(false);
    const changeMenuOne  = () => {
        setReadMenuOne(!readMenuOne)
    }
    const changeMenuTwo  = () => {
        setReadMenuTwo(!readMenuTwo)
    }
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Translation Research and Professional Leadership Centre</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className={darkMode?"p-3 bg-dark":"p-3"}>
                <div className="mb-5 ptaimage">
                            <img src="src/images/tpcl.png" width="700px" height="400px" alt="Students in a TPLC Meeting" />
                </div>
                <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>About TPL Centre</h3></div>
                <div className={darkMode?"mb-5 text-secondary text-info ps-3":"mb-5 text-secondary ps-3"}><p>Translational Research and Professional Leadership Centre [TPLC] is an interdisciplinary centre functioning at Government Engineering College Barton Hill under the Directorate of Technical Education, since 2015, with the introduction of the interdisciplinary postgraduate program in Translational Engineering. The program is approved by All India Council for Technical Education (AICTE) and affiliated to APJ Abdul Kalam Technological University. Out of 18 seats, presently 8 seats are reserved for sponsored candidates working in Government departments. <br /><br />Along with the M.Tech. program, the centre facilitates internship programs for undergraduate and postgraduate students, with the support of Higher Education Department and ASAP, offers training programs for students, faculty and professionals in the areas of social relevance as well as leadership, self-awareness etc.. The centre has also been involved in the DPR preparation of a few Government Projects, with the involvement of a dedicated interdisciplinary team and students. The centre functions in collaboration with a few premier institutes such as IIT Madras, IIT Bombay, IIT Delhi, IIT Kharagpur, IIT Indore etc., Government institutions such as Integrated Rural Technology Centre, Palakkad, various Government departments and NGO’s like Thanal, Dhruvansh, Canalpy team etc.. The centre has been able to bring up 4 start-ups from among the M.Tech. Translational Engineering students, out of which three are incubated in the college campus itself and functioning well.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>VISION</h3></div>
                        <div className={darkMode?"mb-2 p-3 text-info":"mb-2 p-3"}><p><i>To present, discuss and debate the transformation of basic knowledge into ideas and candidates for translation so as to deliver sustainable innovative products and services for the benefit of society.</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                        To empower the student community with professional, ethical and social awareness, there-by moulding them to become smart and wise professionals with global outlook and social commitment. <br /><br />To analyse the social, political, economic and cultural aspects under the technology umbrella.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer mb-5">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3>MISSION</h3></div>
                        <div className={darkMode?"mb-2 p-3 text-info":"mb-2 p-3"}><p><i>To build Responsible Engineers who hold paramount importance to the health, safety and welfare of the general public</i></p></div>
                        <div>
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                        <p>To inculcate the concept of sustainability and green technologies in Engineering disciplines. <br /><br />To sensitize students to the practical challenges that organizations face and understand the nuances and realities of the industry apart from technical knowledge.<br /><br />To inculcate the spirit of working in multi- disciplinary teams and gain on-the-job experience through active and challenging work on real engineering projects.<br /><br />To foster creative talents, innovative research, self-awareness and life-long learning.<br /><br />

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default TPCL

