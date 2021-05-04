import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <>
      <li className="text-white">
        <NavLink
          to={props.to}
          exact={props.exact}
          activeClassName="bg-blue-100"
          className="px-2 py-1 text-blue-400 bg-white
          hover:bg-blue-400 hover:text-white rounded-full"
        >
          {props.text}
        </NavLink>
      </li>
    </>
  );
};

export default NavItem;
