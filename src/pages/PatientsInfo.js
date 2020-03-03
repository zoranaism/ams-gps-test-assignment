import React, { useState, useEffect } from "react";
import PatientCard from '../components/PatientCard';
import DoctorSelector from '../components/DoctorSelector';
import axios from 'axios';

export default function PatientInfo(props) {
  const [patients, set_requirePatients] = useState([]);
  const [optionsState, setDoctor] = useState(0);
  const [doctors, set_requireDoctors] = useState([{doctor : "loading"}]);

  useEffect(() => {
    async function fetchData() {
      const fetchPatients =`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      const responsePatients = await axios.get(fetchPatients)
      set_requirePatients(responsePatients.data)
      const fetchDoctors =`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      const responseDoctors = await axios.get(fetchDoctors)
      set_requireDoctors(responseDoctors.data)
    }
    fetchData();
  }, []);

  function compare (a,b) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  }

  const filteredPatients = patients.filter(patient => patient.doctorId === optionsState || optionsState === 0);
  
  const sortedPatients = [...filteredPatients].sort(compare);

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-5">

      <h2 className="mb-5 text-center">Patient Database</h2>
      
      <div className="form-group row">
      <label className="col-sm-3 col-form-label">Doctors</label>
        <div className="col-sm-9">
        {}
        <select className="form-control" 
        value={optionsState}
        onChange={event => {
          setDoctor(parseInt(event.target.value));
        }}
        >
          <option value="0">All</option>
          {doctors.map(item => (
            <DoctorSelector
              key={item.id}
              doctor={item.doctor}
              id={item.id}
            />
          ))}
        </select>     
        </div>
      </div>
      

      {sortedPatients.map(patient => (
          <div>
        <PatientCard 
        key={patient.id}
        doctorId={patient.doctorId}
        firstName={patient.firstName} 
        id={patient.id} 
        lastName={patient.lastName} 
        dateOfBirth={patient.dateOfBirth}
        email={patient.email}
        phoneNumber={patient.phoneNumber}
        gender={patient.gender}
        prescriptions={patient.prescriptions}
        />
          </div>

        ))}


         </div>
    </div>
  );
}