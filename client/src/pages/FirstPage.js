import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";

import { Col, Row, Container } from "../components/Grid";


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
