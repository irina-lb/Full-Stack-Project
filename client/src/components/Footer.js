//routes import
import { Link } from "react-router-dom";
//icons
import facebook from "../styles/icons/facebook.png";
import instagram from "../styles/icons/instagram.png";
import twitter from "../styles/icons/twitter.png";
import mail from "../styles/icons/mail.png";
import youtube from "../styles/icons/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="linksSection">
        <h3>Navigate</h3>
        <ul>
          <li>
            <Link to="/menu" className="navigate">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/faq" className="navigate">
              Faq
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navigate">
              Delivery
            </Link>
          </li>
          <h3>Dashboards</h3>
          <li>
            <Link to="/user/dashboard" className="navigate">
              User dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard" className="navigate">
              Admin dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>Information</h3>
        <ul>
          <li>
            <Link to="/contacts" className="navigate">
              Work with us
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navigate">
              Write to blog
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navigate">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navigate">
              Advertisement
            </Link>
          </li>
        </ul>
      </div>
      <div className="contactsSection">
        <h3> Keep in touch</h3>
        <div className="socialMedia">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="Ups.." />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="Ups.." />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="Ups.." />
          </a>
          <a href="https://www.youtube.com">
            <img src={youtube} alt="Ups.." />
          </a>
          <a href="https://www.gmail.com">
            <img src={mail} alt="Ups.." />
          </a>
        </div>
        <ul>
          <li>
            Address: <span>29002,Av. de la Aurora, 25, Malaga,Spain</span>
          </li>
          <li>Email: chef@gmail.com</li>
          <li>Tel.number: +34 5689745</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
