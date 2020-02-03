import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

export default class CreateReceiveOnlyUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountNumber : '',
            routingNumber : '',
            bankAccountType : '',
            name : ''
        };
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = e => {
        const id = "1cd835e8-4a88-4196-8d5f-23853351cab2";
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:9000/addBRO/'+id, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
         console.log(error)
        })
    }
    render() {
        const { accountNumber, routingNumber, bankAccountType, name } = this.state
        return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input type="text"
                             name="accountNumber"
                             value={accountNumber}
                             onChange={this.changeHandler} 
                             placeholder = "accountNumber"
                             />
                        </div>
                        <div>
                            <input type="text" 
                            name="routingNumber" 
                            value={routingNumber} 
                            onChange={this.changeHandler} 
                            placeholder="routingNumber" />
                        </div>
                        <div>
                            <input type="text" 
                            name="bankAccountType" 
                            value={bankAccountType} 
                            onChange={this.changeHandler}
                            placeholder="bankAccountType" />
                        </div>
                        <div>
                            <input type="text" 
                            name="name"
                            value={name}
                            onChange={this.changeHandler} 
                            placeholder="name"
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        )
    }
}

 