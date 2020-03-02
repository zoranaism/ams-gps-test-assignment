import React from 'react';
import { Link } from "react-router-dom";
import ContactInfo from '../components/ContactInfo';

export default function HomePage() {
  return (
    <div className="justify-content-md-center">
      <h2 className="mb-5 text-center">Welcome to AMS GPs</h2>
      <ContactInfo />
      <div className="text-center">
        <Link to="/duty">Who is on Duty?</Link><br />
        <Link to="/signup">I am a new patient</Link>
      </div>
    </div>
  );
}