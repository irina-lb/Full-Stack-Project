//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
//icons import
import logo from "../styles/icons/cooking.png";
//router import
import { NavLink, withRouter } from "react-router-dom";
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

  //take user from jwt
  const { user } = isAuthenticated();
  //show active page
  const location = history.location.pathname;

  const isActive = (path) => {
    if (location === path) {
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
  const subLink = () => {
    if (
      location === "/user/dashboard/cart" ||
      location === "/user/dashboard/info" ||
      location === "/user/dashboard"
    ) {
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
      <NavLink className="logoLink link" to="/">
        <div className="logoSection">
          <img src={logo} className="logo" />
          <p>HomeChef</p>
        </div>
      </NavLink>
      <FontAwesomeIcon
        onClick={toggleMenu}
        icon={isOpen ? faTimes : faBars}
        size="2x"
        className="hamburger"
      />
      <ul className={isOpen ? "open" : null}>
        <li onClick={toggleMenu}>
          <NavLink className="link" to="/" style={isActive("/")}>
            About
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink className="link" to="/menu" style={isActive("/menu")}>
            Menu
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink className="link" to="/faq" style={isActive("/faq")}>
            FAQ
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink
            className="link"
            to="/contacts"
            style={isActive("/contacts")}
          >
            Contacts
          </NavLink>
        </li>
        <li className="registration" onClick={toggleMenu}>
          {!user && (
            <>
              <NavLink className="link" to="/login" style={isActive("/login")}>
                Log In
              </NavLink>
              <NavLink
                className="link signUp"
                to="/signup"
                style={isActive("/signup")}
              >
                Sign Up
              </NavLink>
            </>
          )}
          {user && user.role === 0 && (
            <>
              <NavLink
                className="link"
                to="/user/dashboard"
                style={subLink(history)}
              >
                Profile
              </NavLink>
            </>
          )}
          {user && user.role === 1 && (
            <>
              <NavLink className="link" to="/admin" style={isActive("/admin")}>
                Profile
              </NavLink>
            </>
          )}
          {user && (
            <>
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
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavBar);
