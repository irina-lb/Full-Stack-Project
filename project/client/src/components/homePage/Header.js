//img import
import cooking from "../../styles/img/cooking.png";
//router import
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <div className="title">
          <div className="hide">
            <h1>Let's cook</h1>
          </div>
          <div className="hide">
            <h1>
              something <span> yummy </span>
            </h1>
          </div>
          <div className="hide">
            <h1>together.</h1>
          </div>
        </div>
        <p>
          Step by step recipes and fresh pre-portioned ingredients right to your
          door.
        </p>
        <Link to="/menu" className="header-button">
          <button>Try now</button>
        </Link>
      </div>
      <img src={cooking} alt="Ups.." />
    </div>
  );
}

export default Header;
