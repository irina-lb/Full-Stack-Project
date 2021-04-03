//functions import
import { isAuthenticated } from "../controllers/auth";
//router import
import UserRoutes from "../routes/UserRoutes";
//import components
import UserSidebar from "../components/user/UserSideBar";

function UserDashboard() {
  //take user from jwt
  const { user } = isAuthenticated();
  return (
    <div className="userDashboard">
      <div className="userHello">
        <h2>
          Hello
          <span>
            {user.firstName} {user.lastName}
          </span>
          !
        </h2>
        <p>
          We are glad to see you with us!! Here you can check your personal
          information and history of your orders.
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
