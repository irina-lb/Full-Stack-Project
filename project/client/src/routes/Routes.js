// routes import
import { Route, Switch } from "react-router-dom";
import AdminPrivateLink from "./AdminPrivateLink";
import UserPrivateLink from "./UserPrivateLink";
//pages import
import Menu from "../pages/Menu";
import Contacts from "../pages/Contacts";
import Faq from "../pages/Faq";
import HomePage from "../pages/HomePage";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
//components import
import ProductPage from "../components/Menu/ProductPage";
import ShoppingCart from "../pages/ShoppingCart";

function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/faq" component={Faq} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/product/:productId" exact component={ProductPage} />
        <Route path="/user/shoppingCart" exact component={ShoppingCart} />
      </Switch>
      <UserPrivateLink path="/user/dashboard" component={UserDashboard} />
      <AdminPrivateLink path="/admin" component={AdminDashboard} />
    </div>
  );
}

export default Routes;
