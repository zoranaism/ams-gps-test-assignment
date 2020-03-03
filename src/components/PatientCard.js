import React, { useState } from 'react';
import ToggleDisplay from 'react-toggle-display';

export default function PatientCard(props) {
  const [toggleContent, setToggleContent] = useState({show: false});

  const handleClick = () => {
    setToggleContent({show : !toggleContent.show});
  };

  return  <div className="card mb-4">

    <div className="card-body">
      <h3 className="card-title mt-3">Name: {props.firstName + " " + props.lastName} </h3>
      <p className="card-text">id: {props.id}<br />
      Date of birth: {props.dateOfBirth}</p>

    </div>
  
    <ToggleDisplay tag="section" if={toggleContent.show}> 
      <div className="card-body">
        <p className="card-text">email: {props.email}<br />
        phoneNumber: {props.phoneNumber}<br />
        gender: {props.gender}</p>    
      </div>
      <ul className="list-group list-group-flush">
        {props.prescriptions.map(prescription => {
          return <li className="list-group-item">{prescription}</li>;
        })}
      </ul>
    </ToggleDisplay>
      <div className="card-body justify-content-md-center row">
          <button className="btn btn-primary" onClick={ () => handleClick() }>Show details</button>
      </div>

  </div>

}