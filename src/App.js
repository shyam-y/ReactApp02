import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './component/NavigationBar';
import Sidebar from './component/Sidebar';

import customer from "./component/Customers";
import addbankRO from "./component/AddBanktoRO";
import pPBT from "./component/processPendingTransfer";
import CreateReceiveOnlyUser from "./component/CreateReceiveOnlyUser";
import Createtransfer from "./component/CreateTransfer";

import './App.css';

// const components = {
//     customer : customer
// }
export default class App extends Component {

    // constructor(props){
    //     super(props);
    // };
    render(){
        
        return(
        
        <React.Fragment>
        <Router>
            <div>
            <NavigationBar />
            <Sidebar />

                <NavLink to="/customers" 
                         exact strict 
                         activeStyle={{color:'green', marginLeft:400, marginTop:300}}
                         style={{marginRight:100}}>Customers</NavLink>
                <NavLink to="/addbanktoro" 
                         exact strict 
                         activeStyle={{color:'green'}}
                         style={{marginRight:100}}>Add Bank to RO</NavLink>
                <NavLink to="/processPendingTransfer" 
                         exact strict 
                         activeStyle={{color:'green'}}
                         style={{marginRight:100}}>processPendingTransfer</NavLink>
                <NavLink to="/CreateReceiveOnlyUser" 
                         exact strict 
                         activeStyle={{color:'green'}}
                         style={{marginRight:100}}>CreateReceiveOnlyUser</NavLink>
                <NavLink to="/Createtransfer" 
                         exact strict 
                         activeStyle={{color:'green'}}
                         >Createtransfer</NavLink>

                {/* <button onClick={this.logout}><b>processPendingTransfer</b></button> */}

                <br/><br/>

                <Route path="/customers" component={customer}/>
                <Route path="/addbanktoro" component={addbankRO}/>
                <Route path="/processPendingTransfer" component={pPBT}/>
                <Route path="/CreateReceiveOnlyUser" component={CreateReceiveOnlyUser}/>
                <Route path="/Createtransfer" component={Createtransfer}/>


            </div>
        </Router>
        </React.Fragment>
        );
    }

}











// constructor(props) {
//   super(props);
//   // this.state = { apiResponse: "", custRes: [] };
//   // this.state = { custres: ""};
// }

// callAPI() {
//    fetch("http://34.76.122.92:9000/testAPI")
//        .then(res => res.text())
//        .then(res => this.setState({ apiResponse: res }));
// }

// customersAPI() {
//   fetch("http://34.76.122.92:9000/customers")
//       .then(res => res.json())
//       .then(res => this.setState({ custRes: res}));
// }

// componentWillMount() {
//   this.callAPI();
//   this.customersAPI();
// }

// render(){
//   // var customers = this.state.custRes

//   const columns = [
//     {
      
//       columns: [
//         {
//           id: "fullName",
//           Header: "Full Name",
//           accessor: row => `${row.firstName} ${row.lastName}`,
//           filterMethod: (filter, row) =>
//             row._original.firstName.startsWith(filter.value) ||
//             row._original.lastName.startsWith(filter.value)
//         }
//       ]
//     },
//     {
//       Header: "Email",
//       accessor: "email"
//     },
//     {
//       Header: "Status",
//       accessor: "status"
//     },
//     {
//       Header: "Created",
//       accessor: "created"
//     }
    
    
//   ]
//   return (

//     <ReactTable 
//     columns={columns}
//     data={this.state.custRes}
//     filterable
//     >



//     </ReactTable>




//       )
//   }












// //         <div>
// //           <table>
// //           <tbody>
// //             {customers.map((cust, index) => {
// //             return (
// //              <div>
// //                             <tr key = {index}>                       
// //                             <td>{cust.id}</td>
// //                         <td>{cust.firstName}</td>
// //                         </tr>
// // </div>
// //             )})}

// //                         </tbody>
// //                         </table>
                  
// //         </div>
