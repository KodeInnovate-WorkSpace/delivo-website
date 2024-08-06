import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-sticky">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="logo.svg"
              alt="Delivo App"
              className="navbar-item"
              width={120}
            />
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/deleteaccount">
            <span className="navbar-item text-red-500">Delete Account</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
