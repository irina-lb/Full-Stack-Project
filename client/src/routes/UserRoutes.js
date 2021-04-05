//routes import
import { Route } from "react-router-dom";
//components import
import UserInfo from "../components/UserInfo";
import UpdateInfo from "../components/user/UpdateInfo";
import OrdersHistory from "../components/user/OrdersHistory";

function UserRoutes() {
  return (
    <div className="userRoutes">
      <Route path="/user/dashboard/info/:userId" component={UserInfo} />
      <Route path="/user/dashboard/update/:userId" component={UpdateInfo} />
      <Route path="/user/dashboard/orders/:userId" component={OrdersHistory} />
    </div>
  );
}

export default UserRoutes;
