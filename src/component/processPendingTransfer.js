import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ReactTable from "react-table-6";


import 'react-table-6/react-table.css'

export default class Customers extends Component {
constructor(props) {
  super(props);
  this.state = { apiResponse: "", custRes: [] };
  // this.state = { custres: ""};
}

callAPI() {
   fetch("http://35.154.102.119:9000/testAPI")
       .then(res => res.text())
       .then(res => this.setState({ apiResponse: res }));
}

customersAPI() {
  fetch("http://35.154.102.119:9000/pPBT")
      .then(res => res.json())
      .then(res => this.setState({ custRes: res}));
}

componentWillMount() {
  this.callAPI();
  this.customersAPI();
}

render(){
  // var customers = this.state.custRes

  const columns = [
    {
      Header: "Total",
      accessor: "total"
    }
    
    
  ]


  return (

    <ReactTable 
    columns={columns}
    data={this.setState.custRes}
    filterable
    >

    </ReactTable>
      )
  }
}

 



//         <div>
//           <table>
//           <tbody>
//             {customers.map((cust, index) => {
//             return (
//              <div>
//                             <tr key = {index}>                       
//                             <td>{cust.id}</td>
//                         <td>{cust.firstName}</td>
//                         </tr>
// </div>
//             )})}

//                         </tbody>
//                         </table>
                  
//         </div>
