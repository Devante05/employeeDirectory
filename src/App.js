import React, { Component } from "react"; import Form from "./components/Form/Form";
import Wrapper from "./components/Wrapper/Wrapper";
import Table from "./components/Table";
import API from "./utils/API"


class App extends Component {
  state = {
    sortDirecttion: "",
    employees: [],
    filteredEmployees: [],
    // results: [],
    search: ""
  };

  componentDidMount() {
    API.getRandomSet()
      .then(res => {
        const mapped = res.data.results.map(r => ({
          img: r.picture.thumbnail,
          first: r.name.first,
          last: r.name.last,
          email: r.email,
          location: r.location.country
          

        }))
        

        this.setState({ employees: mapped, filteredEmployees: mapped })
      })
      .catch(err => console.log(err));

    // fetch("https://randomuser.me/api/?results=40")
    //   .then(res => res.json())
    //   .then(res => console.log(res.results))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    let searchResult = event.target.value.toLowerCase();
    

    let newEmps = this.state.employees.filter(mapped => `${mapped.first.toLowerCase()} ${mapped.last.toLowerCase()}`.includes(searchResult))

    this.setState({
      search: searchResult,
      employees: newEmps
    })
  console.log(newEmps)
  };



  


  sortBy = e => {
    const col = e.target.getAttribute("data-name")
    const dir = this.state.sortDirecttion === "asc" ? "desc" : "asc"

    let sorted;
    if (dir === "desc") sorted = this.state.employees.sort((a, b) => a[col] > b[col] ? 1 : -1)
    else sorted = this.state.employees.sort((a, b) => a[col] < b[col] ? 1 : -1)

    

    this.setState({
      sortDirecttion: dir,
      employees: sorted
    })
  }

  // filterNames = name => {
  //   const filtedEmployees = this.state.employees.filter(employees => employees)

  // }

  render() {
    return (

      <Wrapper>

        <Form
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}

        />

        {/* Table({employees:this.state.employees}) */}
        <Table 
        handleInputChange={this.handleInputChange} search ={this.state.employees} 

        sortBy={this.sortBy} employees={this.state.filteredEmployees} />

      </Wrapper>
      
    );
  }
}

export default App;



// function MyApp() {
//   const state = {
//     count: 0
//   }

//   const node = document.createElement("div")
//   const h1 = document.createElement("h1")
//   h1.textContent = "Welcome!!!"



//   const btn = document.createElement("button")
//   btn.textContent = "Click"
//   btn.onclick = () => state.count++

//   node.appendChild(h1)
//   node.appendChild(CountDiv({ count: state.count }))
//   node.appendChild(btn)
//   return node
// }

// function CountDiv(props) {
//   const countDiv = document.createElement("div")
//   countDiv.textContent = props.count

//   return countDiv
// }


// function _MyApp() {
//   const state = {
//     count: 0
//   }
//   return <div>
//     <h1>Welcome!!!</h1>
//     <_CountDiv count={state.count} />
//     <button onclick={() => state.count++}>Click</button>
//   </div>
// }

// function _CountDiv(props) {
//   return <div>{props.count}</div>
// }