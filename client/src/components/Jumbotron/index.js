import React from "react";
import "./jumbotron.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


//import Carousel from "../Carousel"; 
function Jumbotron({ children }) {
  return (
    /*<div
      style={{ clear: "both", paddingTop: 120, textAlign: "left" }}
      className="jumbotron"
    >
      {children}
      
    </div>*/

    <Carousel autoPlay>
    <div>
      <img src="car1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="car2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="car3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="car4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="car5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src="car6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src="car7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img src="car8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img src="car9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img src="car10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img src="car11.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img src="car12.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img src="car13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img src="car14.jpg" />
      <p className="legend">Legend 14</p>
    </div>
  </Carousel>
    
  );
 
}

export default Jumbotron;


