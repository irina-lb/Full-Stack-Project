//routes import
import { Route } from "react-router-dom";
//components import
import UserInfo from "../components/UserInfo";

function UserRoutes() {
  return (
    <div className="userRoutes">
      <Route path="/user/dashboard/info" component={UserInfo} />
    </div>
  );
}

export default UserRoutes;
