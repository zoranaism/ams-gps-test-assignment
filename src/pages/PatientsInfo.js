import React from 'react';
import PatientCard from '../components/PatientCard';

export default function PatientInfo() {
  return (
    <div>
      <h2 className="mb-5">Patient Database</h2>
      <div className="row">
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        {/* https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients */}
      </div>

    </div>
  );
}