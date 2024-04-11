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

const Head = () => {

    const [headList,setHeadList] = useState([]);
    const hod = collection(db,"hods");
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => {
      const darkModeValue2 = localStorage.getItem("darkModeValue");
      setDarkMode(darkModeValue2)
    }, []);

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
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Head of Departments</h2></div>
          <div className={darkMode?"d-flex hodcontainer border-top border-primary border-1 p-3 bg-dark text-info":"d-flex hodcontainer p-3"}>
            <div>
                {headList.map((movie) => (
                <div className="mb-4">
                        <PersonDetails personimage={movie.img} personname={movie.name} personnumber={movie.pnum} personemail={movie.email}  persondesignation={movie.desig2} persondept={movie.dept}/>
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

