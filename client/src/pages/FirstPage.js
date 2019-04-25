import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchResultContainer from "../components/SearchResultContainer";
//import Carousel from "../components/Carousel";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 style={{ textAlign: "center"}}>Welcome to Homemavens !</h1>
              
            </Jumbotron>           
          </Col>          
        </Row>
      </Container>
    );
  }
}

export default Books;
