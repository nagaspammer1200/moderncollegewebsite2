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

const IIIC = () => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Industry-Institute Interaction Cell</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark text-info border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3">
                <div className="mb-2"><p>An Industry Institute Interaction Cell (IIIC) was formed under TEQIP – II for monitoring the activities envisaged in the project. Interaction with industry and other research organizations through consultancy and sponsored research projects will make the faculty always in touch with the state-of-the-art technology. Industries are heavily concentrating on innovations and R&D activities to equip them globally competitive with their products and services. In the industrial scenario of Kerala, especially the State owned Public sector organizations are finding it difficult to cope up with the technology advancements due to lack of necessary R&D activities. Proper interaction with these industries will open opportunities for collaborative projects for consultancies and R &D. The institution can encourage the faculty, technicians and students to interact with industries in all possible ways with the spirit of delivering mutual benefit. <br /><br />The institute signed MoU with more than five industries for collaborative activities for mutual benefits. Students, staffs, and faculty were able to visit and get hands on training in different specialised areas. MoU with different industries has increased tremendously the number of industrial student projects.It also helped in conducting value added education programs for students. The institute is presently offering a course “Advanced Diploma in Automotive Mechatronics (ADAM), in collaboration with Mercedes-Benz. The ADAM centre now offers BOSCH joint certification program. Revenue is also generated by these programs. <br /><br />Students, Staffs and faculty were given different industrial training programs in their respective areas of interest so as to acquire new knowledge in the field as well as to make awareness of the advanced techniques and methods that are in use in the industry. Workshops were also conducted by experts from industry to get hands on training in new software’s the practice. Visit to premier institutes were also made to know more about the lab facilities and the work culture. <br /><br />Students were sent for internship programs in various industries to get training in their respective areas of specialisation and to realise the difference between theory and practice. Internship also helped them to understand sustainability practices followed at industries. They were able to know more about the manufacturing process and different procedures followed. <br /><br />International and National level conferences and Colloquium were organized for the benefit of students and faculty. They were able to showcase their technical contributions/findings. These events surely provide them a platform to discuss and interact with the pioneers in the subject. The discussions with the subject experts have definitely enhanced their ideas,concepts, and the wok content.</p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default IIIC

