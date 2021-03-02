//functions import
import { isAuthenticated } from "../controllers/auth";

function UserInfo() {
  //take user from jwt
  const { user } = isAuthenticated();
  return (
    <div className="userInfo">
      <h2>Personal Information:</h2>
      <ul>
        <li>
          Name: <span>{user.firstName}</span>
        </li>
        <li>
          Last name: <span>{user.lastName}</span>
        </li>
        <li>
          Email: <span>{user.email}</span>
        </li>
        <li>
          Birth Date: <span>{user.birthDate}</span>
        </li>
        <li>
          Tel. number: <span>{user.phoneNumber}</span>
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
