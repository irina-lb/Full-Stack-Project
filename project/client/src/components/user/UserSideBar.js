// import router
import { Link, useHistory } from "react-router-dom";
//function import
import { signout } from "../../controllers/auth";

function UserSideBar() {
  //history
  const history = useHistory();

  return (
    <div className="userSideBar">
      <div className="userInfo">
        <ul>
          <h4>Your tools:</h4>
          <li>
            <Link to="/user/dashboard/info">Info</Link>
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
