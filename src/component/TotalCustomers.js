//Create Total Customers Data here

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import 'react-table-6/react-table.css'

export class TotalCustomers extends Component {
constructor(props) {
  super(props);
  this.state = { apiResponse: "", custRes: [] };
  // this.state = { custres: ""};
}

callAPI() {
   fetch("http://localhost:9000/testAPI")
       .then(res => res.text())
       .then(res => this.setState({ apiResponse: res }));
}

totalCustomersAPI() {
  fetch("http://localhost:9000/totalCustomers")
      .then(res => res.text())
      .then(res => this.setState({ custRes: res}));
}

componentWillMount() {
  this.callAPI();
  this.totalCustomersAPI();
}

render(){
  var customers = this.state.custRes;

  return (

    
           
<p>{customers}</p>

      
  )}}
  

 



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
        