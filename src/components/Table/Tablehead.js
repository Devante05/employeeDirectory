import React from "react";
import "./style.css";


function Tablehead(props) {
  return <thead>
    <tr>
      <th ></th>
      <th data-name="first"  onClick={props.sortBy}>first</th>
      <th data-name="last" onClick={props.sortBy}>last</th>
      <th data-name="email" onClick={props.sortBy}>email</th>
      <th data-name="location" onClick={props.sortBy}>country</th>
    </tr>
  </thead>
}

export default Tablehead;