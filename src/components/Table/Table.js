import React from "react";


function Table (props) {
    return <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col"><strong>Name:</strong></th>
        <th scope="col"><strong>Occupation:</strong></th>
        <th scope="col"><strong>Location:</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td><img alt={props.name} src={props.image} /></td>
        <td> {props.name}</td>
        <td> {props.occupation}</td>
        <td> {props.location}</td>
      </tr>
    </tbody>
  </table>;
  }
  
  export default Table;