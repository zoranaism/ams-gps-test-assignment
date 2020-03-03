import React, { useState, useEffect } from "react";
import ContactInfo from '../components/ContactInfo';
import DoctorCard from '../components/DoctorCard';
import axios from 'axios';
import Timeout from "await-timeout";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 import Loader from 'react-loader-spinner'

export default function DutyScheduleInfo(props) {
  const [doctors, set_requireDoctors] = useState([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const fetchDoctors =`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      const response = await axios.get(fetchDoctors)
      // KEPT TIMER FOR TESTING PURPOSES 
      // await Timeout.set(4000);
      set_requireDoctors(response.data);
      const loaded = false;
      setLoader(loaded);
    }
    fetchData();
  }, [props.id]);

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-8">
      
      
        <h2 className="mb-5 text-center">Who is on duty?</h2><br />

      
        <table className="table table-bordered">

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
            
        <Loader visible={loader} className="row justify-content-md-center" type="ThreeDots" color="#somecolor" />

      <ContactInfo />
      </div>
    </div>
  );
}