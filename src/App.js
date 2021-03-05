import React, { Component } from "react";import Form from "./components/Form/Form";
import Wrapper from "./components/Wrapper/Wrapper";
import Table from "./components/Table/Table";
import employees from "./employees.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    <Wrapper>
      <Form/>
  {this.state.empolyees.map(employee => (
  <Table
  id={employee.id}
  key={employee.id}
  name={employee.name}
  image={employee.image}
  occupation={employee.occupation}
  location={employee.location}
/>

   ))}

</Wrapper>
    );
  }
}

export default App;
