//img import
import signup from "../styles/img/signup.jpg";
// import states
import { useState } from "react";
//import functions
import { signUp } from "../controllers/auth";
import { showError, showSuccess } from "../controllers/alerts";
//import router
import { Link } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnimation } from "../animation";

function SignUp() {
  //states
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //submit result to bd
  const submitForm = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signUp(values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };
  return (
    <motion.div
      className="signUpForm"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <img src={signup} alt="Ups.." />
      <div className="itemsContainer">
        <div className="formText">
          <h2>Create new account</h2>
          <p>
            Hey there! Sign up for the most
            <span> yummiest </span> meal! And we will help you become a real
            <span> chef </span>!
          </p>
        </div>
        {showSuccess(values.success)}
        {showError(values.error)}
        <form>
          <div className="formItem">
            <label htmlFor="nameInput">Name(s):</label>
            <input
              onChange={handleChange("firstName")}
              value={values.firstName}
              type="text"
              placeholder="Your name..."
              id="nameInput"
            />
          </div>

          <div className="formItem">
            <label htmlFor="lastNameInput">Surname(s):</label>
            <input
              onChange={handleChange("lastName")}
              value={values.lastName}
              type="text"
              placeholder="Your last name..."
              id="lastNameInput"
            />
          </div>

          <div className="formItem">
            <label htmlFor="emailInput">Email:</label>
            <input
              onChange={handleChange("email")}
              value={values.email}
              type="email"
              placeholder="Your email..."
              id="emailInput"
            />
          </div>

          <div className="formItem">
            <label htmlFor="passwordInput">Password:</label>
            <input
              onChange={handleChange("password")}
              value={values.password}
              type="password"
              placeholder="Your password..."
              id="passwordInput"
            />
          </div>
          <button onClick={submitForm} className="submitButton">
            Submit
          </button>
        </form>
        <p>
          Already have an account?
          <Link to="/login"> Log In</Link>
        </p>
      </div>
    </motion.div>
  );
}

export default SignUp;
