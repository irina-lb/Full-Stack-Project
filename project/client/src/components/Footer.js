//routes import
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="linksSection">
        <h3>Navigate</h3>
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
          <li>
            <Link to="/faq">Delivery</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="dashboardSection">
        <h3>Dashboard</h3>
        <ul>
          <li>
            <Link to="/user/dashboard">User</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="contactsSection">
        <h3> Contact us</h3>
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
