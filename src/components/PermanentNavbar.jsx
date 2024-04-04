import React,{useState,useContext} from 'react'
import { darkModeContext } from '../App';
import "../assets/Navbar.css"

const PermanentNavbar = () => {
  const [menuValue,setMenuValue] = useState(false);
  const displaySettings = () => {
    setMenuValue(!menuValue) 
  }
  const {darkMode,setDarkMode} = useContext(darkModeContext)
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkModeValue",darkMode)
    localStorage.setItem("darkModeValue2",!darkMode)
  }
  return (
    <div>
      <div className="navdetails bg-primary text-black">
        <div className="cdetails">
          <div className="pdetails">
            <div><i className="bi bi-envelope-open"></i></div>
            <div><p>principal@gecbh.ac.in</p></div>
          </div>
          <div className="codetails">
            <div><i className="bi bi-telephone-fill"></i></div>
            <div><p>+91&nbsp;-0471&nbsp;-2300484&nbsp;</p></div>
          </div>
        </div>
        <div className="hidden-listicon" onClick={displaySettings}>
          <i className="bi bi-list"></i>
        </div>
        <div className={menuValue?"navlinksactive":"navlinks"}>
            <div><a href="/admission">Admission&nbsp;2023-24</a></div>
            <div><a href="/tenders">Tenders</a></div>
        </div>
        <div className="navlinksselect">
          <button type="button" onClick={changeDarkMode} className={darkMode?"btn btn-dark text-white m-1":"btn bg-white text-primary m-1"}>Dark Mode{darkMode?<i className="ms-1 bi bi-toggle-on"></i>:<i className=" ms-1 bi bi-toggle-off"></i> }</button>
        </div>
      </div>

    </div>
  )
  }
export default PermanentNavbar
