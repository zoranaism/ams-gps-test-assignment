import React from "react";

export default function ContactInfo() {
    // let currentHour = new Date().getHours();
    // smaller than 
    let currentHour = 1;

    const workBoolean = (currentHour) => currentHour > 16 && currentHour < 8 ? "closed" : "open";
  
    // console.log("return this", workBoolean, currentHour)

  return <div>
    <p>We are: {workBoolean()}<br />
      To make an appointment<br />
      call: 020 555 55555</p>
  </div>

}