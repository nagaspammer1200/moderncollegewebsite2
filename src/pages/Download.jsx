import React,{useState,useEffect} from 'react'
import { db } from '../pages/firebase.js'
import { getDocs,collection } from 'firebase/firestore'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter.jsx'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Download = () => {

    const [download,setDownload] = useState([]);
    const dload = collection(db,"downloads");
  
  
  
    useEffect(()=>{
      const displayDownloads = async () => {
        try {
          const data1 = await getDocs(dload);
          const filteredData1 = data1.docs.map((doc)=> ({
            ...doc.data(), id: doc.id,
          }));
          console.log(filteredData1)
          setDownload(filteredData1)
        }
       catch (err){
        console.log("error");
       }
      };
      displayDownloads();
    },[]);
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>News and Announcements</h2></div>
          <div className="personcontainer4">
            <div>
                <div className="rulecontainer4">
                {download.map((movie) => (
                    <div className="mb-5">
                        <div className="text-primary"><a href={movie.link}><h6>{movie.title}</h6></a></div>
                    </div>
                    ))}
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

export default Download

