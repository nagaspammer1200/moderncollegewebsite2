import React,{useState,useEffect} from 'react'
import { db } from '../pages/firebase.js'
import { getDocs,collection } from 'firebase/firestore'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter.jsx'
import PermanentFooter from '../components/PermanentFooter'
import PersonDetails from '../components/PersonDetails'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"

const Head = () => {

    const [headList,setHeadList] = useState([]);
    const hod = collection(db,"hods");

    useEffect(()=>{
        const displayheadofdepartments = async () => {
        try {
            const data1 = await getDocs(hod);
            const filteredData1 = data1.docs.map((doc)=> ({
            ...doc.data(), id: doc.id,
            }));
            console.log(filteredData1)
            setHeadList(filteredData1)
        }
        catch (err){
        console.log("error");
        }
        };
        displayheadofdepartments();
    },[]);


    return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex hodcontainer gap-3 p-3 mt-3">
            <div>
                {headList.map((movie) => (
                <div className="mb-4">
                        <PersonDetails personimage={movie.img} personname={movie.name} persondepartment={movie.desig} personnumber={movie.pnum} personemail={movie.email} personprofile={movie.plink} persondesignation={movie.desig2} persondesignationplace={movie.desigplace}/>
                </div>
                ))}
            </div>
              <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Head

