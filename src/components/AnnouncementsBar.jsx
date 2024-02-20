import React,{useState,useEffect} from 'react'
import { db } from '../pages/firebase.js'
import { getDocs,collection } from 'firebase/firestore'
import "../assets/Components.css"


const AnnouncementsBar = () => {
  const [announcements,setAnnouncements] = useState([]);
  const ann = collection(db,"announcements");



  useEffect(()=>{
    const displayannouncements = async () => {
      try {
        const data1 = await getDocs(ann);
        const filteredData1 = data1.docs.map((doc)=> ({
          ...doc.data(), id: doc.id,
        }));
        console.log(filteredData1)
        setAnnouncements(filteredData1)
      }
     catch (err){
      console.log("error");
     }
    };
    displayannouncements();
  },[]);
/*
*/


  return (
    <div className="acontainer">
      <div className="border-bottom border-3 p-3  border-success bg-secondary">
        <h6>Announcements</h6>
      </div>
      <div className="p-3">
      {announcements.map((movie) => (
              <div className="aitemcontainer mb-5">
                <h6>{movie.desc}</h6>
                <p><a href="{movie.link1}">#More Information</a>      <a href="{movie.link1}">Click Me</a>      <a href="{movie.link1}">Register</a></p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default AnnouncementsBar
