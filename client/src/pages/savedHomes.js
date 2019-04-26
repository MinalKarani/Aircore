import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "../pages/savedHome.css"
class Homes extends Component {
  state = {    
    address:"",
    county:"",
    building_type:"",
    levels:"",
    finished_size:"",
    year_built:"",
    homes:[]
  };

  componentDidMount() {
    this.loadHomes();
  }

  loadHomes = () => {
    API.getHomes()
      .then(res =>{
        console.log("***********data"+JSON.stringify(res.data));
        
        this.setState({ homes: res.data});
        console.log("***********state data"+this.state.homes);

        //console.log("*****");
        //console.log("response:  "+JSON.stringify(res.data[0]));
        //console.log("response:  "+JSON.stringify(res.data[1]));
      }
      )
      .catch(err => console.log(err));
       //console.log(this.state.homes);
  };

  deleteHome = id => {
    API.deleteBook(id)
      .then(res => this.loadHomes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  render() {
    return (
      
            <Jumbotron>
                
              <h1>Saved Homes</h1>
              <br></br>
            {this.state.homes.length ? (
              
              <ul>
                {this.state.homes.map(home => (
                  <li>
                    
                      <strong>
                        {home.address}
                      </strong>
                      <strong>
                        {home.countuy}
                      </strong>
                      
                      
                      
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
           
        </Jumbotron>
    );
  }
}

export default Homes;
