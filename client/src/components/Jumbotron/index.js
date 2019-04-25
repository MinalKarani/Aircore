import React from "react";
import "./jumbotron.css";
//import Carousel from "../Carousel"; 
function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: 120, textAlign: "left" }}
      className="jumbotron"
    >
      {children}
      
    </div>
    
  );
 
}

export default Jumbotron;
