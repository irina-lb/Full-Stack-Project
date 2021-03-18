//functions import
import { isAuthenticated } from "../controllers/auth";
//router import
import UserRoutes from "../routes/UserRoutes";
//import components
import UserSidebar from "../components/user/UserSideBar";

function UserDashboard({ history }) {
  //take user from jwt
  const { user } = isAuthenticated();
  return (
    <div className="userDashboard">
      <div className="userInfo">
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
      <div className="userMainSection">
        <UserSidebar />
        <UserRoutes />
      </div>
    </div>
  );
}

export default UserDashboard;
