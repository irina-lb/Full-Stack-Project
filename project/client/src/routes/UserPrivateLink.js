//routes import
import { Route, Redirect } from "react-router-dom";
//controllers import
import { isAuthenticated } from "../controllers/auth";

const UserPrivateLink = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.role === 0 ? (
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

export default UserPrivateLink;
