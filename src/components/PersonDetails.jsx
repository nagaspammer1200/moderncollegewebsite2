import React,{useContext,useEffect} from 'react'
import { darkModeContext } from '../App';
import "../assets/Components.css"

const PersonDetails = ({personimage,personname,personemail,personnumber,persondesignation,persondept}) => {
  const {darkMode,setDarkMode} = useContext(darkModeContext);
  useEffect(() => {
    const darkModeValue2 = localStorage.getItem("darkModeValue");
    setDarkMode(darkModeValue2)
  }, []);
  return (
    <div>
      <div className={darkMode?"detailscontainer border-bottom border-1 border-white":"detailscontainer border-bottom border-1 border-danger"}>
        <div className="me-5"><img src={personimage} alt="profileimage" /></div>
        <div>
          <div className={darkMode?"ps-3 text-success ncontainer":"ncontainer ps-3"}>
            <h3><b>{personname}</b></h3>
          </div>
          <div className="ps-3">
            <p>{persondept}</p>
          </div>
          <div className="d-flex gap-3 p-3 rounded emailcontainer shadow-sm">
              <div><i className="bi bi-envelope-open"></i></div>
              <div><p><i>{personemail}</i></p></div>
          </div>
          <div>
            <div className="d-flex gap-3 p-3 tcontainer rounded shadow-sm">
                <div><i className="bi bi-telephone-fill"></i></div>
                <div><p><b>{personnumber}</b></p></div>
            </div>
            <div className="d-flex text-start gap-3 p-3 dcontainer rounded shadow-sm mb-5">
                <div><i className="bi bi-cursor-fill"></i></div>
                <div><p>{persondesignation}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonDetails
