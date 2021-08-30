import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper  navbar blue">
        <i className="large material-icons center">brightness_5</i>
        <h2 className="brand-logo center">Weather</h2>
      </div>
    </nav>
  );
};
export default Navbar;
