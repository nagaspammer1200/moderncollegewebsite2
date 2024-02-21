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
      <div className="p-3 mb-3">
      {announcements.map((movie) => (
              <div className="aitemcontainer mb-5">
                <h6>{movie.desc}</h6>
                <p><a href={movie.link1}>#More Information</a>      <a href={movie.link1}>Click Me</a>      <a href={movie.link1}>Register</a></p>
              </div>
            ))}
      </div>
      <div>
        <div className='d-flex p-2'>
          <div><h5 className="border-bottom border-3 p-3  border-success">20 <br />JAN</h5></div>
          <div className="p-4">
              <h4>Graduation Ceremony 2023</h4>
              <p><i class="bi bi-calendar"></i>&emsp;Jan. 20, 2024 - Jan. 20, 2024&emsp;&emsp;<i class="bi bi-clock"></i>&emsp;10:30 a.m. - 5 p.m.&emsp;&emsp; 
              <i class="bi bi-geo-alt-fill"></i>&emsp;Tagore Theatre, Thiruvananthapuram</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-dark p-3">
          <h6>Important Links</h6>
        </div>
        <div className="p-3">
          <button type="button" className="btn btn-success m-1"><a href="">DEPARTMENTS</a></button>
          <button type="button" className="btn btn-success m-1"><a href="#">ADMISSIONS</a></button>
          <button type="button" className="btn btn-success m-1"><a href="http://www.gecbieee.org/">IEEE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://istegecb.in/">ISTE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://www.csigecbh.in/sb.html">CSI</a></button>
          <button type="button" className="btn btn-success m-1"><a href="https://drive.google.com/file/d/1KrkzevoakzhoZvKy0vktVgsfkpbnkg_-/view?usp=drivesdk">MANDATORY DISCLOSURE</a></button>
          <button type="button" className="btn btn-success m-1"><a href="">SOCIAL</a></button>
          <button type="button" className="btn btn-success m-1"><a href="">SPORTS</a></button>
          <button type="button" className="btn btn-success m-1"><a href="">TECH KNOW</a></button>
          <button type="button" className="btn btn-success m-1"><a href="">ARTS AND CULTURAL</a></button>
          <button type="button" className="btn btn-success m-1"><a href="">SCHOLARSHIPS</a></button>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsBar
