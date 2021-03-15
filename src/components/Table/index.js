import React from "react";
import THead from "./Tablehead"
import TBody from "./TableBody"
import "./style.css";

// props = {employees: employee[]}
function Table(props) {
  return <table className= "table">
    <THead sortBy={props.sortBy} />
    <TBody 
    employees={props.employees || props.newEmp} />
  </table>;
}

export default Table;