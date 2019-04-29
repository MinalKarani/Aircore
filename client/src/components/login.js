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
            //password: '',
            //name: '',
            //hasAgreed: false,
            user:[]
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
        this.loadUser();
        //this.getUser();
    }       
    loadUser = () => {
        console.log("Ekhane")
    API.getUser()
        .then(res =>{
        console.log("***********data"+JSON.stringify(res.data));
        
        this.setState({ user: res.data});
        console.log("***********state data"+this.state.user);

        //console.log("*****");
        //console.log("response:  "+JSON.stringify(res.data[0]));
        //console.log("response:  "+JSON.stringify(res.data[1]));
        }
        )
        .catch(err => console.log(err));
        //console.log(this.state.homes);
    };
    
    render() {
        
            return (
                <Jumbotron>
                    <legend>Sign In</legend>
                    <form>
                    <div class="form-group">
                        
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
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
