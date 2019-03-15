import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <h1>Star DB</h1>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/people" className="nav-link link">
            People
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/planets" className="nav-link link">
            Planets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/starships" className="nav-link link">
            Starships
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
