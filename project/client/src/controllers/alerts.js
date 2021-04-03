//routes import
import { Link } from "react-router-dom";
//alerts
import swal from "sweetalert";

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

//success created product
export const productSuccess = (success) => {
  if (success) {
    return <div className="success">The product is created</div>;
  }
};

//success created post
export const postSuccess = (success) => {
  if (success) {
    return <div className="success">The post is created</div>;
  }
};

//alerts of adding to cart
export const productAlert = (product) => {
  swal({
    title: `${product.name}`,
    text: "has been added to your cart",
    icon: "success",
    button: "OK",
    timer: "3000",
  });
};

//success alert, adding product to the cart
export const loginAlert = () => {
  swal({
    title: "Ups..",
    text: "You have to log in before",
    icon: "warning",
    button: "OK",
  });
};
//success alert, adding product to the cart
export const adminAlert = () => {
  swal({
    title: "Ups..",
    text: "You should to be a user!",
    icon: "error",
    button: "OK",
  });
};
