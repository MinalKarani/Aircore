import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        AirCore
      </a>
      <a className="navbar-brand" href="/about">
        About
      </a>
      <a className="navbar-brand" href="/">
        Login
      </a>
    </nav>
  );
}

export default Nav;
