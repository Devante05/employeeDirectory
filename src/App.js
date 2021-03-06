import React, { Component } from "react";import Form from "./components/Form/Form";
import Wrapper from "./components/Wrapper/Wrapper";
import Table from "./components/Table/Table";
import employees from "./employees.json";
import Tablehead from "./components/Tablehead/Tablehead";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };


    sortNames = name => {
      const sortedEmployees = this.state.employees.sort(employees.name)

      console.log (sortedEmployees)
}

// sortNamesRev = name => {
//   const sortedEmployees = this.state.employees.sort(employees.name).reverse();

//   console.log (sortedEmployees)
// }

  // filterNames = name => {
  //   const filteredName = this.state.employees.filter(employees.map(name =>{

      
  //   }))

  // }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    <Wrapper>
      
      <Form/>
      <Tablehead/>
  {this.state.employees.map(employee => (
  <Table
  
  sortNames= {this.sortNames}
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
