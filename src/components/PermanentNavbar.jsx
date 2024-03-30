import React,{useState} from 'react'
import "../assets/Navbar.css"

const PermanentNavbar = () => {
  const [menuValue,setMenuValue] = useState(false);
  const displaySettings = () => {
    setMenuValue(!menuValue) 
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
              <select className="form-select">
                <option selected>English</option>
                <option>Malaylam</option>
              </select>
        </div>
      </div>

    </div>
  )
  }
export default PermanentNavbar
