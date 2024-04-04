import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
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
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
      setDarkMode(localStorage.getItem("darkModeValue"))
    }, []);

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
          <div className={darkMode?"bg-dark p-5 text-warning":"bg-primary p-5 text-white"}><h2>Administrative Staff</h2></div>
          <div className={darkMode?"d-flex hodcontainer border-top border-primary border-1 p-3 bg-dark text-info":"d-flex hodcontainer p-3 mt-3"}>
            <div>
                {staffList.map((movie) => (
                <div className="mb-5">
                        <PersonDetails personimage={movie.img} personname={movie.name}  personnumber={movie.pnum} personemail={movie.email} persondesignation={movie.desig2} />
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

