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
import ShoppingCart from "../pages/ShoppingCart";
import Blog from "../pages/Blog";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
//import hooks
import { useEffect } from "react";

function Routes() {
  //scroll to top
  const pathname = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="Routes">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/blog" component={Blog} />
        <Route path="/faq" component={Faq} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route
          path={["/user/shoppingCart", "/user/checkout"]}
          exact
          component={ShoppingCart}
        />
      </Switch>
      <UserPrivateLink path="/user/dashboard" component={UserDashboard} />
      <AdminPrivateLink path="/admin" component={AdminDashboard} />

      <Footer />
    </div>
  );
}

export default Routes;
