//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
//icons import
import logo from "../styles/icons/cooking.png";
import cart from "../styles/icons/cart.png";
import users from "../styles/icons/user.png";
//router import
import { NavLink, useLocation } from "react-router-dom";
//states import
import { useState } from "react";
//function import
import { isAuthenticated } from "../controllers/auth";
import { productsTotal } from "../controllers/cart";

function NavBar() {
  //states
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  //change navbar color
  const changeColor = () => {
    if (window.scrollY >= 55) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //take user from jwt
  const { user } = isAuthenticated();

  //active page
  const location = useLocation().pathname;

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

  return (
    <nav className={sticky ? "activeNavBar" : ""}>
      <NavLink className="logoLink link" to="/">
        <div className="logoSection">
          <img src={logo} className="logo" />
          <p>CookAsChef</p>
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
            Home
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink className="link" to="/menu" style={isActive("/menu")}>
            Menu
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink className="link" to="/blog" style={isActive("/blog")}>
            Blog
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
        <li onClick={toggleMenu}>
          <NavLink className="link" to="/faq" style={isActive("/faq")}>
            FAQ
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
            <div className="userIcons">
              <NavLink to="/user/dashboard" className="userCartLink">
                <img className="icon" src={users} alt="Ups..." />
              </NavLink>
              <NavLink to="/user/shoppingCart" className="userCartLink">
                <img className="icon" src={cart} alt="Ups..." />
                <sup>{productsTotal()} </sup>
              </NavLink>
            </div>
          )}
          {user && user.role === 1 && (
            <>
              <NavLink className="link" to="/admin" style={isActive("/admin")}>
                Profile
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
