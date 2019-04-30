import React from "react";
import "./nav.css";


function clearStorage(){
  // remove
  console.log("clearing storage");
  localStorage.removeItem('userName');
    
     // remove all
  localStorage.clear();
}

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        HomeMavens
      </a>
      <a className="navbar-brand" href="/search">
        Search Home

      </a>
      <a className="navbar-brand" href="/save">
        Saved Homes

      </a>
      <a className="navbar-brand" href="/login">
        Login
      </a>

      <a className="navbar-brand" href="/" onClick={clearStorage}>
        Logout
      </a>
     

    </nav>
  );
}

export default Nav;
