import React, { Component } from "react";import Form from "./components/Form/Form";
import Wrapper from "./components/Wrapper/Wrapper";
import Table from "./components/Table/Table";
import employees from "./employees.json";
import Tablehead from "./components/Tablehead/Tablehead";


class App extends Component {
  state = {
    employees
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


    sortNames = name => {
      const sortedEmployees = this.state.employees.sort((a,b) => {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      });
    

      console.log ([sortedEmployees])
}
      sortNamesRev = name => {
        const sortedEmployees = this.state.employees.sort((a,b) => {
          if (a.name > b.name) return -1;
          else if (a.name < b.name) return 1;
          return 0;
        });

        // const revSortedEmployees = sortedEmployees.reverse()

        // console.log ([revSortedEmployees])

      console.log ([sortedEmployees])


      }



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
  
  sortNamesRev= {this.sortNamesRev()}
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
