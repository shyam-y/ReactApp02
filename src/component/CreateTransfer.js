import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import ReactTable from "react-table-6";

export default class CreateReceiveOnlyUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
                        "_links": 
                        {
                            "source": 
                            {
                                    "href": ""
                            },
                            "destination": 
                            {
                                    "href2": ""
                            }
                        },
                        "amount": 
                        {
                        "currency": "USD",
                        "value": ""
                        }
                    }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:9000/cTransfer', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
         console.log(error)
        })
    }
    render() {
        const { href, href2, value } = this.state
        return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input type="text"
                             name="href"
                             value={href}
                             onChange={this.changeHandler} 
                             placeholder = "source_href"
                             />
                        </div>
                        <div>
                            <input type="text" 
                            name="href2" 
                            value={href2} 
                            onChange={this.changeHandler} 
                            placeholder="Destination_href" />
                        </div>
                        <div>
                            <input type="text" 
                            name="value" 
                            value={value} 
                            onChange={this.changeHandler}
                            placeholder="value" />
                        </div>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
        )
    }
}

 