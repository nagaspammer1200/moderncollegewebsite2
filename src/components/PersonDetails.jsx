import React from 'react'
import "../assets/Components.css"

const PersonDetails = ({personimage,personname,personemail,personnumber,persondesignation,persondept}) => {
  return (
    <div>
      <div className="detailscontainer">
        <div><img src={personimage} alt="profileimage" /></div>
        <div>
          <div className="ps-3">
            <h3>{personname}</h3>
          </div>
          <div className="ps-3">
            <p>{persondept}</p>
          </div>
          <div className="d-flex gap-3 p-3 rounded shadow-sm">
              <div><i className="bi bi-envelope-open"></i></div>
              <div><p>{personemail}</p></div>
          </div>
          <div>
            <div className="d-flex gap-3 p-3 rounded shadow-sm">
                <div><i className="bi bi-telephone-fill"></i></div>
                <div><p>{personnumber}</p></div>
            </div>
            <div className="d-flex text-start gap-3 p-3 rounded shadow-sm">
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
