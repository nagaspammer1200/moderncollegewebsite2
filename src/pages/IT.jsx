import React,{useState} from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import ImageSlider from '../components/ImageSlider'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const IT = () => {
    const [readMenuOne,setReadMenuOne] = useState(false);
    const [readMenuTwo,setReadMenuTwo] = useState(false);
    const changeMenuOne  = () => {
        setReadMenuOne(!readMenuOne)
    }
    const changeMenuTwo  = () => {
        setReadMenuTwo(!readMenuTwo)
    }
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Department of Information Technology</h2></div>
          <div className="d-flex personcontainer3 p-3 ms-3">
            <div className="p-3">
                <div className="mb-5"><ImageSlider imgone="src/images/departments/it1.jpg" imgtwo="src/images/departments/it2.jpg" imgthree="src/images/departments/it3.jpg" imgfour="src/images/departments/it2.jpg" altone="IT Toppers" alttwo="IT Block" altthree="IT Lab" altfour="IT Block"/></div>
                <div className="text-primary mb-3 ms-3"><h3>About the Department</h3></div>
                <div className="mb-5 p-3"><p>The Department of Information Technology at Government Engineering College, Barton hill was established in the academic year 1999, offering a four year B.Tech. course in Information Technology. M.Tech. Course in Information Technology with specialization in Network Engineering commenced from the academic year 2011-2012. <br />The Department lays strong emphasis on ensuring that the students have a thorough idea of core concepts. Further, the department focuses on nurturing the analytical abilities of students and exposes them to the latest technologies and equips them with industry-specific skills.</p></div>
                <div className="physicaldepartment p-3">
                    <div className="cardcontainer">
                        <div className="text-primary mb-3 ms-3"><h3>VISION</h3></div>
                        <div className="mb-2 p-3"><p><i>To be a centre of higher learning in Information Technology that imparts qualityclose engineering education and</i></p></div>
                        <div className="mb-5 ">
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample1" onClick={changeMenuOne}>{readMenuOne?"Close":"Read More"}
                            </button>
                            </p>
                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthExample1">
                                    <div className="card card-body shadow p-2">
                                    engineering education and fosters innovative research reaching out to the society.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardcontainer">
                        <div className="text-primary mb-3 ms-3"><h3>MISSION</h3></div>
                        <div className="mb-2 p-3"><p><i>Establish conducive learning environment in the field of Information Technology</i></p></div>
                        <div>
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={changeMenuTwo}>{readMenuTwo?"Close":"Read More"}
                            </button>
                            </p>
                            <div className="mb-5">
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div className="card card-body p-2" >
                                    Mould IT professionals with ethical values to address the needs of the society. Collaborate with academic, industrial, and research organization of repute.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-3 text-white bg-primary mb-5 departmentcontainer"> 
                    <div className="mb-5"><img src="src/images/people/default.png" width="150px" height="150px" alt="Sheeba" /></div>
                    <div>
                        <div className="mb-2"><h5>HEAD OF DEPARTMENT</h5></div>
                        <div className="mb-2"><h5>Dr. Haripriya A. P.</h5></div>
                        <div><p>Associate Professor</p></div>
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

export default IT

