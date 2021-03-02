//components import
import UserInfo from "../components/UserInfo";
//router import
import { Link } from "react-router-dom";

function AdminDashboard({ history }) {
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
  return (
    <div className="adminDashboard">
      <h3>Admin Dashboard</h3>
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
          <li>Sign Out</li>
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

export default AdminDashboard;
