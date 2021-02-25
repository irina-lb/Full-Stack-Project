//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
//icons import
import logo from "../styles/icons/cooking.png";
//router import
import { Link, withRouter } from "react-router-dom";
//states import
import { useState } from "react";
//function import
import { signout, isAuthenticated } from "../controllers/auth";

function NavBar({ history }) {
  //states
  const [isOpen, setIsOpen] = useState(false);

  //hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //show active page
  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return {
        color: "white",
        background: "#f5df4d",
        padding: " .2rem .5rem",
        borderRadius: "20px",
      };
    } else {
      return { color: "#464747" };
    }
  };

  return (
    <nav>
      <Link className="logoLink link" to="/">
        <div className="logoSection">
          <img src={logo} className="logo" />
          <p>HomeChef</p>
        </div>
      </Link>
      <FontAwesomeIcon
        onClick={toggleMenu}
        icon={isOpen ? faTimes : faBars}
        size="2x"
        className="hamburger"
      />
      <ul className={isOpen ? "open" : null}>
        <li onClick={toggleMenu}>
          <Link className="link" to="/" style={isActive(history, "/")}>
            About
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link className="link" to="/menu" style={isActive(history, "/menu")}>
            Menu
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link className="link" to="/faq" style={isActive(history, "/faq")}>
            FAQ
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link
            className="link"
            to="/contacts"
            style={isActive(history, "/contacts")}
          >
            Contacts
          </Link>
        </li>
        <li className="registration" onClick={toggleMenu}>
          {!isAuthenticated() && (
            <>
              <Link
                className="link"
                to="/login"
                style={isActive(history, "/login")}
              >
                Log In
              </Link>
              <Link
                className="link signUp"
                to="/signup"
                style={isActive(history, "/signup")}
              >
                Sign Up
              </Link>
            </>
          )}
          {isAuthenticated() && (
            <a
              className="link"
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              Sign Out
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavBar);
