import React from "react";
import "./style.css";


function Table (props) {
    return <table className="table">

    <tbody>
      <tr>
        
        <td className=".col-3" ><img alt={props.name} src={props.image} /></td>
        <td className=".col-3" > {props.name}</td>
        <td className=".col-3" > {props.occupation}</td>
        <td className=".col-3" > {props.location}</td>
      </tr>
    </tbody>
  </table>;
  }
  
  export default Table;