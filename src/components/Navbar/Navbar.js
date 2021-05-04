import React from "react";
import { Link } from "react-router-dom";

import NavItem from "./NavItem/NavItem";

const NavContact = () => (
  <li>
    <Link
      to="/contact_me"
      className="text-white bg-blue-400 rounded px-2 py-1 
                hover:bg-white hover:text-blue-400 ml-5"
    >
      Lets Talk!
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center lg:px-0 px-4">
        <nav className="flex lg:w-5/6 w-full justify-between items-center py-4 px-2 h-24 lg:text-3xl font-rajdhani">
          <div>
            <Link to="/" className="cursor-pointer font-bold text-gray-900">
              nayeem.
            </Link>
          </div>
          <div className="flex space-x-10 lg:text-2xl font-semibold">
            <ul className="flex space-x-5">
              <NavItem exact={true} to="/" text="home." />
              <NavItem to="/about" text="about." />
              <NavItem to="/projects" text="projects." />
            </ul>
            <ul>
              <NavContact />
            </ul>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
