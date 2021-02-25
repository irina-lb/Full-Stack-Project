//routes import
import { Link, Redirect } from "react-router-dom";

//error alert
export const showError = (error) => (
  <div className="error" style={{ display: error ? "" : "none" }}>
    {error}
  </div>
);

//success alert
export const showSuccess = (success) => (
  <div className="success" style={{ display: success ? "" : "none" }}>
    New account was created. Please <Link to="/login">Log In</Link>
  </div>
);

//loading alert
export const showLoading = (loading) => {
  if (loading) {
    return (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );
  }
};
// redirect to home page after login

export const redirectUser = (redirect) => {
  if (redirect) {
    return <Redirect to="/" />;
  }
};
