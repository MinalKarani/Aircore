import React from "react";
import "./jumbotron.css"; 
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
