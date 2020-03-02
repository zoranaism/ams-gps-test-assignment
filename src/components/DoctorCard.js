import React from "react";

export default function DoctorCard(props) {
  return  <tr>
    <th>
      {props.doctor}
    </th>
    <td>
      {props.onDuty ? "On Duty" : "Not on Duty"}
    </td>
  </tr>

}