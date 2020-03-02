import React, { useState, useEffect } from "react";
import ContactInfo from '../components/ContactInfo';
import DoctorCard from '../components/DoctorCard';
import axios from 'axios';

export default function DutyScheduleInfo(props) {
  const [doctors, set_requireDoctors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchDoctors =`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      const response = await axios.get(fetchDoctors)
      set_requireDoctors(response.data)
    }
    fetchData();
  }, [props.id]);

  return (
    <div>
      
      <h2 className="mb-5">Who is on duty?</h2>
      
      <table className="table mb-5">

        <thead>
          <tr>
            <th scope="col">Doctor</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>

        <tbody>
        {doctors.map(item => (
          <DoctorCard 
            key={item.id}
            doctor={item.doctor}
            onDuty={item.onDuty}
          />
        ))}
        </tbody>

      </table>

      <ContactInfo />

    </div>
  );
}