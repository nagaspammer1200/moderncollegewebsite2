import React from 'react'
import "../assets/Components.css"

const PersonDetails = ({personimage,personname,persondepartment2,persondepartment,personemail,personnumber,persondesignation,personspec,persondesignationplace,personphd,personmtech,personbtech,personresearch,personprofile}) => {
  return (
    <div>
      <div className="detailscontainer">
        <div><img src={personimage} alt="" /></div>
        <div>
          <div className="ps-3">
            <h3>{personname}</h3>
            <p>{persondepartment}</p>
            <p>{persondepartment2}</p>
          </div>
          <div className="d-flex gap-3 pe-3 ps-3">
              <div><i className="bi bi-envelope-open"></i></div>
              <div><p>{personemail}</p></div>
          </div>
          <div>
            <div className="d-flex gap-3 pe-3 ps-3">
                <div><i className="bi bi-telephone-fill"></i></div>
                <div><p>{personnumber}</p></div>
            </div>
            <div className="d-flex text-start gap-3 ps-3 w-50">
                <div><i className="bi bi-cursor-fill"></i></div>
                <div><p>{persondesignation}<br/>{persondesignationplace}</p></div>
            </div>
            <div className="ps-3">
              <p>{personphd}</p>
              <p>{personmtech}</p>
              <p>{personbtech}</p>
            </div>
            <div className="ps-3">
              <p>{personspec}</p>
            </div>
            <div className="ps-3">
              <p>{personresearch}</p>
            </div>
            <div className="ps-3">
              <button type="button" className="btn btn-success"><a href={personprofile}>Personal Profile</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonDetails
