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

const Service = () => {

    const [rules,setRules] = useState([]);
    const rule = collection(db,"service");
  
  
  
    useEffect(()=>{
      const displayRules = async () => {
        try {
          const data1 = await getDocs(rule);
          const filteredData1 = data1.docs.map((doc)=> ({
            ...doc.data(), id: doc.id,
          }));
          console.log(filteredData1)
          setRules(filteredData1)
        }
       catch (err){
        console.log("error");
       }
      };
      displayRules();
    },[]);
  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-5 text-white"><h2>Service</h2></div>
          <div className="d-flex gap-1 personcontainer">
            <div>
                <div className="d-flex flex-column text-center w-60 rulecontainer">
                {rules.map((movie) => (
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

export default Service

