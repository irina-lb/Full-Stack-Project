//hooks import
import { useState, useEffect } from "react";
//import router
import { Link } from "react-router-dom";
//functions import
import { isAuthenticated } from "../controllers/auth";
import { showUserInfo } from "../controllers/user";
//moment
import moment from "moment";

function UserInfo({ match }) {
  //states
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthDate: "",
    email: "",
    password: "",
    error: false,
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

  return (
    <div className="userInfo">
      <h4>Your personal information:</h4>
      <ul>
        <li>
          <span> Name: </span>
          {values.firstName}
        </li>
        <li>
          <span> Last name: </span>
          {values.lastName}
        </li>
        <li>
          <span> Email: </span>
          {values.email}
        </li>
        <li>
          <span> Birth Date: </span>
          {moment(values.birthDate).format("L")}
        </li>
        <li>
          <span>Tel. number: </span>
          {values.phoneNumber}
        </li>
      </ul>
      <small>
        If you want to change some information click{" "}
        <Link
          to={`/user/dashboard/update/${match.params.userId}`}
          className="linkToUpdate"
        >
          "Update information"
        </Link>
        section.
      </small>
    </div>
  );
}

export default UserInfo;
