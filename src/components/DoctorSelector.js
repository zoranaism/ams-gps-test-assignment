import React from "react";

export default function DoctorSelector(props) {
  return <option value={props.id}>{props.doctor}</option>
}