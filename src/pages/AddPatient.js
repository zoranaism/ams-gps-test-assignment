import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddPatient() {
  const startDate = new Date()

  const [addPatient, setPatient] = useState({});
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [optionsState, setGender] = useState();
  const [birthDate, setBirthDate] = useState(startDate);


  function submitPatient(event) {
    event.preventDefault();
    const newPatient = [{name, lastName, email, phone, optionsState, birthDate}]
    setPatient(newPatient);
    console.log("THIS IS THE FORM RESULT: ", newPatient);
    window.confirm('Your form has been sucesfully submited');
  }

  const handleChange = date => {
    const newDate = date;
    setBirthDate(newDate);
  };

  return (
    <div>
      <h2 className="mb-5 text-center">Patient signup</h2> 

      <div className="row justify-content-md-center">
        <form className="col-md-7">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Name</label>
            <div className="col-sm-8">
              <input
                onChange={event => {
                  setName(event.target.value);
                }}
                defaultValue={name}
                type="text"
                className="form-control"
                placeholder="Write your name?"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Last name</label>
            <div className="col-sm-8">
              <input
                onChange={event => {
                  setLastName(event.target.value);
                }}
                defaultValue={lastName}
                type="text"
                className="form-control"
                placeholder="Write your last name"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input
                onChange={event => {
                  setEmail(event.target.value);
                }}
                defaultValue={email}
                type="email"
                className="form-control"
                placeholder="Write your email"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Phone</label>
            <div className="col-sm-8">
              <input
                onChange={event => {
                  setPhone(event.target.value);
                }}
                defaultValue={phone}
                type="number"
                className="form-control"
                placeholder="Write your phone"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Gender</label>
            <div className="col-sm-8">
              <select defaultValue={optionsState}
                onChange={event => {
                  setGender(event.target.value);
                }}
                className="form-control"
              >
                <option defaultValue="m">Male</option>
                <option defaultValue="f">Female</option>
                <option defaultValue="n">None of the above</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Date of birth</label>
            <div className="input-group date col-sm-8">
              <DatePicker
                className="form-control"
                selected={birthDate}
                onChange={handleChange} 
                dateFormat="P"
              />              
            </div>
          </div>
          
          <div className="justify-content-md-center row mt-5">

          <input onClick={submitPatient} className="btn btn-primary mb-5" defaultValue="SUBMIT" />
            
          </div>

        </form>
        
      </div>
    </div>
  );
}
