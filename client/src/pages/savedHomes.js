import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchResultContainer from "../components/SearchResultContainer";
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
      .then(res =>
        this.setState({ homes: res})
        
      )
      .catch(err => console.log(err));
       console.log(this.state.homes);
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

  saveHouse = event => {
    event.preventDefault();
    //if (this.state.title && this.state.author) {
      API.saveHouse({
      address:this.state.address,
      county:this.state.county,
      building_type:this.state.building_type,      
      finished_size:this.state.finished_size,
      year_built:this.state.year_built
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
   // }
  };

  render() {
    return (
      <Container fluid>
        <Row>          
          <Col size="md-12">
            <Jumbotron>
                <img src=""></img>
              <h1>Saved House</h1>
            </Jumbotron>
             
            
         
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homes;
