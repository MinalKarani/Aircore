import React from "react";

function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        HomeMavens
      </a>
      <a className="navbar-brand" href="/about">
      Search Home
      </a>
      
      <a className="navbar-brand" href="/login">
        Login
      </a>
    </nav>
  );
}

export default Nav;
