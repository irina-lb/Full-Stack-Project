//routes import
import { Link, useLocation, useHistory } from "react-router-dom";
//import function
import { signout } from "../../controllers/auth";

function AdminSideBar() {
  //history
  const history = useHistory();

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
    <div className="adminSideBar">
      <div className="adminInfo">
        <h4>
          <Link to="/admin/info">Personal information</Link>
        </h4>
        <ul>
          <h4>Categories:</h4>
          <li>
            <Link
              to="/admin/create_category"
              style={isActive("/admin/create_category")}
            >
              Create category
            </Link>
          </li>
          <li>
            <Link
              to="/admin/update_category"
              style={isActive("/admin/update_category")}
            >
              Change category
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
        <ul>
          <h4>Products:</h4>
          <li>
            <Link
              to="/admin/create_product"
              style={isActive("/admin/create_product")}
            >
              Create product
            </Link>
          </li>
          <li>
            <Link
              to="/admin/update_product"
              style={isActive("/admin/update_product")}
            >
              Change product
            </Link>
          </li>
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSideBar;
