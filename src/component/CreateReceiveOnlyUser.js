import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import ReactTable from "react-table-6";

export default class CreateReceiveOnlyUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            type : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:9000/cROUser', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
         console.log(error)
        })
    }
    render() {
        const { firstName, lastName, email, type } = this.state
        return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input type="text"
                             name="firstName"
                             value={firstName}
                             onChange={this.changeHandler} 
                             placeholder = "firstName"
                             />
                        </div>
                        <div>
                            <input type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={this.changeHandler} 
                            placeholder="lastName" />
                        </div>
                        <div>
                            <input type="text" 
                            name="email" 
                            value={email} 
                            onChange={this.changeHandler}
                            placeholder="email" />
                        </div>
                        <div>
                            <input type="text" 
                            name="type"
                            value={type}
                            onChange={this.changeHandler} 
                            placeholder="type"
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        )
    }
}

 