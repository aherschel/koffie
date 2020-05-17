import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

const signOut = async () => {
  await Auth.signOut();
};

/**
 * Component responsible for rendering the nav bar on all app pages.
 */
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Koffie</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>

        <button
          onClick={signOut}
          className="btn btn-outline-warning"
          type="submit"
        >
          SignOut
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
