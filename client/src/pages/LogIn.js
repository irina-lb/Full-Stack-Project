//import states
import { useState } from "react";
//routes import
import { useHistory, Link } from "react-router-dom";
//import functions
import { login, authenticate, isAuthenticated } from "../controllers/auth";
import { showLoading, showError } from "../controllers/alerts";
//img import
import welcome from "../styles/img/welcome.jpg";
//animation
import { motion } from "framer-motion";
import { pageAnimation, fadeSlow } from "../animation";

function LogIn() {
  //states
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirect: false,
  });

  //take user from jwt
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //check login and give a result
  const submitForm = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    login(values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirect: true,
          });
        });
      }
    });
  };

  // redirect user, depends of his role
  const history = useHistory();

  const redirectUser = () => {
    if (values.redirect) {
      if (user && user.role === 1) {
        history.push("/admin/dashboard");
      } else {
        history.push("/user/dashboard");
      }
    }
    if (isAuthenticated()) {
      history.push("/");
    }
  };

  return (
    <motion.div
      className="loginForm"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <div className="formText">
        <h2>Are you ready?</h2>
        <p>
          We are glad to see you! Please login to use all the features of our
          page!!
        </p>
        {showLoading(values.loading)}
        {showError(values.error)}
      </div>

      <form>
        <div className="formItem">
          <label htmlFor="checkEmail">Email:</label>
          <input
            onChange={handleChange("email")}
            type="email"
            placeholder="Your email..."
            id="checkEmail"
            value={values.email}
          />
        </div>

        <div className="formItem">
          <label htmlFor="checkPassword">Password:</label>
          <input
            onChange={handleChange("password")}
            type="password"
            placeholder="Your password..."
            id="checkPassword"
            value={values.password}
          />
        </div>
        <button onClick={submitForm}>Submit</button>
      </form>
      <p>
        <small>Don't have an account?</small> <Link to="signup"> Sign Up</Link>
      </p>
      {redirectUser()}
      <motion.img src={welcome} alt="Ups.." variants={fadeSlow} />
    </motion.div>
  );
}

export default LogIn;
