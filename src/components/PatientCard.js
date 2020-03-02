import React from 'react';

export default function PatientCard() {
  return  <div className="col-md-4">

  <div className="card mb-4">

    <div className="card-body">
      <h3 className="card-title mt-3">Name: Zorana</h3>
      <p className="card-text">ID: 782472384<br />
      Date of birth: 11.11.1988.</p>
    </div>
  
    <div className="card-footer">
      <button>Show details</button>
    </div>

  </div>
  </div>
}