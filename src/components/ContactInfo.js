import React from "react";

export default function ContactInfo() {
  let currentHour = new Date().getHours();

  const openClosed = currentHour > 16 || currentHour < 8 ? "closed" : "open";
  
  return <div className="text-center justify-content-md-center">
    <p>We are: {openClosed}<br />
      To make an appointment<br />
      call: 020 555 55555</p>
  </div>

}