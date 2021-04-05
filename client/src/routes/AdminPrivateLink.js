//routes import
import { Route, Redirect } from "react-router-dom";
//controllers import
import { isAuthenticated } from "../controllers/auth";

const AdminPrivateLink = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.role === 1 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminPrivateLink;
