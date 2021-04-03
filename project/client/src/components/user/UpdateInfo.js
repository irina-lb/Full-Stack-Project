//hooks import
import { useState, useEffect } from "react";
//routes import
import { useHistory } from "react-router-dom";
//functions import
import { isAuthenticated } from "../../controllers/auth";
import {
  showUserInfo,
  updateUserInfo,
  updateUser,
} from "../../controllers/user";

function UpdateInfo({ match }) {
  //history
  const history = useHistory();

  //states
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthDate: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  //take user from jwt
  const { token } = isAuthenticated();

  //show info of the user by id
  const showInfo = (userId) => {
    showUserInfo(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({
          ...values,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          birthDate: data.birthDate,
        });
      }
    });
  };

  useEffect(() => {
    showInfo(match.params.userId);
  }, []);

  //check changes
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    updateUserInfo(match.params.userId, token, values).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            birthDate: data.birthDate,
            success: true,
          });
          history.push(`/user/dashboard/info/${match.params.userId}`);
        });
      }
    });
  };

  return (
    <div className="userUpdate">
      <h3>Update personal information:</h3>
      <form>
        <div>
          <label htmlFor="firstName">First name(s):</label>
          <input
            id="firstName"
            type="text"
            onChange={handleChange("firstName")}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name(s):</label>
          <input
            id="lastName"
            type="text"
            onChange={handleChange("lastName")}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Tel.number:</label>
          <input
            id="phoneNumber"
            type="tel"
            onChange={handleChange("phoneNumber")}
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birth date:</label>
          <input
            id="birthDate"
            type="date"
            onChange={handleChange("birthDate")}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" onChange={handleChange("email")} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={handleChange("password")}
          />
        </div>

        <button onClick={submitForm}>Update</button>
      </form>
    </div>
  );
}

export default UpdateInfo;
