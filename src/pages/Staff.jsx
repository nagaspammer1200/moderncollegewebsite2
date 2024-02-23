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

const Staff = () => {

    const [staffList,setStaffList] = useState([]);
    const staff = collection(db,"adminstaff");

    useEffect(()=>{
        const displaystaff = async () => {
        try {
            const data1 = await getDocs(staff);
            const filteredData1 = data1.docs.map((doc)=> ({
            ...doc.data(), id: doc.id,
            }));
            console.log(filteredData1)
            setStaffList(filteredData1)
        }
        catch (err){
        console.log("error");
        }
        };
        displaystaff();
    },[]);


    return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="d-flex hodcontainer p-3 mt-3">
            <div>
                {staffList.map((movie) => (
                <div className="mb-4">
                        <PersonDetails personimage={movie.img} personname={movie.name} persondepartment={movie.desig} personnumber={movie.pnum} personemail={movie.email} persondesignation={movie.desig3} persondepartment2={movie.desig2} />
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

export default Staff

