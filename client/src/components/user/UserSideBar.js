// import router
import { Link, useHistory, useLocation } from "react-router-dom";
//function import
import { signout } from "../../controllers/auth";
//function import
import { isAuthenticated } from "../../controllers/auth";

function UserSideBar() {
  //history
  const history = useHistory();

  //info from jwt token
  const { user } = isAuthenticated();

  //show active page
  const location = useLocation().pathname;
  const isActive = (path) => {
    if (location === path) {
      return {
        color: "#ffc30b",
      };
    } else {
      return { color: "#464747" };
    }
  };

  return (
    <div className="userSideBar">
      <div className="userInfo">
        <ul className="sideBarList">
          <h4>Your info:</h4>
          <li>
            <Link
              to={`/user/dashboard/info/${user._id}`}
              style={isActive(`/user/dashboard/info/${user._id}`)}
            >
              Personal information
            </Link>
          </li>
          <li>
            <Link
              to={`/user/dashboard/update/${user._id}`}
              style={isActive(`/user/dashboard/update/${user._id}`)}
            >
              Update information
            </Link>
          </li>
          <li>
            <Link
              to={`/user/dashboard/orders/${user._id}`}
              style={isActive(`/user/dashboard/orders/${user._id}`)}
            >
              Orders history
            </Link>
          </li>
          <li>
            <a
              onClick={() =>
                signout(() => {
                  history.push("/");
                })
              }
            >
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserSideBar;
