//routes import
import { Link } from "react-router-dom";

//login and signup error
export const showError = (error) => (
  <div className="error" style={{ display: error ? "" : "none" }}>
    {error}
  </div>
);

// login and signup success
export const showSuccess = (success) => (
  <div className="success" style={{ display: success ? "" : "none" }}>
    New account was created. Please <Link to="/login">Log In</Link>
  </div>
);

//loading alert
export const showLoading = (loading) => {
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
};

//category create success
export const categorySuccess = (success) => {
  if (success) {
    return <div className="success">The category is created</div>;
  }
};

//category create error
export const categoryError = (error) => {
  if (error) {
    return <div className="error">Category should be unique</div>;
  }
};

export const productSuccess = (success) => {
  if (success) {
    return <div className="success">The product is created</div>;
  }
};
