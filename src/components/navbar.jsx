import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-sticky">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="logo.svg"
              alt="Delivo App"
              className="navbar-item w-24 md:w-28 lg:w-32"
            />
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item lg:text-lg hidden lg:block">Get the app</Link>
          <Link className="navbar-item lg:text-lg hidden lg:block">Contact</Link>
          <div className="dropdown-container">
            <div className="dropdown">
              <label className="navbar-item lg:text-lg hidden lg:flex cursor-pointer px-0" tabIndex="0">
                Account
              </label>
              <div className="dropdown-menu dropdown-menu-bottom-left">
                <Link to="/deleteaccount" className="dropdown-item text-sm">Delete Account</Link>
              </div>
            </div>
          </div>
          {/* menu button */}
          <input type="checkbox" id="drawer-left" className="drawer-toggle" />

          <label htmlFor="drawer-left" className="text-3xl flex lg:hidden"><HiOutlineMenu /></label>
          <label className="overlay" htmlFor="drawer-left"></label>
          <div className="drawer ">
            <div className="drawer-content pt-10 flex flex-col h-full">
              <div className="flex items-center justify-between -mt-8">
                <Link to="/">
                  <img
                    src="logo.svg"
                    alt="Delivo App"
                    className="navbar-item w-24 md:w-28 lg:w-32"
                  />
                </Link>
                <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
              </div>

              <nav className="menu p-2 rounded-md mt-8">
                <section className="menu-section">
                  <ul className="menu-items">
                    <Link to={"/"}>
                      <li className="menu-item text-lg font-semibold">
                        Home
                      </li>
                    </Link>

                    <Link>
                      <li className="menu-item text-lg font-semibold">
                        Contact
                      </li>
                    </Link>
                    <Link to="/deleteaccount">
                      <li className="menu-item text-lg font-semibold">
                        Delete Account
                      </li>
                    </Link>
                  </ul>
                </section>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
