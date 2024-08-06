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

        <div class="dropdown">
          <label class="btn btn-solid-success mx-2" tabindex="0">
            Menu
          </label>
          <div class="dropdown-menu dropdown-menu-left-bottom">
            <a class="dropdown-item text-sm">About Us</a>
            <div className="dropdown-divider" role="separator"></div>
            <a tabindex="-1" class="dropdown-item text-sm">
              Contact
            </a>

            <Link tabIndex="-1" to="/deleteaccount">
              <span className="dropdown-item text-sm text-red-500">
                Delete Account
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
