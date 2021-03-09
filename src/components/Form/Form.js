import React from "react";
import "./style.css";
// import FormButton from "../FormButton";





function Form(props) {
  return (
    <form>
      <input onChange={props.handleInputChange} value={props.value} type="email" className="form-control form-control-lg" placeholder="Search for employee by name">
      </input>

    </form>
  );
}

export default Form;
