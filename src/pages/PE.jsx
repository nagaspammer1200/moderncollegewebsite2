import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import ImageSlider from '../components/ImageSlider'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const PE = () => {
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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Department of Physical Education</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark":"d-flex personcontainer3 p-3"}>
            <div className="p-3">
                <div className="mb-5"><ImageSlider imgone="src/images/departments/sp1.jpg" imgtwo="src/images/departments/sp2.jpg" imgthree="src/images/departments/sp3.jpg" imgfour="src/images/departments/sp4.jpg" altone="PE Team" alttwo="Running" altthree="Football" altfour="Trophy"/></div>
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p>The Institution has a full fledged Physical Education Department, even though the institution has no court facilities due to the insufficient land. The main aim of the department is to provide physical education programme and its activities to all the inmates of the college both staff and students. The department started to make a physical efficiency data card for each student that will be provided to students along with the Transfer Certificate as they leave the college. Talent identification will be done along this test and promised athlete and players is given special training programmes for the participation of Kerala University Intercollegiate Competitions. Sports programmes are arranges near by stadiums such as University Stadium, Central Stadium and Chandrasekharan nair Stadium. 11 students were secured grace marks in different disciplines in 2013-14. Attendance certificate is given by the college for those participating for competitions. <br />Interclass competitions were conducted for all the disciples for men and women and for staff. This is just like a sports carnival. The students participation is 100%. Different coaching programmes were conducted for different sports disciplines.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b><i>VISION</i></b></h3></div>
                        <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p><i>"To make a vibrant, leading-edge in the sports arena duly recognizing the students as the central character of all sporting activities;</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                    <i>To create adequate sports infrastructure; raise the standard of sports in the college. To promote games; adopt maximum disciplines of the Olympic Games; broad base sports; synergize the activities of the Sports. To promote the cause of healthy living among all sections of the student and society. To promote the spirit of sportsmanship, camaraderie and self-discipline; harness talent at the grassroots level; nurture the potential talent and achieve excellence at both the National and International level. Provide for incentives to sports persons who win laurels for the college, State and country at the National and International"</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer">
                        <div className={darkMode?"text-success mb-3 ms-3":"text-primary mb-3 ms-3"}><h3><b><i>MISSION</i></b></h3></div>
                        <div className={darkMode?"mb-5 p-3 text-info textcontainer4":"mb-5 p-3 textcontainer4"}><p><i>"To provide equal opportunities to all students’ participation in sports.To promote excellence in sport with the athlete as the central character.</i></p></div>
                        <div>
                            <p>
                            <button className={darkMode?"btn btn-warning text-black":"btn btn-primary text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className={darkMode?"card card-body text-info bg-dark p-2":"card card-body shadow p-2"}>
                                    <i>To develop, maintain and optimally utilise high quality sports infrastructure. To encourage, train and support talented sports persons in large numbers. To lay special emphasis on strengthening of infrastructure in educational institutions. <br /><br />To create a culture of sports by imbibing higher moral and ethical values, spirit of sportsmanship and camaraderie and thereby raise the level of desire to excel among the students’ in the college. <br /><br />To channelize sports activities as a vehicle to help the people of the State to achieve at least a minimum level of physical fitness. To recognise talent in sports and reward them for achieving excellence in sports. <br /><br /><br />To recognise special needs of the differentially abled and facilitate their participation in sports and games. To ensure autonomy in sports so much so the spirit of the Olympic Charter is respected. To take appropriate steps to encourage involvement of sports infrastructure, training and conduct of sports competition leading to broad basing of sports in the college."</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={darkMode?"d-flex p-3 text-info bg-dark border border-white border-1 mb-5 departmentcontainer":"d-flex p-3 text-white bg-primary mb-5 departmentcontainer"}> 
                    <div className="mb-5"><img src="src/images/people/default.png" width="150px" height="150px" alt="Sheeba" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr.Rana Prathap AO</h5></div>
                        <div><h6>Assistant Professor</h6></div>
                        <div><h6>"944743646469"</h6></div>
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

export default PE

