//functions import
import { isAuthenticated } from "../controllers/auth";
//router import
import { Link } from "react-router-dom";

function UserDashboard({ history }) {
  //show active page
  const location = history.location.pathname;

  const isActive = (path) => {
    if (location === path) {
      return {
        color: "#ffc30b",
      };
    } else {
      return { color: "#464747" };
    }
  };

  //take user from jwt
  const { user } = isAuthenticated();
  return (
    <div className="userDashboard">
      <div className="user">
        <h2>
          Hello
          <span>
            {user.firstName} {user.lastName}
          </span>
          !
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          in?
        </p>
      </div>
      <div className="userLinks">
        <ul>
          <li>
            <Link
              to="/user/dashboard/info"
              style={isActive("/user/dashboard/info")}
            >
              Personal information
            </Link>
          </li>
          <li>
            <Link
              to="/user/dashboard/cart"
              style={isActive("/user/dashboard/cart")}
            >
              Shopping cart
            </Link>
          </li>
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;
