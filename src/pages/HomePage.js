import React from 'react';
import { Link } from "react-router-dom";
import ContactInfo from '../components/ContactInfo';

export default function HomePage() {
  return (
    <div>
      <h2 className="mb-5">Welcome to AMS GPs</h2>
      <ContactInfo />
      <Link to="/duty">Who is on Duty?</Link><br />
      <Link to="/signup">I am a new patient</Link>
    </div>
  );
}