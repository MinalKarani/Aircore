import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import { Input, TextArea, FormBtn } from "./Form";
import axios from "axios";
import FirstPage from "../pages/FirstPage";
import NoMatch from "../pages/NoMatch";
import Result from "../pages/Result";
import API from "../utils/API";
import SelectUSState from 'react-select-us-states';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        let target = e.target;
        //let value = target.type === 'checkbox' ? target.checked : target.value;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        this.saveUser();
    }
        saveUser = event => {
            console.log("SAVE USERRRRRRRRRR");  
            const dbUser = {
              name: this.state.name,
              password: this.state.password,
              email: this.state.email
            };
            console.log(dbUser)        
            API.saveUser(dbUser)            
              .then(res => {
                console.log("nandiniiiiii save user")
                console.log(res.status, res.statusText);        
              })
              .catch(err => {
                console.log(err);        
              })        
          };
    
    render() {
        
            return (
                <Jumbotron>

                    <legend>Registration</legend>
                    <form>
                        <div class="form-group">
                            <label for="full_name">Full Name</label>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name" type="text"
                                placeholder="Enter your full name (Required)"
                            />                           
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password" type="password"
                                placeholder="Enter your password (Required)"
                            />                           
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email" type="text"
                                placeholder="Enter your Email (Required)"
                            />                           
                        </div>                      

                        <FormBtn onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
                            Submit
                        </FormBtn>
                    </form>
                    
                </Jumbotron>
            );  
    }
}
export default SignUpForm;
