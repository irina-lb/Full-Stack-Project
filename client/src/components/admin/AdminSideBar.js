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
        <ul>
          <h4>Orders:</h4>
          <li>
            <Link
              className="adminLink"
              to="/admin/show_orders"
              style={isActive("/admin/show_orders")}
            >
              Show orders
            </Link>
          </li>
        </ul>
        <ul>
          <h4>Categories:</h4>
          <li>
            <Link
              className="adminLink"
              to="/admin/create_category"
              style={isActive("/admin/create_category")}
            >
              Create category
            </Link>
          </li>
          <li>
            <Link
              className="adminLink"
              to="/admin/update_category"
              style={isActive("/admin/update_category")}
            >
              Update/delete category
            </Link>
          </li>
        </ul>
        <ul>
          <h4>Products:</h4>
          <li>
            <Link
              className="adminLink"
              to="/admin/create_product"
              style={isActive("/admin/create_product")}
            >
              Create product
            </Link>
          </li>
          <li>
            <Link
              className="adminLink"
              to="/admin/update_products"
              style={isActive("/admin/update_products")}
            >
              Update/delete product
            </Link>
          </li>
          <ul>
            <h4>Blog:</h4>
            <li>
              <Link
                className="adminLink"
                to="/admin/create_post"
                style={isActive("/admin/create_post")}
              >
                Create post
              </Link>
            </li>
            <li>
              <Link
                className="adminLink"
                to="/admin/update_post"
                style={isActive("/admin/update_post")}
              >
                Update/delete post
              </Link>
            </li>
          </ul>
          <li>
            <a
              className="adminLink signout"
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

export default AdminSideBar;
